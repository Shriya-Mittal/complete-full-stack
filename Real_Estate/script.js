import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"; 
import { placeholderPropertyObj } from "./properties/placeholderPropertyObject.js"; 

function size_calc(prices){
   return prices.reduce((acc,curr)=>acc+curr,0);
}

function getPropertyHtml(propertyArr=[placeholderPropertyObj]){
    return propertyArr.map(({propertyLocation,priceGBP,roomsM2,comment,image})=>{
        return `<section class="card">
            <img src=${image} class="card-img">
            <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${size_calc(roomsM2)}m<sup>2</sup>
</h3>
        </div>
        </section>`
            
                
            }).join('')
        }


document.getElementById('container').innerHTML=getPropertyHtml(propertyForSaleArr)
  




