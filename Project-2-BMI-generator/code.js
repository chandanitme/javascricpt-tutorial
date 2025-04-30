const obform=document.querySelector('form')
//this will give emty value
//const weight=parseInt(document.querySelector('#bdheight').value)
obform.addEventListener('submit',function(e)
{
    e.preventDefault()

    //redult div
    const divresult=document.querySelector('#results')
    const weight=parseInt(document.querySelector('#bdweight').value)
    console.log(weight)

    const height=parseInt(document.querySelector('#bdheight').value)
    console.log(height)


    if(weight=='' || weight<0 || isNaN(weight))
    {
        divresult.innerHTML=`Please enter a valid weight ${weight}`
    }
    else if(height=='' || weight<0 || isNaN(height))
    {
        divresult.innerHTML=`Please enter a valid weight ${weheightight}`
    }
        else
    {
const bmivalue=(weight / ((height*height) / 10000)).toFixed(2)



divresult.innerHTML=getmessage(bmivalue)
    }
       
})

 function getmessage(bmi )
{
    if(bmi<18.6)
    {
return `<h1> yourare under weight ${bmi}</h1>`
    }
        else if(bmi>=18.6 && bmi<=29.6)
        {
return `<h1> yourare normal weight ${bmi}</h1>`
        }
        else
        {
return `<h1>yourare over weight ${bmi}</h1>`
        }

}