//chrome://extensions/
let myleads=[]
// let myleads=`["www.awesomelead.com"]`


//to convert string to array and vice versa
// myleads=JSON.parse(myleads)
// myleads.push("www.newlead.com")


//to convert array to string
// myleads=JSON.stringify(myleads)
// console.log(typeof myleads)





const inputel = document.getElementById("input-el");
const ulel=document.getElementById("ul-el");

//how to save elementa in local storage
// localStorage.setItem("myLeads","www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

const inputbtn = document.getElementById("input-btn");
const deletebtn=document.getElementById("delete-btn");
const tabbtn=document.getElementById("tab-btn");

// localStorage.clear()


const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
console.log(leadsfromlocalstorage)

if(leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    render(myleads)
}

function render(leads){
    let listitems=""
    for(let i=0; i<leads.length; i++){
        // listitems+="<li>"+ myleads[i] + "</li>"
        listitems+=`<li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>`
    }
     ulel.innerHTML=listitems

}

inputbtn.addEventListener("click", function(){
    myleads.push(inputel.value)
    inputel.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads);

    console.log(localStorage.getItem("myleads"))
    
});


deletebtn.addEventListener("dblclick",function(){
    console.log("double clicked")
    localStorage.clear()
    myleads=[]
    render(myleads)


})



tabbtn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){ 
    
         myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads);

    })
   
})