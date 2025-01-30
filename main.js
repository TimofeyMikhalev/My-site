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
