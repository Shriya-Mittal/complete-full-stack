function getLabelHtml(sender,text,...staffObjs){
    return staffObjs.map((staffObj)=>{
        return `<div class="label-card">
            <p>Dear ${staffObj.name}</p>
            <p>${text}</p>
            <p>Best wishes,</p>
            <p>${sender}</p>

        </div>` 

     }).join('') ;
}
const text='Wishing you a very Happy Diwali! May this festival of lights bring you prosperity, health, and good fortune.May the lights of Diwali inspire you to spread kindness, share smiles, and create your own glow wherever you go.Let this Diwali mark the beginning of new chapters of growth, love, and success in your life.'
const sender='Shriya'

document.getElementById('labels-container').innerHTML=getLabelHtml(
    sender,text,
    {name:'Sally'},
    {name:'Sita'},
    {name:'Shanu'},
    {name:'Seema'}
)
