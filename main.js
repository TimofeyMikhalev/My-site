let blocsContent = document.querySelectorAll('.page__blog');
let linkNav = document.querySelectorAll('.header__link')

linkNav.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Убираем 'show' у всех ссылок
        linkNav.forEach((btn) => {
            btn.classList.remove('show')
        })
        // Добавляем 'show' только к текущей ссылке
        item.classList.add('show');

        // Убираем 'active' у всех блоков
        blocsContent.forEach(item => {
            item.classList.remove('active')
        })
        // Добавляем 'active' только к нужному блоку (по индексу)
        if(blocsContent[index]) {
            blocsContent[index].classList.add('active')
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("translateBtn");
    let currentLang = "en"; // Начальный язык

    button.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ru" : "en"; // Переключение языка

        document.querySelectorAll("[data-en]").forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLang}`);
        });

        // Обновляем текст кнопки
        button.textContent = currentLang === "en" ? "ru" : "en";
    });
});