//object literal

const user={
    username:"chandan",
    numberoflogin:8,
    singnedIn:true,
    getuserdetail:function()
    {
        console.log(this)
        console.log(` username i  s :${this.username}`)
    }
}

console.log(user)
console.log(user.getuserdetail())

//constructor
function usertype(name,numbercount,issignedin)
{
    console.log(this)
    this.username=name
    this.loggedinnumber=numbercount
    this.issignedintime=true
    return this
}
const user1= new usertype("hiest",8,true)
console.log(user1)
const user2= new usertype("chanda",6,true)
console.log(user1)