

//return case from foreach loop

const languages=["js","python","c#","dotnet","VB"]

const values=languages.forEach((item)=>
{
    console.log(item)
})
console.log(values)

//filter return values
const arr1=[1,2,3,4,5]
const numbers=arr1.filter((item)=>
   { return item >2}
   
       
    )
    console.log(numbers)

    //map function-its helps to update the value

    const mynumbers=[1,2,3,4,5,6,7,8,9]

    const newnum=mynumbers.map((num)=>num+4)
    console.log(newnum)
    
    //apply filet we can not change the value using filter
    
    const mynumbers1=[1,2,3,4,5,6,7,8,9]

    const newnum1=mynumbers.filter((num)=>num+4)
    console.log(newnum1)

    //chaining of map

    const mynumbers2=[1,2,3,4,5,6,7,8,9]

    const upatenumbers=mynumbers2.map((num)=> num*10)
                        .map((x)=> x+1)
                        console.log(upatenumbers)
