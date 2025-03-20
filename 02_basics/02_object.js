//singleton

//const object=Object.create()//though constructor

//object literals


 const mysym=Symbol("key")
const jsUser={
    Nmae:"Chandan",
    Age:35,
    email:"chanda.itme@gmail.com",
    "full Name":"Chandan Kuamr",
    [mysym]:"key1test"
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full Name"])
console.log(jsUser[mysym])
console.log( typeof (jsUser[mysym]))

jsUser.email="chandanmicrosoft.gmail.com"
console.log(jsUser )
//object freeze
//Object.freeze(jsUser)
jsUser.email="chandanchatgpt.gmail.com"
console.log(jsUser)

//function tyoe
jsUser.greetings=function()
{
    console.log("Welcomes")
}
console.log(jsUser.greetings())

jsUser.greetingtwo=function()
{
    console.log(` welcome users,${this["full Name"]}`)
}
console.log(jsUser.greetingtwo())