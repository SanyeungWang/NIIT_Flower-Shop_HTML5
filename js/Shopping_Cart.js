$(document).ready(
    function () {
        if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', ready);
        }
        else {
            ready();
            var Buy_Details = JSON.parse(localStorage.getItem("Buy_Details"));
            if (Buy_Details == null)
                Buy_Details = [];
            else {
                if (localStorage.Name != null) {
                    for (i = 0; i < Buy_Details.length; i++) {
                        if (Buy_Details[i].userName == localStorage.Name)
                            addItemToCart(Buy_Details[i].shopping_item_title, Buy_Details[i].shopping_item_price, Buy_Details[i].shopping_item_image);
                        updateKartTotal();
                    }
                }
            }
        }

        function ready() {
            var topcart = window.parent.document.getElementById('Shopping_items');
            var RemoveCartItemButtons = topcart.getElementsByClassName('.btn-danger');
            console.log(RemoveCartItemButtons);
            for (var i = 0; i < RemoveCartItemButtons.length; i++) {
                var removeButton = RemoveCartItemButtons[i];
                removeButton.addEventListener('click', removeCartItems);


            }
            var quantityInputs = window.parent.document.getElementsByClassName('cart_quantity_input');
            for (var i = 0; i < quantityInputs.length; i++) {
                var input = quantityInputs[i];
                input.addEventListener('change', quantityChanged);
            }

            var AddToKartButtons = document.getElementsByClassName('shop-item-button');
            for (var i = 0; i < AddToKartButtons.length; i++) {
                var button = AddToKartButtons[i];
                button.addEventListener('click', addToCartClicked);
            }

      
        }

        function removeCartItems(event) {
            console.log('Clicked' + event.target);
            var removeButtonClicked = event.target;
            removeButtonClicked.parentElement.parentElement.remove();
            var remove_item_title = removeButtonClicked.parentElement.parentElement.getElementsByClassName('cart_item cart_column')[0].innerText;
            var Buy_Details = JSON.parse(localStorage.getItem("Buy_Details"));
            if (Buy_Details == null)
                Buy_Details = [];
            else {
                if (localStorage.Name != null) {
                    for (i = 0; i < Buy_Details.length; i++) {
                        console.log(Buy_Details[i].userName);
                        console.log(localStorage.Name);
                        console.log(Buy_Details[i].shopping_item_title);
                        console.log(remove_item_title);
                        if (Buy_Details[i].shopping_item_title.trim() == remove_item_title.trim() && localStorage.Name == Buy_Details[i].userName) {
                            Buy_Details.splice(i, 1);
                            console.log(Buy_Details)
                            updateKartTotal();
                        }
                    }
                }
                localStorage.setItem("Buy_Details", JSON.stringify(Buy_Details));
                updateKartTotal();
            }
        }

        function quantityChanged(event) {
            var input = event.target;
            if (isNaN(input.value) || input.value < 0) {
                input.value = 1;
            }
            updateKartTotal();
        }

        function addToCartClicked(event) {
            var button = event.target;
            var shopItem = button.parentElement.parentElement;
            var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
            var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
            var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

            if (localStorage.Name != null) {
                Buy_Details.push({
                    "userName": localStorage.Name, "shopping_item_title": title, "shopping_item_price": price
                    , "shopping_item_image": imageSrc
                });
                localStorage.setItem("Buy_Details", JSON.stringify(Buy_Details));
                alert("Added in the local storage");
                addItemToCart(title, price, imageSrc);
                updateKartTotal();
            }
            else {
                alert("You must login to add items in the shopping cart !!");
                window.location.href = "login.html";
            }
        }
        function addItemToCart(title, price, imageSrc) {
            var cartRow = document.createElement('div');
            cartRow.classList.add('cart_row');
            var cartItems = window.parent.document.getElementById('Shopping_items');
            var cartItemNames = cartItems.getElementsByClassName('shop-item-title');

            if (!Cart_validation(title)) {
                var cartRowContent = `<div class="cart_item cart_column">
                <img class="cart_item_image" src="${imageSrc}" alt="" height="65" width="92">
                <span class="cart_item_title">${title}</span>
            </div>
            <span class="cart_price cart_column">${price}</span>
            <div class="cart_quantity cart_column">
                <input class="cart_quantity_input" type="number" value="1"  oninput="syed()">
                <button type="button" class="btn btn-danger">REMOVE</button>
            </div>`
                cartRow.innerHTML = cartRowContent;
                cartItems.prepend(cartRow);
                cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItems);
                cartRow.getElementsByClassName('cart_quantity_input')[0].addEventListener('click', quantityChanged);
            }
        }

        function Cart_validation(title) {
            var cartItemContainer = window.parent.document.getElementById('Shopping_items');
            var cartRows = cartItemContainer.getElementsByClassName('cart_row');
            for (var i = 0; i < cartRows.length; i++) {
                var cartRow = cartRows[i];
                var cart_item_title = cartRow.getElementsByClassName('cart_item_title')[0];
                if (cart_item_title.innerText == title) {
                    return true;
                }
            }

        }
        var total = 0;
        function updateKartTotal() {
            var cartItemContainer = window.parent.document.getElementById('Shopping_items');
            var cartRows = cartItemContainer.getElementsByClassName('cart_row');
            var total = 0;
            for (var i = 0; i < cartRows.length; i++) {
                var cartRow = cartRows[i];
                var priceElement = cartRow.getElementsByClassName('cart_price')[0];
                var quantityElement = cartRow.getElementsByClassName('cart_quantity_input')[0];
                var price = parseFloat(priceElement.innerText.replace('$', ''));
                var quantity = quantityElement.value;
                total = total + (price * quantity);
                console.log(price * quantity);

            }

            total = Math.round(total * 100) / 100;
            window.parent.document.getElementsByClassName('cart_total_price')[0].innerText = '$' + total;
        }

        function syed() {
            updateKartTotal();
            alert('Hello');
        }

    }



);
