window.onload=function(){
  const btnList = document.getElementById("list");
const btnRegister = document.getElementById("register");


// Logic : 
// - 2 big html sections are created 
    // - one for the content of 'Listar' with class "listar"
    //    - the secound for the content of cadastrar Novo with class "cadastro"
// - when the 'Listar' btn is clicked ==> display : none is added to the secound section
// - when the 'Cadastrar Novo' btn is clicked ==> display : none is added to the first section

let sectionCadastro = document.querySelector(".cadastro");
let sectionListar = document.querySelector(".listar");
let submitFormsBtn = document.querySelector("#submitForms");

if(localStorage.getItem('State') === 'listar'){
    showOne();
}

if(localStorage.getItem('State') === 'cadastro'){
    showTwo();
}

function showOne()
{
    btnRegister.classList.remove('actived');
    btnList.classList.add('actived');
    sectionListar.style.removeProperty('display','none');
    sectionCadastro.style.setProperty('display','none');
    window.localStorage.setItem("State","listar");
}

function showTwo(){
    btnList.classList.remove('actived');
    btnRegister.classList.add('actived');
    sectionCadastro.style.removeProperty('display','none');
    sectionListar.style.setProperty('display','none');
    window.localStorage.setItem("State","cadastro");
}


btnList.addEventListener('click', showOne);

btnRegister.addEventListener('click', showTwo);


}

///////////////


