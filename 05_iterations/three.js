//forof



const arr1=[1,2,3,4,5]

for (const num of arr1) {
  
    console.log(num)
}

const greeting="greetings"

for (const greet of greeting) {
  
    console.log(`welcome ${greet}`)
}


//maps only display uniyq entry
const map1=new Map()
map1.set("n","ndia")
map1.set("k" ,"japan")

map1.set("n","ndia")

map1.set("n","ndia")
console.log(map1)

//
for (const [key,value] of map1) {

    console.log(key,':-',value)
    
}

//object
const object1={
    game1:"cricket",
    game2:"football"
}
//forin  loop cannot iterate throuhgh objevts
//for (const [key,value] of object1) {

 //   console.log(key,':-',value)
    
//}
for (const key in object1) {
    console.log(key,':-',object1[key])
}
//foreachloop

const coding=["js","c#","ptthon"]

//coding.forEach(function(item)
//{
  //  console.log(item)
//})

//arrow function use
coding.forEach((item)=>
{
    console.log(item)
})
 function print(item)
{
    console.log(item)

}
coding.forEach(print);//oly pass refrence of function

//otjer [ather
//arrow function use
coding.forEach((item,index,arr)=>
    {
        console.log(item,index,arr)
    })

    const mycoding=[
        {mylanguage:"js",
            LanguageName:"javascript"
        },
        {mylanguage:"js",
            LanguageName:"javascript"
        }
    ]

    mycoding.forEach((item)=>
        {
            console.log(item.mylanguage,item.LanguageName)
        })
