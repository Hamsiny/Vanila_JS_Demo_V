let products = rawdata;

// show all the products when we load the page
showData(products);

// getter and setter of current products collection
function getCurrentProducts() {
    return products;
}

function setCurrentProducts(pros) {
    products = pros;
}

// whole filter function
function showWithFilter() {
    setCurrentProducts(rawdata);
    let proWithCate = filterCategory(getCurrentProducts(), document.getElementById('category').value);
    let prowithFilter = filterPrice(proWithCate, document.getElementById('price').value);
    showData(prowithFilter);
    setCurrentProducts(prowithFilter);
}

// category filter
function filterCategory (productsArray, cateId) {
    return productsArray.filter(product => (product.categoryId == cateId || cateId == "0"));
}

// price filter
function filterPrice (productsArray, priceFilter) {
    let priceProducts;
    switch (priceFilter) {
        case "0":
            priceProducts = productsArray;
            break;
        case "100":
            priceProducts = productsArray.filter(product => 
                product.price <= 100);
            break;
        case "500":
            priceProducts = productsArray.filter(product => 
                (product.price > 100 && product.price <= 500));
            break;
        case "1000":
            priceProducts = productsArray.filter(product => 
                (product.price > 500 && product.price <= 1000));
            break;
        case "1001":
            priceProducts = productsArray.filter(product => 
                product.price > 1000);
            break;
        default:
            break;
    }
    return priceProducts;
}

// sorting products ascending
function productsAsc() {
    let ascProducts = getCurrentProducts().sort((a, b) => a.price - b.price);
    showData(ascProducts);
}

// sorting products descending
function productsDesc() {
    let descProducts = getCurrentProducts().sort((a, b) => b.price - a.price);
    showData(descProducts);
}

// reset products to origin
function resetFilter() {
    document.getElementById('category').value = "0";
    document.getElementById('price').value = "0";
    showData(rawdata);
}

function showData (arrays) {
    let productsToAdd = '';
    arrays.forEach(product => {
        if (product.productMedia[0] && product.productMedia[0].url) {
            let imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + product.productMedia[0].url;
            let urlParams = "./detail.html?prodId=" + product.prodId + "&prodTitle=" + product.title;

            productsToAdd += `
                <div class="col-lg-2 col-md-4 col-sm-12 mb-3">
                    <a href="${urlParams}" style="color: grey;">
                        <img src="${imgUrl}" style="width: 100%; height: 200px; display: block; border-radius: 5px;">
                        <p style="width: 90%; height: 35px">${product.title}</p>
                        <p>$ ${product.price}</p>
                    </a>
                </div>`;
        }
    });
    document.getElementById('display').innerHTML = productsToAdd;
}
