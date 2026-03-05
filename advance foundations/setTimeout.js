function displayTrafficLight(light){
    console.log(light)
}
const display=setTimeout(()=>displayTrafficLight('🟢'),3000)

// setTimeout(()=>displayTrafficLight,3000,'🟢')
// displayTrafficLight('🔴')


document.getElementById('stop').addEventListener('click',function(){
    clearTimeout(display)
    console.log("Cancelling")
})
