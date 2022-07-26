function toggleCartStatus () {
    const cartWrapper = document.querySelector('.food-card__box');
    console.log(cartWrapper.children);

    if(cartWrapper.children.length > 0) {
        console.log('y');
    } else {
        console.log('n');
    }
}

// Добавляем прослушку на всем окне
window.addEventListener('click', function(event) {
    // обьявляем переменную для счетчика    
    let counter;
    // проверяем клик строго по кнопкам + либо -
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // находим обертку счетчика
        const counterAmount = event.target.closest('.food-box__amount');
        // находим р с числом счетчика
        counter = counterAmount.querySelector('[data-counter]');
    }
    // Проверяем является ли элемент кнопкой +
    if (event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;
    }
    // Проверяем является ли элемент кнопкой -
    if (event.target.dataset.action === 'minus'){
        // проверяем чтобы счетчик был больше 1
        if(parseInt(counter.innerText) > 1) {
            // изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        // проверка на товар который находиться в корзине
        } else if (event.target.closest('.food-maincard') && parseInt(counter.innerText) === 1) {
            // удаляем товар из корзины
            event.target.closest('.food-card__box').remove();
            
            toggleCartStatus();
        }
        
    }
});
