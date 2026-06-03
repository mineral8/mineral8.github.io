// АККОРДЕОН ДЛЯ ВОПРОСОВ (FAQ)
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-answer');
    const toggle = question.querySelector('.faq-toggle');
    
    // Закрываем все остальные
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = null;
        other.querySelector('.faq-toggle').textContent = '+';
      }
    });
    
    // Переключаем текущий
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      toggle.textContent = '−';
    } else {
      answer.style.maxHeight = null;
      toggle.textContent = '+';
    }
  });
});

// ПЛАВНЫЙ СКРОЛЛ ПО ССЫЛКАМ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// УВЕДОМЛЕНИЕ ПРИ ОТПРАВКЕ ФОРМЫ (для теста)
document.querySelector('form[name="contact"]')?.addEventListener('submit', function(e) {
  // Netlify сам обработает форму, это просто визуальный отклик
  alert('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
});