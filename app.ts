interface item {
    name:string
    price:number
}
const bat: item={
    name: 'bat'
    price:1000
}
const icecream: item={
    name: 'icecream'
    price:100
}
console.log(`bat name: ${bat.name}, price: $${bat.price}`)
console.log(`icecream name: ${icecream.name}, price: $${icecream.price}`)