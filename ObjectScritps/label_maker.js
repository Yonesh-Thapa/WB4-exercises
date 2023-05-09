
// defined my object
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Best City",
    state: "Best State",
    zip: "12345"
}


// made a function that returns value from the created object
function printContact(){
    console.log(`${myInfo.name} 
${myInfo.address}
${myInfo.city}, ${myInfo.state}-${myInfo.zip}
    `)// accesing the value of the properties in the myInfo Object 
}

// calling the function so it prints on the console
printContact(myInfo);