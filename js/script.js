var total = document.getElementById('total');
var button = document.getElementById('calculate-button');

discounts20 = ["MAY20", "JUNE20", "JULY20", "AUGUST20"];
discounts30 = ["MAY30", "JUNE30", "JULY30", "AUGUST30"];

var basePrice = 10;

total.innerHTML = "$ " + basePrice.toFixed(2);

button.addEventListener('click', function () {
    var sumPrice = basePrice;
    var checkboxes = document.getElementsByClassName('check-ingredients');
    var promoCode = document.getElementById('discount-coupon');
    var discount20 = 0.2;
    var discount30 = 0.3;

    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            sumPrice += parseFloat(checkboxes[i].value);
        }

        total.innerHTML = "$ " + sumPrice.toFixed(2);
    }

    for (var x = 0; x < discounts20.length; x++) {
        if (promoCode.value === discounts20[x]) {
            sumPrice -= sumPrice * discount20;
        }  

        total.innerHTML = "$ " + sumPrice.toFixed(2);
    }

    for (var y = 0; y < discounts30.length; y++) {
        if (promoCode.value === discounts30[y]) {
            sumPrice -=  (sumPrice * discount30);
        }

        total.innerHTML = "$ " + sumPrice.toFixed(2);
    }
});