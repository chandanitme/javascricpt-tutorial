const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const body=document.querySelector("body")


//generate randon colour
let intervalid
const randomcolour=function()
{
    const hex="0123456789ABCDEF"
   let  colour='#'
    for(i=0;i <6; i++)
    {
        colour+=hex[Math.floor(Math.random()*16)]
    }
    return colour
}


function changecolour()
{
    body.style.backgroundColor=randomcolour()
}
start.addEventListener('click',function()
{
    if(!intervalid)
    {
    intervalid= setInterval(changecolour,1000)
    }

},false)

stop.addEventListener('click',function()
{
    clearInterval(intervalid)
    intervalid=null

},false)

