let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];
let numOfItem = products.length;
function includesWord(id) {
    for (let i = 0; i < numOfItem; i++) {
        let item = products[i];
        if (item.product.includes(id)) {
            console.log(`Product Name: ${item.product} 
Price: ${item.price}`)
        }
    }
}
includesWord("M&M");

function carrySwedishFish(id){
    for (let i = 0; i < numOfItem; i++){
        let item = products[i];
        if (item.product.includes(id)){
            console.log("We carry Swedish Fish")
        }
    }
}

carrySwedishFish("Swedish Fish");