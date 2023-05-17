const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.obrigatorio')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const url = '../projetointer-main/projeto inter/Conteudo/conteudo.html'
form.addEventListener('submit', (event)=>{
    if(campos == ''){
    event.preventDefault();
    nameValidate();
    emailValidate();
    }
    else{
        location.href = '../projetointer-main/projeto inter/Conteudo/conteudo.html'
    }
});
function openInNewTab(url){
    const win = window.open(url)
    win.focus()
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