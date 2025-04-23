const bodyelement=document.querySelector("body")



const spanelements=document.querySelectorAll(".button")


spanelements.forEach(function(spanlement)
{
    console.log(spanlement)

    spanlement.addEventListener('click',function(event){

        console.log(event)
        console.log(event.target)

        if(event.target=='grey')
        {
            bodyelement.style.background=event.target.id
        }
        if(event.target.id=='grey')
            {
                bodyelement.style.background=event.target.id
            }
            if(event.target.id=='white')
                {
                    bodyelement.style.background=event.target.id
                }
                if(event.target.id=='yellow')
                    {
                        bodyelement.style.background=event.target.id
                    }
                    if(event.target.id=='blue')
                        {
                            bodyelement.style.background=event.target.id
                        }

    },false)

})

