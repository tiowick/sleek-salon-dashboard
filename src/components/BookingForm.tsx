
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

  useEffect(() => {
    if (formData.date) {
      const times = getAvailableTimesForDate(formData.date, availability);
      setAvailableTimesForDate(times);
      setFormData(prev => ({ ...prev, time: "" }));
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

    window.location.href = `https://wa.me/5571981859864?text=${encodeURIComponent(message)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
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
        />
      </div>
      {formData.date && (
        <div className="space-y-2">
          <Label>Horários Disponíveis</Label>
          <div className="grid grid-cols-3 gap-2">
            {availableTimesForDate.map(({ time, available }) => (
              <Button
                key={time}
                type="button"
                variant={formData.time === time ? "default" : "outline"}
                onClick={() => available && setFormData(prev => ({ ...prev, time }))}
                disabled={!available}
                className={`w-full ${!available && "opacity-50"}`}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div className="space-y-2">
        <Label>Serviço Desejado</Label>
        <RadioGroup
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="corte" id="corte" />
            <Label htmlFor="corte">Corte & Estilo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tratamento" id="tratamento" />
            <Label htmlFor="tratamento">Tratamento</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="maquiagem" id="maquiagem" />
            <Label htmlFor="maquiagem">Maquiagem</Label>
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
