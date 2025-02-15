
// Inicialização do Swiper
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

// Menu Mobile
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

// Horários disponíveis
const availableTimes = {
  "2024-03-20": ["09:00", "10:00", "14:00", "15:00"],
  "2024-03-21": ["11:00", "13:00", "16:00"],
};

function updateAvailableTimes() {
  const dateInput = document.querySelector('input[name="date"]');
  const timeSlotsDiv = document.getElementById('timeSlots');
  const selectedDate = dateInput.value;
  
  timeSlotsDiv.innerHTML = '';
  
  if (availableTimes[selectedDate]) {
    availableTimes[selectedDate].forEach(time => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'p-2 border rounded hover:bg-blue-50';
      button.textContent = time;
      button.onclick = () => selectTime(button, time);
      timeSlotsDiv.appendChild(button);
    });
  } else {
    timeSlotsDiv.innerHTML = '<p class="text-red-500 text-sm">Não há horários disponíveis para esta data.</p>';
  }
}

function selectTime(button, time) {
  // Remove seleção anterior
  document.querySelectorAll('#timeSlots button').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('hover:bg-blue-50');
  });
  
  // Adiciona seleção ao botão clicado
  button.classList.add('bg-blue-600', 'text-white');
  button.classList.remove('hover:bg-blue-50');
  
  // Armazena o horário selecionado
  window.selectedTime = time;
}

// Envio do formulário
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Adiciona o horário selecionado
  const time = window.selectedTime;
  if (!time) {
    alert('Por favor, selecione um horário');
    return;
  }
  
  const message = `
Olá! Gostaria de agendar um horário:

📝 Nome: ${formData.get('name')}
📱 Telefone: ${formData.get('phone')}
📅 Data: ${formData.get('date')}
⏰ Horário: ${time}
💇‍♀️ Serviço: ${formData.get('service')}
📌 Observações: ${formData.get('notes') || 'Nenhuma'}
  `.trim();

  window.location.href = `https://wa.me/5571981859864?text=${encodeURIComponent(message)}`;
}

// Fecha o modal quando clica fora
window.onclick = function(event) {
  const modal = document.getElementById('bookingModal');
  if (event.target === modal) {
    closeModal('bookingModal');
  }
}

// Define data mínima como hoje
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.querySelector('input[name="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
});
