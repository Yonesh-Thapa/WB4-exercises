let products = [
    { product: "Gummy Worms", price: 5.79 },// creating loop for each line
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];
// let m&m = indexOF(product[1].product(" "))//8
// new string = split(indexOf" " + 1)
// if( new string == id) // id M&M.
// console.log(products.product)



let numOfItem = products.length;
// function includesWord(id) {
//     for (let i = 0; i < numOfItem; i++) {
//         let item = products[i];
//         if (item.product.includes(id)) {
//             console.log(`Product Name: ${item.product} 
// Price: ${item.price}`)

//         }
//     }
// }
// includesWord("M&M");

numOfItem = products.length;
function includesWord(id) {
    for (let i = 0; i < numOfItem; i++) {
        let item = products[i];
        let product = products[i].product;
        let index = product.indexOf(" ");
       let newWord = product.slice(index + 1);
        if ( newWord == id ){
            console.log("we have m&M")
        }

        // for (let j = 0; j <= numOfproduct; j++){

        //         index = product.indexOf(" ")
        //         newWord = product.split(index + 1);
               
        // }
//         if (item.product.includes(id)) {
//             console.log(`Product Name: ${item.product} 
// Price: ${item.price}`)

        }
    }

includesWord("M&Ms");


// console.log(products.product.includes("M&M"))

function carrySwedishFish(id){
    for (let i = 0; i < numOfItem; i++){
        let item = products[i];
        if (item.product.includes(id)){
            console.log("We carry Swedish Fish")
        }
    }
}

carrySwedishFish("Swedish Fish");