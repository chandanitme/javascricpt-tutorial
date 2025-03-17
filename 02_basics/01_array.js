
const myarray=[1,1,2,2,3,"chandan"]
console.log(myarray[5])

const newarray=new Array(1,1,2,2)

console.log(newarray[3])

//newarray.unshift(5)
newarray.shift()

console.log(newarray)

const joinedaaray=myarray.join()

console.log(myarray)
console.log(joinedaaray)
console.log( typeof (joinedaaray))

//slice-this does not manu pulate teh array

console.log("A",myarray)
const slicearray=myarray.slice(1,3)
console.log(myarray)
console.log(slicearray)

//splice


const splicearray=myarray.splice(1,3)
console.log("B",myarray)
console.log(splicearray)
