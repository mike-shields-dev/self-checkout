const basket = [];

const scan = (barcode, catalogue) => {
    
    // use the barcode to find the matching product in the catalogue
    return catalogue.find((product) => {
        return product.barcode === barcode;
    });
};

const addItem = (product) => {
    basket.push(product);
}

// const foundProduct = scan(barcode);
// addItem(foundProduct)

module.exports = { basket, scan, addItem };