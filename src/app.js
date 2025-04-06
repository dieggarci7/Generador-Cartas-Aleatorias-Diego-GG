import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  function generateNewCard(){ 
  
  let emojis= ["♦", "♥", "♠", "♣"]
  let valors= ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
  

  function getRandomNumber (num1,num2){
    return Math.floor(Math.random() * (num2-num1)+num1)
  }

function getRandom (arr){
  let max=arr.length-1;
  let min=0;
  let random= getRandomNumber(min,max);
  return arr[random]
}


let randomValor= getRandom(valors)
let randomSymbol= getRandom(emojis)



document.querySelector('#SymbolTop').innerHTML= randomSymbol
document.querySelector('#SymbolBottom').innerHTML= randomSymbol
document.querySelector('#Valor').innerHTML= randomValor
document.querySelector('#ButtonCard').innerHTML= "BARAJAR"
document.querySelector('#Signature').innerHTML= "<strong>Made by @dieggarci7 😎</strong>"

function setColor(symbol){
  if (symbol === "♦" || symbol === "♥"){
    document.querySelector('#SymbolTop').style.color= "red"
    document.querySelector('#SymbolBottom').style.color= "red"
  } else {
    document.querySelector('#SymbolTop').style.color= "black"
    document.querySelector('#SymbolBottom').style.color= "black"
  }
  };

  setColor(randomSymbol);
};



generateNewCard();

document.querySelector('#ButtonCard').onclick= generateNewCard;

setInterval(generateNewCard, 10000)

  
};
