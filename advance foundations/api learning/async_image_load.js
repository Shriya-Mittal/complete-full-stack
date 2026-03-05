function getIamagePromise(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const img=new Image()
            img.src=url
            img.alt='scenic image'
            img.addEventListener('load',()=>resolve(img))
            img.addEventListener('error',()=> reject(new Error('Failed to load images: ${url}')))

        },500)
    })
}
const images=[
    'https://in.pinterest.com/ungyean/scenery-wallpaper',
    'https://www.freepik.com/free-photos-vectors/beautiful-scenery',
    'https://amazon.in/scenery-wallpaper/s?k=scenery+wallpaper'

]

async function preLoadImages(imageUrlsArr){
    const imgContainer=document.getElementById(img-container)
    const uploadContainer=document.getElementById('upload-container')

    const promises= images.map((url)=>{getIamagePromise(url) })
    

    try{
        const results=await Promise.all(promises)
        console.log('All images uplosded successfully')
        uploadContainer.style.display='none'
        results.forEach(img=>imgContainer.appendChild(img))
    }catch(err){
        console.log(error)
    }
}


async function MultiplePromises(){
    try{
       
    
    const promise2=getIamagePromise()
    const promise3=getIamagePromise()
    const result=await Promise.all([promise1,promise2,promise3])
    console.log(result)


}catch(err){
    console.log(err)
}
}

document.getElementById('submit-imgs').addEventListener('click',()=>preLoadImages(images))