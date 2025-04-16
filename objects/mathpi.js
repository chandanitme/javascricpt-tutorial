const chai={
    name:"ginger chai",
    getdetails :function()
    {
        console.log("This is chandan details")
    },
    price:250,
    isvailabel:true

}

//now loop it
for (let [key,value] of Object.entries(chai)) {

    console.log(`key is ${key},value is ${value} `)
    
}
//filter function
for (let [key,value] of Object.entries(chai)) {

    if(typeof(value)!='function')
    console.log(`key is ${key},value is ${value} `)
    
}
//make name filed not enummeraabe

Object.defineProperty(chai,'name',
    { enumerable:false}
)

//filter function
for (let [key,value] of Object.entries(chai)) {

    if(typeof(value)!='function')
    console.log(`key is ${key},value is ${value} `)
    
}

//pi value change


