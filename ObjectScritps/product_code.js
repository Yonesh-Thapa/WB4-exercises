let partCode1 = "ABCDEFG:123456789-Large";
let part1 = parsePartCode(partCode1);



function parsePartCode(part){
    let part1 = part.indexOf(":")
    let part2 = part.indexOf("-")

    let supplierCode = part.slice(0, part1);
    let productCode = (part.slice(part1 + 1, part2));
    let size = part.slice (part2 + 1)
    return {
        supplierCode: supplierCode,
        productCode: productCode,
        size: size
    }

}
parsePartCode(partCode1);
console.log(`
Supplier: ${part1.supplierCode}
Product Number: ${part1.productCode}
Size: ${part1.size}`);




