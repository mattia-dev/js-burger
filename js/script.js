var burgerName = document.getElementById('burger-name');
var total = document.getElementById('total');
var button = document.getElementById('calculate-button');
var discountComment = document.getElementById('discount-comment');

discountCodes20 = ["MAY20", "JUNE20", "JULY20", "AUGUST20"];
discountCodes30 = ["MAY30", "JUNE30", "JULY30", "AUGUST30"];

var basePrice = 10;

// burgerName.innerHTML = prompt("Come vuoi chiamare il tuo hamburger?");

total.innerHTML = "$ " + basePrice.toFixed(2);

discountComment.innerHTML = "";

button.addEventListener('click', function () {
    var sumPrice = basePrice;
    var checkboxes = document.getElementsByClassName('check-ingredients');
    var promoCode = document.getElementById('discount-coupon');
    var discount20 = 0.2;
    var discount30 = 0.3;
    var discountCommentText = "";

    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            sumPrice += parseFloat(checkboxes[i].value);
        }

    }

    var flag = false;

    for (var x = 0; x < discountCodes20.length; x++) {
        
        if (promoCode.value === discountCodes20[x]) {
            sumPrice -= sumPrice * discount20;
            flag = true;
        }  

    }

    for (var y = 0; y < discountCodes30.length; y++) {
        
        if (promoCode.value === discountCodes30[y]) {
            sumPrice -=  (sumPrice * discount30);
            flag = true;
        }

    }

    if (promoCode.value.length > 0) {
        if (flag) {
            discountCommentText = "Il codice sconto è stato inserito correttamente!";
            discountComment.style.color = "green";
        } else {
            discountCommentText = "Il codice sconto inserito non è valido o è scaduto.";
            discountComment.style.color = "red";
        }
    }

    total.innerHTML = "$ " + sumPrice.toFixed(2);

    discountComment.innerHTML = discountCommentText;
});