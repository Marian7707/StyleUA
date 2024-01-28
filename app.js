document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
  
    // Функція для закриття меню
    const closeMenu = () => {
      sidebar.classList.remove('active');
    };
  
    hamburger.addEventListener('click', (event) => {
      // Переключає клас 'active'
      sidebar.classList.toggle('active');
  
      // Зупиняємо подію, щоб вона не поширилася далі
      event.stopPropagation();
    });
  
    // Закриває меню при кліку за його межами
    document.addEventListener('click', (event) => {
      const target = event.target; // Де саме було зроблено клік
  
      // Якщо клік зроблено не на меню та не на гамбургер-кнопку
      if (!sidebar.contains(target) && !hamburger.contains(target)) {
        closeMenu();
      }
    });
  
    // Опціонально: закриває меню при зміні розміру вікна
    window.addEventListener('resize', closeMenu);
  });
  