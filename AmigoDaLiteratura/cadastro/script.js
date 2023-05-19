const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.obrigatorio')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
    
    form.addEventListener('submit', ()=>{
        setValidate();
    })
});
function setValidate(){
    window.location.href = "../projetointer-main/projeto inter/Cadastro/cadastro.html"
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
function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setError(2);
    }
    else{
        removeError(2);
        comparePassword();
    }
}
function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3);
    }
    else{
        setError(3);
    }
}