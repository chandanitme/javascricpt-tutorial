const obform=document.querySelector('form')
//this will give emty value
//const weight=parseInt(document.querySelector('#bdheight').value)
obform.addEventListener('submit',function(e)
{
    e.preventDefault()

    //redult div
    const divresult=document.querySelector('#results')
    const weight=parseInt(document.querySelector('#bdheight').value)
    console.log(weight)

    const height=parseInt(document.querySelector('#bdweight').value)
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
divresult.innerHTML=`<span> ${bmivalue}</span>`
    }
       
})
