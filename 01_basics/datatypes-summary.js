//prmitive data types:String,Number,Null,Undefined,BigInt,Symbol,Boolearn


const id=Symbol('123')
const idNumber=Symbol('123')
console.table([id,idNumber]);

console.log(id==idNumber)

const bigNumber=21232143247390753407530n

console.log(bigNumber)
console.log(typeof bigNumber)
console.log(typeof idNumber)

//Non Premitive types :refrence types
//Araay,object ,function

const array=["Shaktiman","Nagraj","Dhruv"]

 let myobject={
    Name :"chandan",
    Age: 35,

}
 const myFunction =function()
{
    console.log("Hello World")
}

console.log(typeof array)
console.log(typeof myobject)
console.log(typeof myFunction)
