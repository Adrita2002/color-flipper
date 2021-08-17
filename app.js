let colors=["green","red","rgba(133,122,200)","#f15025"];
let btn=document.getElementById("btn");
let color=document.querySelector(".color");
btn.addEventListener("click",function () {
    // console.log(document.body);
    //get random number between 0, 1,2,3 i.e indices of the array colors
    let randomNo=getRandomNo();;
    document.body.style.backgroundColor=colors[randomNo];
    color.textContent=colors[randomNo];//will change the color name
});

function getRandomNo() {
    let num1=0;
    let num2=3;
    let r1=Math.round(num1+(num2-num1)*Math.random());
    return r1;
}