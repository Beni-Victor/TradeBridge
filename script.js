function addProduct() {
    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;

    if(name === "" || price === "") {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("productList");

    let li = document.createElement("li");
    li.innerHTML = name + " - $" + price + 
    " <button onclick='requestDelivery()'>Request Delivery</button>";

    list.appendChild(li);

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
}

function requestDelivery() {
    alert("Driver Assigned! Delivery in progress 🚚");
}