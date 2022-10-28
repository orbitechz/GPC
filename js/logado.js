let theBox = document.querySelectorAll(".elemento");
let theQuantity = document.querySelectorAll(".quantidade");



for(let i =0 ; i<theQuantity.length ; i++){
    if(parseInt(theQuantity[i].innerHTML) === 0){
        theBox[i].style.cssText = "background-color:red";
    }
    else if (parseInt(theQuantity[i].innerHTML)> 0 && parseInt(theQuantity[i].innerHTML) < 10 ){
        theBox[i].style.cssText = "background-color:#F7A81B";
    }
    else{
        theBox[i].style.cssText = "background-color:#06AA2A";
    }
}




