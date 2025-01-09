const maindiv=document.getElementById("main");
function fetchData (){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .catch((e)=>console.log(e))
}
fetchData ()
function displayData (products){
    products.forEach((p) => {
        const productDiv=document.createElement("div")
        productDiv.classList.add("product")
        const productImage=document.createElement("img")
        productImage.src=p.image;
        productImage.alt=p.title;
        const productTitle=document.createElement("h2")
        productTitle.textContent=p.title;
        const productPrice=document.createElement("p")
        productPrice.textContent="price: ₹" + p.price;
        const productButton=document.createElement("button")
        productButton.textContent="Add to Cart";
        productDiv.append(productImage,productTitle,productPrice,productButton)
        maindiv.appendChild(productDiv)
    });
}