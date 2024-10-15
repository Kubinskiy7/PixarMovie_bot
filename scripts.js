// Получаем кнопку и добавляем обработчик события
const themeToggle = document.getElementById('theme-toggle');

// Проверяем, есть ли тема в localStorage
let currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-theme', currentTheme === 'dark');

// Обработчик смены темы
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Сохраняем выбранную тему в localStorage
    currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});
