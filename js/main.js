!function(){const t=document.querySelector(".food-maincard");function e(){const t=document.querySelectorAll(".food-card__box"),e=document.querySelector(".total-price");let o=0;t.forEach((function(t){const e=t.querySelector("[data-counter]"),n=t.querySelector(".food-card__price-money"),r=parseInt(e.innerText)*parseInt(n.innerText);o+=r})),e.innerText=o}window.addEventListener("click",(function(o){if(o.target.hasAttribute("data-cart")){const n=o.target.closest(".food-box"),r={id:n.dataset.id,imgSrc:n.querySelector(".food-box__img").getAttribute("src"),title:n.querySelector(".food-box__name").innerText,itemsInBox:n.querySelector("[data-item-in-box]").innerText,weight:n.querySelector(".food-box__price-weight").innerText,price:n.querySelector(".food-box__price-money").innerText,counter:n.querySelector("[data-counter]").innerText},a=t.querySelector(`[data-id="${r.id}"]`);if(a){const t=a.querySelector("[data-counter]");t.innerText=parseInt(t.innerText)+parseInt(r.counter)}else{const e=`\n            <div class="food-card">\n                <div class="food-card__box" data-id="${r.id}">\n                    <img src="${r.imgSrc}" alt="" class="food-card__box-img">\n                    <div class="food-card__info">\n                        <h4 class="food-card__name">${r.title}</h4>\n                        <div class="food-card__name-inner">\n                            <p data-item-in-box class="food-card__text">${r.itemsInBox}</p>\n                            <p class="food-card__price-weight">${r.weight}</p>\n                        </div>\n                        <div class="food-card__inner">\n                            \x3c!-- счетчик --\x3e\n                            <div class="food-box__amount">\n                                <button class="food-box__amount-btn" data-action="minus">-</button>\n                                <p class="food-card__amount-text" data-counter>${r.counter}</p>\n                                <button class="food-box__amount-btn" data-action="plus">+</button>\n                            </div>                                    \n                            <p class="food-card__price-money">${r.price}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            `;t.insertAdjacentHTML("beforeend",e)}n.querySelector("[data-counter]").innerText="1",e()}})),window.addEventListener("click",(function(t){let o;"plus"!==t.target.dataset.action&&"minus"!==t.target.dataset.action||(o=t.target.closest(".food-box__amount").querySelector("[data-counter]")),"plus"===t.target.dataset.action&&(o.innerText=++o.innerText),"minus"===t.target.dataset.action&&(parseInt(o.innerText)>1?o.innerText=--o.innerText:t.target.closest(".food-maincard")&&1===parseInt(o.innerText)&&(t.target.closest(".food-card__box").remove(),e())),t.target.hasAttribute("data-action")&&t.target.closest(".food-card")&&e()}))}();