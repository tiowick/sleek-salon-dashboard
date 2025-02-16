import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { generateAvailability, getAvailableTimesForDate } from "@/utils/availabilityManager";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [availability, setAvailability] = useState(generateAvailability());
  const [availableTimesForDate, setAvailableTimesForDate] = useState<Array<{ time: string; available: boolean }>>([]);
  const [showTimes, setShowTimes] = useState(true);

  useEffect(() => {
    if (formData.date) {
      const times = getAvailableTimesForDate(formData.date, availability);
      setAvailableTimesForDate(times);
      setFormData(prev => ({ ...prev, time: "" }));
      setShowTimes(true);
    }
  }, [formData.date]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0];
    
    if (selectedDate < today) {
      toast.error("Por favor, selecione uma data futura");
      return;
    }
    
    setFormData({ ...formData, date: selectedDate, time: "" });
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
    setShowTimes(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.time) {
      toast.error("Por favor, selecione um horário disponível");
      return;
    }

    const message = `
Olá! Gostaria de agendar um horário:

📝 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
📅 Data: ${formData.date}
⏰ Horário: ${formData.time}
💇‍♀️ Serviço: ${formData.service}
📌 Observações: ${formData.notes}
    `.trim();

    // Abre o WhatsApp e então recarrega a página após um pequeno delay
    window.open(`https://wa.me/5571981859864?text=${encodeURIComponent(message)}`, "_blank");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-h-[80vh] overflow-y-auto px-2">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="w-full"
          type="tel"
          placeholder="(71) 99999-9999"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">Data</Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
          required
          className="w-full"
        />
      </div>
      {formData.date && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Horário Selecionado: {formData.time || "Nenhum"}</Label>
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              onClick={() => setShowTimes(!showTimes)}
              className="text-sm"
            >
              {showTimes ? "Ocultar Horários" : "Mostrar Horários"}
            </Button>
          </div>
          
          {showTimes && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {availableTimesForDate.map(({ time, available }) => (
                <Button
                  key={time}
                  type="button"
                  variant={formData.time === time ? "default" : "outline"}
                  onClick={() => available && handleTimeSelect(time)}
                  disabled={!available}
                  className={`w-full text-sm ${!available && "opacity-50"}`}
                >
                  {time}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="space-y-2">
        <Label>Serviço Desejado</Label>
        <RadioGroup
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
          required
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
            <RadioGroupItem value="corte" id="corte" />
            <Label htmlFor="corte" className="flex-grow cursor-pointer">Corte & Estilo</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
            <RadioGroupItem value="tratamento" id="tratamento" />
            <Label htmlFor="tratamento" className="flex-grow cursor-pointer">Tratamento</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md">
            <RadioGroupItem value="maquiagem" id="maquiagem" />
            <Label htmlFor="maquiagem" className="flex-grow cursor-pointer">Maquiagem</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Observações</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Alguma observação adicional?"
          className="w-full min-h-[100px]"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full"
        disabled={!formData.date || !formData.time || !formData.service}
      >
        Enviar pelo WhatsApp
      </Button>
    </form>
  );
};

export default BookingForm;
