 const preLoadImg=(url)=>{
    const img=new Image()
    return new Promise((resolve,reject)=>{
         
        img.src=url
        img.alt='abcd'

        img.addEventListener('load',()=>resolve(img))
        img.addEventListener('error',()=>reject('img has not loaded'))
    
    
})
}
    
 async function hello(){
try {

  const results = await  preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
  console.log(results)
  document.getElementById('img-container').appendChild(results)
} catch (error) {
  console.error(error)
}
 }

hello();
