async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2 ><a href="product.html?id=${product.id}">${product.title}</a></h2>
            <img src="${product.image}" alt="${product.title}" />
            <p>price: ${product.price}$</p>
            <p>${product.description}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Call the function to fetch and display products
fetchProducts();







// function displayProducts(products) {
//     const productsContainer = document.getElementById('products');
//     productsContainer.innerHTML = ''; // Clear any existing content

//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('product');
//         productDiv.innerHTML = `
//             <h2><a href="product.html?id=${product.id}">${product.title}</a></h2>
//             <img src="${product.image}" alt="${product.title}" />
//             <p>Price: ${product.price} EGP</p>
//             <p>${product.description}</p>
//         `;
//         productsContainer.appendChild(productDiv);
//     });
// }