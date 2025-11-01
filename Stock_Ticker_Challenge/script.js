import {getStockData} from'./fakeStockAPI.js';
console.log(getStockData())
setInterval(function(){
    const stockData=getStockData()
    renderStockTIcker(stockData)
},1500)


let prevPrice=null
function renderStockTIcker(stockData){
    const stockDisplayname= document.getElementById('name')
    const stockDisplaySymbol= document.getElementById('symbol')
    const stockDisplayPrice= document.getElementById('price')
    const stockDisplayPriceIcon= document.getElementById('price-icon')
    const stockDisplayTIme= document.getElementById('time')
    const {name,sym,price,time}=stockData

    stockDisplayname.innerText = `Name: ${name}`;
    stockDisplaySymbol.innerText = `Symbol: ${sym}`;
    stockDisplayPrice.innerText = `Price: ${price}`;
    stockDisplayTIme.innerText = `Time: ${time}`;


    const stockDirectionIcon=price>prevPrice? 'images/Green_Arrow_up.svg.png':price<prevPrice?'images/Red_Arrow_down.svg.png': 'images/triangle-right.svg';

    const priceIconElement=document.createElement('img')
    priceIconElement.src=stockDirectionIcon
    priceIconElement.alt='price direction icon'
    priceIconElement.style.height = '15px';
priceIconElement.style.width = '15px';

    stockDisplayPriceIcon.innerHTML = ''
    prevPrice=price
    stockDisplayPriceIcon.appendChild(priceIconElement)


}

