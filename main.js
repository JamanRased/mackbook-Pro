//all button handaler
//8GB Button
document.getElementById('btn-8gb').addEventListener('click', function(){
    const memoryItem = document.getElementById('memory-cost');
    const totalMemory = parseFloat(memoryItem);
    totalMemory.innerText = '0';
    totalCalculate();
})
//16GB Button
document.getElementById('btn-16gb').addEventListener('click', function(){
    const memoryItem = document.getElementById('memory-cost');
    memoryItem.innerText = '180';
    
    totalCalculate();
})
//25GB Button
document.getElementById('btn-25gb').addEventListener('click', function(){
    const storageItem = document.getElementById('storage-cost');
    storageItem.innerText = '0';

    totalCalculate();
})
//512GB Button
document.getElementById('btn-512gb').addEventListener('click', function(){
    const storageItem = document.getElementById('storage-cost');
    storageItem.innerText = '100';

    totalCalculate();
})
//1T Button
document.getElementById('btn-1T').addEventListener('click', function(){
    const storageItem = document.getElementById('storage-cost');
    storageItem.innerText = '180';

    totalCalculate();
})
//Delivery Button
document.getElementById('btn-freeDelivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = '0';

    totalCalculate();
})
//Delivery Button
document.getElementById('btn-chage20').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-cost');
    deliveryCharge.innerText = '20';

    totalCalculate();
})
// Tottal Cost Befor Pomo code
function totalCalculate(){
    const fixedProductPrice = document.getElementById('fixd-cost');
    const memoryCost = document.getElementById('memory-cost');
    const storgaeCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalCost = document.getElementById('total-cost');

    const total = parseInt(fixedProductPrice.innerText)+parseInt(memoryCost.innerText)+parseInt(storgaeCost.innerText)+parseInt(deliveryCost.innerText);
    totalCost.innerText = total;
    document.getElementById('finalTotal-cost').innerText = total;
}

// Tottal Cost after Pomo code

document.getElementById('pomoCode').addEventListener('click', function(){
   const pomoText = document.getElementById('pomo-input');
   const beforeTotal = pomoText.value;
   const totalPrice = document.getElementById('total-cost');

   const totalPriceValue = parseInt(totalPrice.innerText);

   if (beforeTotal == 'stevekaku' ){
    let discountPrice = totalPriceValue - (totalPriceValue*0.2);
    document.getElementById('finalTotal-cost').innerText = discountPrice;
    pomoText.value = '';
   }else {
       console.log('Pomo code is not Validw')
   }

})
