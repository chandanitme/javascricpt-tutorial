let randomnumber=parseInt(Math.random()*100+1)

const userinput=document.querySelector("#guessField")
const btnSUbmit=document.querySelector("#subt")
const previousguesscollection=document.querySelector("#idGuesses")
const guessesremaining=document.querySelector("#idlastreult")
const messageelement=document.querySelector("#idmessage")
const stratover=document.querySelector(".resultParas")

const p=document.createElement('p')
let previousguesses=[]
let reducegussschane=0
let playgame=true
if(playgame)
{
    btnSUbmit.addEventListener('click',function(eventdata)
    {
        eventdata.preventDefault()

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

else if(userinputvalue >100)
    {
        alert("Please enetr a number less then or equal to 100")
    }
    else
    {
        previousguesses.push(userinputvalue) 
        if(reducegussschane===9)
        {
            
            DispalyGuess(userinputvalue)

            displayresultmessage(`you game is over  the random number is: ${randomnumber}`)
            endgame("end game")
            
        }
        else
        {
            DispalyGuess(userinputvalue) 
       
            checkGuesses(userinputvalue)
        }
    }
    


 }

 function checkGuesses(userinputvalue)
 {if(userinputvalue===randomnumber)
 {
    endgame()
    displayresultmessage("you have worn the game ")
 }
 else if(userinputvalue <randomnumber)
 {
    displayresultmessage("your number is too low")
 }
 else if(userinputvalue >randomnumber)
    {
        displayresultmessage("your number is too high")
    }

 }

 function DispalyGuess(userbvalue)
 {
    userinput.value=''
    previousguesscollection.innerHTML +=`${userbvalue},`


        reducegussschane ++
        guessesremaining.innerHTML=`${10-reducegussschane}`
 }
 function displayresultmessage(message)
 {
    messageelement.innerHTML=`<h2> ${message}</h2>`
 }

 function endgame(message)
 {
 userinput.value=''
 userinput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newgame"> Start new game<h2/>`
 stratover.appendChild(p)
 playgame=false
 startgame();
 }

 function startgame(message)
 {
    const newgame =document.querySelector("#newgame")

    newgame.addEventListener('click',
        function()
        {
            playgame=true
              reducegussschane=0
              previousguesses=[]
        guessesremaining.innerHTML=`${10-reducegussschane}`
        previousguesscollection.innerHTML=''
        userinput.removeAttribute('disabled','')
        randomnumber=parseInt(Math.random()*100+1)
stratover.removeChild(p)
        },false
    )

 }

 

 


    
 