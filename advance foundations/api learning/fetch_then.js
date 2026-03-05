// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data=>{
//     const imageElement=document.createElement('img')
//     imageElement.src=data.message
//     imageElement.alt='random dog picture'
//     document.getElementById('img-container').appendChild(imageElement)
// })

// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data=>console.log(data))
// .catch(err=>{
//     console.log(err)
//     throw new Error('this is an error')
// })
// .finally(()=>console.log("the operation completed"))

 
// async function getimage(){
    try{
        const response=await fetch('https://dog.ceo/api/breeds/image/random')
        if(!response.ok){
            throw new Error('There was a problem with the API')
        }

           const data=await response.json()
       
        console.log(data)

    }catch(err){
        // throw new Error('this is an error')

    }finally{
        console.log("operation completed")
    }


// }
// getimage()


