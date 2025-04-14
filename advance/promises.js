const promiseone=new Promise(function(resolve,reject)
{
    //do db cancelIdleCallback aysnx,network 

    setTimeout(function()
    {
        console.log("Async call completed")
        resolve()
    },100)

})
promiseone.then(function()
{
    console.log("promise one consumed")

})

new Promise(function(resolve,reject)
{
    //do db cancelIdleCallback aysnx,network 
    

    setTimeout(function()
    {
        console.log("Async2 call completed")
        resolve()
    },100)

}).then(function()
    { console.log("promise 3one consumed")}
)
//pass argument in promise

promiseone.then(function()
{
    console.log("promise one consumed")

})

const promise4=new Promise(function(resolve,reject)
{
    //do db cancelIdleCallback aysnx,network 

    setTimeout(function()
    {
        console.log("Async2 call completed")
        resolve({username:"chandan",
            email:"chandan.itme@gmail.com"
        })
    },100)

})

promise4.then(function(resolve)
{
    console.log(resolve)
})