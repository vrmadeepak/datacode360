
var form = document.getElementById('login_form');
var form_close = document.getElementById('close-form');
var error = document.getElementById('form_error');
var email = document.getElementById('email-login');
form.addEventListener('submit', errorFunc)
function errorFunc (e) {
    e.preventDefault();
    error.innerHTML=`<p>Email address not registered with us!</p>`
}
form_close.addEventListener('click', resetForm);
function resetForm(){
    error.innerHTML='';
}