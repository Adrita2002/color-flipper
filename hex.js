let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//#f15025

let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",function () {
    let hexColor="#";
    for(let i=0;i<6;i++){
        hexColor +=hex[getRandomNo()];
    }
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
});

function getRandomNo(){
    return Math.round((hex.length-1)*Math.random());
}
