
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const availableTimes = {
  "2024-03-20": ["09:00", "10:00", "14:00", "15:00"],
  "2024-03-21": ["11:00", "13:00", "16:00"],
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, date: e.target.value, time: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="grid grid-cols-2 gap-4">
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
        <div className="space-y-2">
          <Label htmlFor="time">Horário</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {availableTimes[formData.date as keyof typeof availableTimes]?.map((time) => (
              <Button
                key={time}
                type="button"
                variant={formData.time === time ? "default" : "outline"}
                onClick={() => setFormData({ ...formData, time })}
                className="w-full"
              >
                {time}
              </Button>
            ))}
          </div>
          {formData.date && !availableTimes[formData.date as keyof typeof availableTimes] && (
            <p className="text-sm text-red-500 mt-2">
              Não há horários disponíveis para esta data. Por favor, escolha outra data.
            </p>
          )}
        </div>
      </div>
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
