let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Choco Fun", price : 1000}
    // TODO: fill the array with 10 candies of various
    // price ranges
    ];

products.sort (function(a,b){
    let aUpper = a.product.toUpperCase();
    let bUpper = b.product.toUpperCase();

    if (aUpper < bUpper) return -1;
    else if (aUpper == bUpper) return 0;
    else return 1; 
})

let numProducts = products.length;
for (i = 0; i < numProducts; i++){
    let item = products[i];
    console.log(`Product:${item.product}
Price : ${item.price}`)
}

console.log("--------------------------------------------------")

products.sort (function(a,b){
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1; 
})


for (i = 0; i < numProducts; i++){
    let item = products[i];
    console.log(`Product:${item.product}
Price : ${item.price}`)
}