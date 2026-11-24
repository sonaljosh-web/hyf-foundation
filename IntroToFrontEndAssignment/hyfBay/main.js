console.log("Script loaded");
//const list = document.getElementById("productList");
const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  // your code goes here
  const headings = ["Title", "Price", "Rating"];
  const ul = document.getElementById("product-list");
  headings.forEach((heading) => {
    createNewItem(heading, ul, true);
  });
  products.forEach((item) => {
    createNewItem(item.name, ul, false);
    createNewItem(item.price, ul, false);
    createNewItem(item.rating, ul, false);
  });
}

function createNewItem(heading, ul, header) {
  const li_item = document.createElement("li");
  if (header) {
    li_item.className = "heading";
  }
  li_item.innerText = heading;
  ul.appendChild(li_item);
}

renderProducts(products);
