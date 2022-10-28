let theBox = document.querySelectorAll(".elemento");
let theQuantity = document.querySelectorAll(".quantidade");
let theName = document.querySelectorAll(".nome");

const apiSmaple = [

    {
        itemname: "Cadeira de rodas",
        itemQuantity: 50
    },

    {
        itemname: "Muletas",
        itemQuantity: 7
    },

    {
        itemname: "Cama hospitalar",
        itemQuantity: 2
    },

    {
        itemname: "Tala" ,
        itemQuantity: 12
    },

    {
        itemname: "Andador",
        itemQuantity: 0
    }

]



for(let i =0 ; i<theBox.length ; i++){
        if(apiSmaple[i].itemname === theName[i].innerHTML){
            if(apiSmaple[i].itemQuantity < 10){
                theQuantity[i].innerHTML = `0${apiSmaple[i].itemQuantity}`;
            }else{
                theQuantity[i].innerHTML = `${apiSmaple[i].itemQuantity}`;
            }
            
            
        }

}

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




