function addProduct(){

let name = document.getElementById("productName").value;
let price = document.getElementById("productPrice").value;

if(name === "" || price === ""){
alert("Please fill all fields");
return;
}

db.collection("products").add({
name: name,
price: price,
createdAt: new Date()
})

.then(()=>{
alert("Product added successfully");
loadProducts();
})

.catch(error=>{
alert("Error: " + error.message);
});

}

function loadProducts(){

let list = document.getElementById("productList");

list.innerHTML = "";

db.collection("products")
.get()
.then(snapshot => {

snapshot.forEach(doc => {

let data = doc.data();

let li = document.createElement("li");

li.innerHTML =
data.name + " - " + data.price + " RWF";

list.appendChild(li);

});

});

}