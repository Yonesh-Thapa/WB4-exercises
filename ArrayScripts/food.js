let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Gucamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

const TAX = 0.08;
const TIP = 0.18;

function foodTotal(order) {
  let numOfOrder = order.length;
  subtotal = 0;

  for (i = 0; i < numOfOrder; i++) {
    subtotal += order[i].price;
  }
  totalTax = subtotal * TAX;
  totalTip = subtotal * TIP;
  total = subtotal + totalTax + totalTip;
  return {subtotal:subtotal,
          totalTax: totalTax,
          totalTip: totalTip,
          total: total
}
}

let results = foodTotal(lunch);
console.log(`
Subtotal: ${(results.subtotal)}
Tax: ${(results.totalTax.toFixed(2))}
Tip: ${(results.totalTip.toFixed(2))}
Total: ${(results.total.toFixed(2))}
`);
