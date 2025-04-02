const mynumbers1=[1,2,3]
const intialvalue=0

const sum=mynumbers1.reduce((accumulator,current)=>  (accumulator+current),intialvalue)

console.log(sum)
//shopping car
const shoppingcart=[
    {element:"physcics",
        price:200
    },
    {element:"chemistry",
        price:10000
    },
    {element:"math",
        price:300
    },
    {element:"physcics",
        price:200
    },

]
const pricetopay=shoppingcart.reduce((accu,item)=>item.price+accu,0)

console.log(pricetopay)