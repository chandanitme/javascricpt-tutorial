const randomnumber=parseInt(Math.random()*100+1)

const userinput=document.querySelector("#guessField")
const btnSUbmit=document.querySelector("#subt")
const previousguesscollection=document.querySelector("#idGuesses")
const guessesremaining=document.querySelector("#idlastreult")

let previousguesses=[]
let reducegussschane=1
let playgame=true
if(playgame)
{
    btnSUbmit.addEventListener('click',function(eventdata)
    {
        eventdata.preventDefault

        const useinputvalue=parseInt(userinput.value)

        console.log(useinputvalue)
        validdateuserinpute(useinputvalue)

    },false)
}


 function validdateuserinpute(userinputvalue)
 {
if(isNaN(userinputvalue))
{
    alert("Please enter a valid number")
}
else if(userinputvalue <1)
{
    alert("Please enetr a number greater or equal to 1")
}

else if(userinputvalue <1)
    {
        alert("Please enetr a number less then or equal to 100")
    }
    else
    {
        previousguesses.push(userinputvalue) 
        if(reducegussschane<11)
        {
            reducegussschane=reducegussschane+1
        }
    }
    


 }

 function checkGuesses(userinputvalue)
 {

 }

 function updatecurrentstatus(message)
 {

 }
 function displayresultmessage(message)
 {

 }

 function endgame(message)
 {

 }

 function startgame(message)
 {

 }

 

 


    
 