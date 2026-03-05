// document.getElementById("count-el").innerText = 5;

let count = 0;
let countEl = document.getElementById("count-el");
let saveel = document.getElementById("save-ele");
function increement() {
    count += 1;
    countEl.textContent = count;
    errorEl.textContent = "";
}
let saveBtn = document.getElementById("save-btn");
function save(){
    let countStr = count + " - ";
    saveel.textContent+= countStr;
    // console.log(count);
    countEl.textContent = 0;


}

let resetel = document.getElementById("reset");
let errorEl = document.getElementById("error");

function reset(){
    console.log("reset button clicked");
    if(count===0){
        errorEl.textContent = "Error: Count is already zero.";
    }
}
// console.log("hello world");