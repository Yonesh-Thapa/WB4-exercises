let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Dairy Milk", price: 4.79},
    {product: "Chocofun", price: 5.79},
    {product: "Lacto", price: 6.79},
    {product: "Alpelibe", price: 7.79},
    {product: "Khattu", price: 8.79},
    {product: "Orange Ball", price: 9.79},

    // TODO: fill the array with 10 candies of various
    // price ranges
    ];
    function display(product){
        console.log(`
Product: ${product.product}
Price: ${product.price}
        `)
    }
    function candyCost(id){
        numOfProducts = products.length;
        for (i = 0; i < numOfProducts; i ++){
           let product = products[i];
            if (product.price <= id){
                display(product);
            }
        }
    }
    candyCost(4.00);

    function findCandy(id){
        numOfProducts = products.length;
        for (i = 0; i < numOfProducts; i ++){
           let product = products[i];
            if (product.product.slice(id) == id){
                display(product);
            }
        }
    }
    findCandy("M&M");