// const mainCard = document.querySelector('.food-maincard');

// // отслеживаем клик по странице
// window.addEventListener('click', function (event){
//     // проверяем был ли совершен клик по кнопке добавить в корзину
//     if (event.target.hasAttribute('data-cart')) {

//         // находим карточку с товаром внутри которой был совершен клик
//         const card = event.target.closest('.food-box');

//         // собираем данные с этого товара и записываем их в единый обьект productInfo
//         const productInfo = {
//             id: card.dataset.id,
//             imgSrc: card.querySelector('.food-box__img').getAttribute('src'),
//             title: card.querySelector('.food-box__name').innerText,
//             itemsInBox: card.querySelector('[data-item-in-box]').innerText,
//             weight: card.querySelector('.food-box__price-weight').innerText,
//             price: card.querySelector('.food-box__price-money').innerText,
//             counter: card.querySelector('[data-counter]').innerText,
            
//         };
//         // проверяем есть ли уже таков товар в корзине
//         const itemInCart = mainCard.querySelector(`[data-id="${productInfo.id}"]`);

//         // если товар в корзине
//         if(itemInCart) {
//             const counterElement = itemInCart.querySelector('[data-counter]');
//             counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
//         } else {
//             // если товара нет в корзине то мы -
//             // Cобранные данные подставим в шаблон для товара в корзине
//             const cartItemHTML = `
            
//                 <div class="food-card__box" data-id="${productInfo.id}">
//                     <img src="${productInfo.imgSrc}" alt="" class="food-card__box-img">
//                     <div class="food-card__info">
//                         <h4 class="food-card__name">${productInfo.title}</h4>
//                         <div class="food-card__name-inner">
//                             <p data-item-in-box class="food-card__text">${productInfo.itemsInBox}</p>
//                             <p class="food-card__price-weight">${productInfo.weight}</p>
//                         </div>
//                         <div class="food-card__inner">
//                             <!-- счетчик -->
//                             <div class="food-box__amount">
//                                 <button class="food-box__amount-btn" data-action="minus">-</button>
//                                 <p class="food-card__amount-text" data-counter>${productInfo.counter}</p>
//                                 <button class="food-box__amount-btn" data-action="plus">+</button>
//                             </div>                                    
//                             <p class="food-card__price-money">${productInfo.price}</p>
//                         </div>
//                     </div>
//                 </div>
            
//             `;
//             // отобразим товар в корзине
//             mainCard.insertAdjacentHTML('beforeend', cartItemHTML);
//         }
//             // сбрасываем счетчик добавленного товара на  1
//         card.querySelector('[data-counter]').innerText = '1';
//     }
// });

// // Добавляем прослушку на всем окне
// window.addEventListener('click', function(event) {
//     // обьявляем переменную для счетчика    
//     let counter;
//     // проверяем клик строго по кнопкам + либо -
//     if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
//         // находим обертку счетчика
//         const counterAmount = event.target.closest('.food-box__amount');
//         // находим р с числом счетчика
//         counter = counterAmount.querySelector('[data-counter]');
//     }
//     // Проверяем является ли элемент кнопкой +
//     if (event.target.dataset.action === 'plus'){
//         counter.innerText = ++counter.innerText;
//     }
//     // Проверяем является ли элемент кнопкой -
//     if (event.target.dataset.action === 'minus'){
//         // проверяем чтобы счетчик был больше 1
//         if(parseInt(counter.innerText) > 1) {
//             // изменяем текст в счетчике уменьшая его на 1
//             counter.innerText = --counter.innerText;
//         // проверка на товар который находиться в корзине
//         } else if (event.target.closest('.food-maincard') && parseInt(counter.innerText) === 1) {
//             // удаляем товар из корзины
//             event.target.closest('.food-card__box').remove();
            
//         }
        
//     }
// });
