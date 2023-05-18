const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.obrigatorio')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    if(campos){
        setValidate();
    }
});
function erroValidate(){
    nameValidate();
    emailValidate();
}
function setValidate(){
    window.location.href = "../projeto-jaco/1/index.html"
}
function setError(index){
    campos[index].style.border = '2px solid #ff0000';
    spans[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border = 'none';
    spans[index].style.display = 'none';
}
function nameValidate(){
    if(campos[0].value.length < 3 || campos[0].value == ''){
        setError(0);
    }
    else{
        removeError(0);
    }
}
function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else{
        removeError(1);
    }
}