// const oneBtn = document.querySelector("#one");
// console.log(oneBtn);

// const twoBtn = document.querySelector("#two");
// console.log(twoBtn);

// const threeBtn = document.querySelector("#three");
// console.log(threeBtn);


// twoBtn.addEventListener("click", ()=> {
//     console.log("Повісив слухача на кнопку twoBtn");
//     oneBtn.addEventListener("click", ()=> {
//         console.log("Клік по цільовій кнопці");
//         // document.body.style.backgroundColor = "red"
        
//     })
// })

// threeBtn.addEventListener("click",()=> {
//     oneBtn.removeEventListener("click", onClickBtn)})
// function onClickBtn() {
//     console.log("click vo циловий кнопци");
    
// }


// const btnClick = document.querySelector(".btn")
// console.log(btnClick);

// btnClick.addEventListener("click", ()=> {
//     oneBtn.textContent = "заминюю текст кнопкы"
//     oneBtn.style.backgroundColor = "green"
// })





// // frontend-mentor frontend-mentor
// // 17:41
// // Напишіть скрипт зміни кольору кнопки при натискані на неї.

// const btn4 = document.querySelector("butt")
// console.log(btn4);
// btn4.addEventListener("click", ()=> {
//     btn4.style,backgroundColor ="green"
//     btn4.textContent= "red"
//     document.body.style.backgroundColor="aqua"
// })





// const uaerName = document.querySelector(".inputName")
// const chek = document.querySelector(".cheked")
// const button = document.querySelector(".btn")
// const uspann = document.querySelector(".spn")

// uaerName.addEventListener("Focus",(event) => {
//     console.log("podia na input");
//     console.log(event.currentTarget.value);
    
//     uspann.textContent = event.currentTarget.value;
// })

// chek.addEventListener("change",(event)=> {
//     if (event,currentTarget.checked) {
//     btn.disabled = false;
        
//     } else{
//         btn.disabled= true
//     }
// })


const button = document.querySelector(".also");

button.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 254) + 1;
    const g = Math.floor(Math.random() * 254) + 1;
    const b = Math.floor(Math.random() * 254) + 1;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});














const inputEl = document.getElementById("font-size-control");
console.log(inputEl);

const textEl = document.querySelector(".desc");

inputEl.addEventListener("input", () => {
    const size = inputEl.value + "px";
    // console.log(inputEl.value);
    textEl.style.fontSize = size;
});





//  Focus колы мы знаходымось у поли input

//  Change выдаеться на чек боксе

//  Blur пры втрати  Focus  з input
// Input видслитковуе кожну змину значень в input
