let characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let gen_password1=document.getElementById("password1");
let gen_password2=document.getElementById("password2");
let generatedPassword = document.getElementById("generatebtn");
generatedPassword.addEventListener("click", function(){
     gen_password1.textContent = "";
     gen_password2.textContent = "";
    for( let i=1;i<=15;i++){      
         gen_password1.textContent += characters[Math.floor(Math.random() * characters.length)];
         gen_password2.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
    gen_password1.style.padding="5px 10px";
    gen_password2.style.padding="5px 10px";
 });
 
 console.log(gen_password1.textContent);

gen_password1.addEventListener("click", function() {
  navigator.clipboard.writeText(gen_password1.textContent)
    .then(() => console.log("Password 1 copied!"))
    .catch(err => console.error("Failed to copy: ", err));
});

gen_password2.addEventListener("click", function() {
  navigator.clipboard.writeText(gen_password2.textContent)
    .then(() => console.log("Password 2 copied!"))
    .catch(err => console.error("Failed to copy: ", err));
});
