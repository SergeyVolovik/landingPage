var modal = document.getElementsByClassName('modal')[0];
var btn = document.getElementsByClassName("contact__submit")[0];
var icon = document.getElementsByClassName("icon__close")[0];
var checkName = document.getElementsByClassName('form__name')[0];
var checkEmail = document.getElementsByClassName('form__mail')[0];
var checkMessage = document.getElementsByClassName('form__message')[0];


btn.onclick = function() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = checkEmail.value;
    if (checkName.value == "") {
        checkName.style.border = "1px solid red";
    }else {
        checkName.style.border = "1px solid green";
    }
    if (reg.test(address) == false) {
        checkEmail.style.border = "1px solid red";
        return false;
    }else {
        checkEmail.style.border = "1px solid green";
    }
    if (!checkName.value == '' && !checkEmail.value == '' && !checkMessage.value == '') {
        checkEmail.style.border =  "1px solid #999999"
        modal.style.display = 'block';
    }
};

icon.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};