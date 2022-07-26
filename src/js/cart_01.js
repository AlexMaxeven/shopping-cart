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
//         // Cобранные данные подставим в шаблон для товара в корзине
//         const cartItemHTML = `
//         <div class="food-card">
//             <div class="food-card__box" data-id="${productInfo.id}">
//                 <img src="${productInfo.imgSrc}" alt="" class="food-card__box-img">
//                 <div class="food-card__info">
//                     <h4 class="food-card__name">${productInfo.title}</h4>
//                     <div class="food-card__name-inner">
//                         <p data-item-in-box class="food-card__text">${productInfo.itemsInBox}</p>
//                         <p class="food-card__price-weight">${productInfo.weight}</p>
//                     </div>
//                     <div class="food-card__inner">
//                         <!-- счетчик -->
//                         <div class="food-card__amount">
//                             <button class="food-card__amount-btn" data-action="minus">-</button>
//                             <p class="food-card__amount-text" data-counter>${productInfo.counter}</p>
//                             <button class="food-card__amount-btn" data-action="plus">+</button>
//                         </div>                                    
//                         <p class="food-card__price-money">${productInfo.price}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//         // отобразим товар в корзине
//         mainCard.insertAdjacentHTML('beforeend', cartItemHTML);
//     }
// })