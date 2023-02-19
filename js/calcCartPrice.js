function calcCartPrice() {
    const cartWtapper = document.querySelector('.cart-wrapper')
   
    const priceElements = cartWtapper.querySelectorAll('.price__currency');
   
    const totalPriceEl = document.querySelector('.total-price');
   
    const deliveryCost = document.querySelector('.delivery-cost');

    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

    let totalPrice=0;

    priceElements.forEach (function (item) {

    const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

    totalPrice += parseInt(amountEl.innerText) * parseInt(item.innerText)
   
    });
    
    totalPriceEl.innerText = totalPrice

    if (totalPrice > 0){
        cartDeliveryEl.classList.remove('none');
    } else (cartDeliveryEl.classList.add('none'))

    if (totalPrice>=600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText='бесплатно'
    }
    else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText='250 ₽'
    }
}

