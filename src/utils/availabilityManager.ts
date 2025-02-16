
interface TimeSlot {
  time: string;
  available: boolean;
}

interface DayAvailability {
  [key: string]: TimeSlot[];
}

// Função para gerar horários do dia (9h às 18h, intervalos de 1h)
const generateTimeSlots = (): string[] => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

// Gera disponibilidade para os próximos 30 dias
export const generateAvailability = (): DayAvailability => {
  const availability: DayAvailability = {};
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    
    // Pula domingos (0 = domingo)
    if (currentDate.getDay() === 0) continue;
    
    const dateString = currentDate.toISOString().split('T')[0];
    const timeSlots = generateTimeSlots().map(time => ({
      time,
      // Simula disponibilidade aleatória (em produção, isso viria do backend)
      available: Math.random() > 0.3
    }));
    
    availability[dateString] = timeSlots;
  }
  
  return availability;
};

export const getAvailableTimesForDate = (date: string, availability: DayAvailability): TimeSlot[] => {
  return availability[date] || [];
};
