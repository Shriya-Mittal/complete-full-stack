function createPromise(){
    return new Promise((resolve,reject)=>{
    const success=Math.random()>0.5
    if(success){
        resolve('oprtn successful')

        }else{
        reject('oprtn failed')
    }
    
})
}
// promise.then(response=>console.log(response))

// try{
//     const response=await promise
//     console.log(response)
// }catch(err){
//     console.log(err)
// }

async function MultiplePromises(){
    try{
    const promise1=createPromise()
    const promise2=createPromise()
    const promise3=createPromise()
    const result=await Promise.all([promise1,promise2,promise3])
    console.log(result)


}catch(err){
    console.log(err)
}
}
MultiplePromises()