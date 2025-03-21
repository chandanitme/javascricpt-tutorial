//singletopn
const obj=new Object()//this is singleton

const tinderuser={
}

tinderuser.id=123
tinderuser.Name="chandan"
tinderuser.email="chandan.itme"

console.log(tinderuser)
//reguslar user withnested object

const regularuser=
{
    emai:"chandakdirect",
    fullName:{
        userfullNme:
        {
            Name:"chandanregularuser",
        }
    }
}

console.log(regularuser.fullName?.userfullNme?.Name)

//object merge
const object1={
    Name:"chanda"
}

const object2={
    email:"chanda.itme"
}
const object3=Object.assign(object1,object2)

const object4=Object.assign({},object1,object2)

console.log(object3)

//...spread
const object5={...object1,...object2}

console.log(object5)

//object array like userrs fromdatabase

const users=[
    {Name:"chandan"},

    {Name:"chandan"},
    {Name:"chandan"},

]
console.log(users[1].Name)

//get all thekeys fromobjct

console.log(Object.keys(tinderuser))// returns array

//get values oblye from object
console.log(Object.values(tinderuser))// return allary

//get ebtry oblye from object
console.log(Object.entries(tinderuser))// return array
//check key exist or not in obejcet
console.log(tinderuser.hasOwnProperty('Name'))


//object destructuring

const course={
    CourseName:"physics",
    coursefee:500,
    courseInstructor:"chandan"
}

//fetch couuserinstuctor
const {courseInstructor:instructor}=course
//console.log(courseInstructor)
console.log(instructor)