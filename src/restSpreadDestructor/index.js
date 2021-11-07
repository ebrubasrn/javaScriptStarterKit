//rest
//params
//varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)    
}

//console.log(typeof showProducts)
//showProducts(10,"elma","armut","karpuz")


//spread
let points =[1,2,56,76,34]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryhigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category ={id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category

console.log(id)
console.log(name)