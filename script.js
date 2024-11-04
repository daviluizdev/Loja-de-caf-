// script.js
document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const productList = document.getElementById("productList");

    // Função para adicionar produto
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("productName").value;
        const price = document.getElementById("productPrice").value;

        const productItem = document.createElement("li");
        productItem.textContent = `${name} - R$ ${price}`;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", function () {
            productList.removeChild(productItem);
        });

        productItem.appendChild(removeButton);
        productList.appendChild(productItem);

        productForm.reset();
    });
});
