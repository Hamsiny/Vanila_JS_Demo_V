function getUrlParams(paramName) {
    const searchUrl = window.location.search.substring(1);
    const urlParams = new URLSearchParams(searchUrl);
    return urlParams.get(paramName);
}

function getProduct(id) {
    return rawdata.filter(product => product.prodId == id);
}

let prodId = parseInt(getUrlParams('prodId'));
let prodTitle = getUrlParams('prodTitle');
let currentProduct = getProduct(prodId);
let prodDescription = currentProduct[0].description;
let imgUrl = "https://storage.googleapis.com/luxe_media/wwwroot/" + currentProduct[0].productMedia[0].url;

console.log(currentProduct);

document.getElementById('prodId').innerHTML = 'Product ID: ' + prodId;
document.getElementById('prodTitle').innerHTML = prodTitle;
document.getElementById('prodDescription').innerHTML = prodDescription;
document.getElementById('prodImg').innerHTML = '<img src="' + imgUrl + '" style="width: 100%; height: 400px; border-radius: 5px">';
