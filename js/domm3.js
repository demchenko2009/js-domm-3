const oneBtn = document.querySelector("#one");
console.log(oneBtn);

const twoBtn = document.querySelector("#two");
console.log(twoBtn);

const threeBtn = document.querySelector("#three");
console.log(threeBtn);


twoBtn.addEventListener("click", ()=> {
    console.log("Повісив слухача на кнопку twoBtn");
    oneBtn.addEventListener("click", ()=> {
        console.log("Клік по цільовій кнопці");
        // document.body.style.backgroundColor = "red"
        
    })
})

threeBtn.addEventListener("click",()=> {
    oneBtn.removeEventListener("click", onClickBtn)})
function onClickBtn() {
    console.log("click vo циловий кнопци");
    
}


const btnClick = document.querySelector(".btn")
console.log(btnClick);

btnClick.addEventListener("click", ()=> {
    oneBtn.textContent = "заминюю текст кнопкы"
    oneBtn.style.backgroundColor = "green"
})





// frontend-mentor frontend-mentor
// 17:41
// Напишіть скрипт зміни кольору кнопки при натискані на неї.

const btn4 = document.querySelector("butt")
console.log(btn4);
btn4.addEventListener("click", ()=> {
    btn4.style,backgroundColor ="green"
    btn4.textContent= "red"
    document.body.style.backgroundColor="aqua"
})
