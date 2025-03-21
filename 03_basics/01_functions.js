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