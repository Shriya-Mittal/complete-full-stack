let n1=2
let n2=3

let num1el=document.getElementById("num1-el")
let num2el=document.getElementById("num2-el")
num1el.textContent=n1
num2el.textContent=n2
let resultel=document.getElementById("result-el")
function add(){
    let result=n1+n2
    resultel.textContent="Result: "+result;
}
function sub(){
    let result=n1-n2
    resultel.textContent="Result: "+result;
}
function multiply(){
    let result=n1*n2
    resultel.textContent="Result: "+result;
}
function divide(){
    let result=n1/n2
    resultel.textContent="Result: "+result;
}