var total = document.getElementById('total');
var button = document.getElementById('calculate-button');

total.innerHTML += 50;

button.addEventListener('click', function () {

    var checkboxes = document.getElementsByClassName('check-ingredients');

    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            total.innerHTML += parseInt(checkboxes[i].value);
        }
    }

});