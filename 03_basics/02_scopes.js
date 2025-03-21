let a=40
const b=50
var c=30
if(true)
    {
        var c=100
        let a=90
console.log("iiner valye",c)
console.log("iiner valye",a)
}

console.log(c)

console.log(a)
 console.log(addone(5))

function addone(num)//this is normal function and it can be called before defination
{
    return num +1
}

//
const addtwo=function(num)//this expreesion way to declare a functio  you can call the the expression function before defination
{
    return  num+2
}

console.log(addtwo(5))