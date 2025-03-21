function loginUserMessage(username="chandan kumar")//seting the optional parameete
{
    if(!username)
    {
         console.log("Please enter the user name")
         return
    }
    
    return (`${username}: you are just login`)
}

console.log(loginUserMessage("chandan"))
console.log(loginUserMessage())

//rest operator

function calculateprice(value1,value2,...number)
{
    return  number
}

console.log(calculateprice(200,300,400,600,7000,8000))

//handle objects in function


const user={
    usernaem:"Chandan",
    age:35
}

function handleobject(anyobject)
{
    console.log(` your name is ${anyobject.usernaem} and age is ${anyobject.age}`)
}
handleobject(user)

handleobject({usernaem:"santosh",
    age:30
}
)

//hand array in fucntion
const arrayobject=[400,300,500,500,600]
 function handlearray(anyarray)
 {
    return anyarray[2]
 }

 console.log(handlearray(arrayobject))