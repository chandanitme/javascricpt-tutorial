//this means current context

const user={
    username:"chandan",
    price:900,
    welcomemessage:function()
    {
        console.log(`${this.username},welcome to our site`)
    }
}

user.welcomemessage()
user.username="Atharva"

user.welcomemessage()

//arrow function need

const chai=function()
{
    let username="chandan"
    console.log(`${this.username},welcome to our site`)//inside function this keyword is not working to print username 
}
chai()

//arrow functiom

const addtwo=(num1,numb2)=>
{

    return num1 + numb2
}

const addthree=(num1,numb2)=>  num1 + numb2//implicit means in one line no need to put currly braces

//const addthree=(num1,numb2)=>  (num1 + numb2)//implicit means in one line ,only parenthesis used much in react
//arrow function to return object

const arrayreturn=(num1,numb2)=>  ({ username:"chandan"})//this is the way to retuen object in arrow function

console.log(arrayreturn(3,4))
    
      
    

    console.log(addtwo(4,4))
