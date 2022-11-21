let theBox = document.querySelectorAll(".elemento");
let theQuantity = document.querySelectorAll(".quantidade");
let theName = document.querySelectorAll(".nome");
let thePopUp = document.querySelector(".popUpDel");
let closePopUp = document.querySelector("i");
let theCont = document.querySelector(".containerr");
let theNotif = document.querySelector(".notify");
let tablesRows = document.querySelectorAll(".dinamic");
let trashBin = document.querySelectorAll(".bi-trash3");
let theBody = document.querySelector("body");
let btnOne = document.querySelector(".btnOneDel");
let btnTwo = document.querySelector(".btnTwoDel");

const apiSmaple = [
  {
    itemname: "Cadeira de rodas",
    itemQuantity: 60,
  },

  {
    itemname: "Muletas",
    itemQuantity: 14,
  },

  {
    itemname: "Cama hospitalar",
    itemQuantity: 2,
  },

  {
    itemname: "Tala",
    itemQuantity: 0,
  },

  {
    itemname: "Andador",
    itemQuantity: 7,
  },
];

for (let i = 0; i < theBox.length; i++) {
  if (apiSmaple[i].itemname === theName[i].innerHTML) {
    if (apiSmaple[i].itemQuantity < 10) {
      theQuantity[i].innerHTML = `0${apiSmaple[i].itemQuantity}`;
    } else {
      theQuantity[i].innerHTML = `${apiSmaple[i].itemQuantity}`;
    }
  }
}

for (let i = 0; i < theQuantity.length; i++) {
  if (parseInt(theQuantity[i].innerHTML) === 0) {
    theBox[i].style.cssText = "background-color:red";
  } else if (
    parseInt(theQuantity[i].innerHTML) > 0 &&
    parseInt(theQuantity[i].innerHTML) < 10
  ) {
    theBox[i].style.cssText = "background-color:#F7A81B";
  } else {
    theBox[i].style.cssText = "background-color:#06AA2A";
  }
}

for (let i = 0; i < trashBin.length; i++) {
  trashBin[i].addEventListener("click", function () {
    thePopUp.classList.remove("show");
    btnOne.addEventListener("click", function () {
      thePopUp.classList.add("show");
      tablesRows[i].remove();
    });
    btnTwo.addEventListener("click", function () {
      thePopUp.classList.add("show");
    });
  });
}

// for(let j=0 ; j<apiSmaple.length ; j++){
//     if(apiSmaple[j].itemQuantity < 5 && apiSmaple[j].itemQuantity > 0 ){

//         let note = document.createElement("ul");

//         theNotif.appendChild(note);

//         let linote = document.createElement("li");

//         note.appendChild(linote);

//         linote.textContent = `Faltam ${apiSmaple[j].itemQuantity} ${apiSmaple[j].itemname}  a ser emprestados`
//         linote.style.setProperty("background","#DCECFB");
//         linote.style.setProperty("color","#2E65F3");

//     }
//     else if(apiSmaple[j].itemQuantity === 0){
//         let note = document.createElement("ul");

//         theNotif.appendChild(note);

//         let linote = document.createElement("li");

//         note.appendChild(linote);

//         linote.textContent = `Estoque de  ${apiSmaple[j].itemname} acabado`
//         linote.style.setProperty("background","#FFDBDB");
//         linote.style.setProperty("color","#F32D2D");
//     }
// }

// let note = document.createElement("ul");

// theNotif.appendChild(note);

// let linote = document.createElement("li");

// note.appendChild(linote);

// linote.textContent = `Beneficiário Cadastrado com sucesso  `
// linote.style.setProperty("background","#DCFBEA");
// linote.style.setProperty("color","#249F5D");

// closePopUp.addEventListener("click",function(){
//     thePopUp.classList.add("show");
// });

// window.addEventListener("mouseup",function(e){
//     let popup = thePopUp;
//     if(e.target != popup  && e.target.childNodes != popup.childNodes){
//         thePopUp.classList.add("show");
//     }
// });
