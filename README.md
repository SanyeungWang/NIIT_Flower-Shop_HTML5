# NIIT_Flower-Shop_HTML5
from NIIT 2019

<html>

<head>
    <link rel="shortcut icon" href="images/home/yes.ico">
    <title>Home</title>
    <script type="text/javascript" src="js/login_logout.js"></script>
    <script type="text/javascript" src="js/jquery-3.4.0.min.js"></script>
    <script type="text/javascript" src="js/Shopping_Cart.js"></script>
    <script type="text/javascript" src="js/Cart.js"></script>
    <script type="text/javascript" src="js/home.js"></script>
    <link rel="stylesheet" href="css/box.css">
    <link rel="stylesheet" href="css/cart.css">
</head>

<body>
    <header>
        <h3 style="font-size: 21px;color: yellowgreen; position: fixed; margin-top: 26px">
            <span style="width: 20px;display: inline-block"></span>
            Welcome To</h3>
        <img src="images/home/666.jpg" width="120px" height="90px" id="p">
        <h1>Countrywideflower.inc</h1>
        <a href="login.html">
            <img src="images/home/loginButton.png" alt="click here" id="loginimg">
        </a>
        <div class="shopping_kart">
            <img style="border-radius: 20px;" src="images/home/shopping-kart.jpg" height="45" id="shopping_kart_image">
        
            <div id="Shopping_items">
                   
                <center>
                <div class="cart_total" style="margin-left: -600px">
                    <Strong class="Cart_total_title">Total:</Strong>
                    <span class="cart_total_price">$0</span>
                </div>
                <br>
                <button class="btn btn_primary btn_purchase" id="button-purchase" type="button" style="margin-left: -0px">PURCHASE</button>
                </center>
            </div>

            <a >
                <img src="images/home/logoff.png" onclick="login_logout()" id="loggoff_button">
            </a>


            
    </header>

    <div id="s">
        <img src="images/home/999.jpg" alt="flower">
    </div>

    <div id="k">
        <img src="images/home/888.jpg" alt="flower" width="333px" height="250px">
    </div>

    <div class="box">

        <div class="pic">
            <ul>
                <li style="background:url('images/home/5.jpg')">
                    <img class="img1" src="images/home/1.jpg" />
                    <img class="img2" src="images/home/1.jpg" />
                </li>
                <li style="background:url('images/home/1.jpg')">
                    <img class="img1" src="images/home/2.jpg" />
                    <img class="img2" src="images/home/2.jpg" />
                </li>
                <li style="background:url('images/home/2.jpg')">
                    <img class="img1" src="images/home/3.jpg" />
                    <img class="img2" src="images/home/3.jpg" />
                </li>
                <li style="background:url('images/home/3.jpg')">
                    <img class="img1" src="images/home/4.jpg" />
                    <img class="img2" src="images/home/4.jpg" />
                </li>
                <li style="background:url('images/home/4.jpg')">
                    <img class="img1" src="images/home/5.jpg" />
                    <img class="img2" src="images/home/5.jpg" />
                </li>
            </ul>
        </div>

    </div>
    <ul id="menu">
        <li class="st"><a href="" id="home">Home Page</a>
        </li>
        <li class="st"><a href="">Best seller Flower</a>
            <ul>
                <li>Lily</li>
                <li>KNX</li>
                <li>Just show all</li>
            </ul>
        </li>

        <li class="st"><a href="">Occasions</a>
            <ul>
                <li>New Year</li>
                <li>Birthday</li>
                <li>Love520</li>
            </ul>
        </li>
        <li class="st"><a href="">Hampers</a>
            <ul>
                <li><a href="Cakes.html">Cakes</a></li>
                <li><a href="Cards.html">Cards</a></li>
                <li><a href="Chocolate.html">Chocolate</a></li>

            </ul>
        </li>
        <li class="st"><a href="">Shopping carts</a>
            <ul>
                <li>What's in</li>
                <li>To pay</li>
                <li>To manage</li>
            </ul>
        </li>
        <li class="st"><a href="">Other services</a>
            <ul>
                <li><a href="Feedback.html">Customer service</a></li>
                <li>Logistic information</li>
                <li>B2B</li>
            </ul>
        </li>
    </ul>
    <div id="main"></div>

    

    <body onload="checkLogin()" id="jer">

        <div class="container-content-section">
            <div class="shop-item">
                <span class="shop-item-title">ROSE couples</span>
                <img class="shop-item-image" src="images/flower/fl1.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$31.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Pink rose</span>
                <img class="shop-item-image" src="images/flower/fl2.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$30.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">R&K:For bestie</span>
                <img class="shop-item-image" src="images/flower/fl3.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price"> $21.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">K.N.X:For parents</span>
                <img class="shop-item-image" src="images/flower/fl4.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$30.2</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Flower chocolate</span>
                <img class="shop-item-image" src="images/chocolate/c1.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$17.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Spherical</span>
                <img class="shop-item-image" src="images/chocolate/c2.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$15.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Box-packed</span>
                <img class="shop-item-image" src="images/chocolate/c3.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$31.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Happy Birthday</span>
                <img class="shop-item-image" src="images/card/1.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$1.6</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Anniversary</span>
                <img class="shop-item-image" src="images/card/2.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$2.5</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Spring Festival</span>
                <img class="shop-item-image" src="images/card/3.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$3.6</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">Princess Crown</span>
                <img class="shop-item-image" src="images/cake/c1.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$45.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
            <div class="shop-item">
                <span class="shop-item-title">An arrow</span>
                <img class="shop-item-image" src="images/cake/c2.jpg" alt="">
                <div class="shop-item-details">
                    <span class="shop-item-price">$39.9</span>
                    <button type="submit" id="b12" class="btn btn-primary shop-item-button">Add to Kart</button>
                </div>
            </div>
        </div>
    </body>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <footer>
        <div id="footer" style="color:rgb(6, 22, 0)">
            <div id="copy_right">
                <p>© 2019 Countrywideflower.inc All Rights Reserved.</p>
            </div>
            <div class="sub_footer">
               
                <img src="images/taqw/1.jpg" width="60px" height="60px" style="border-radius: 30px">
                <p id="55">Telephone Number:
                    65256863</p>
            </div>
            <div class="sub_footer">
                <img src="images/taqw/2.jpg" width="60px" height="60px" style="border-radius: 30px">
                <p id="55">Address: #16 Wencui
                    Ningxia
                    University</p>
            </div>
            <div class="sub_footer">
                <img src="images/taqw/3.jpg" width="60px" height="60px" style="border-radius: 30px">
                <p id="55">QQ: 2019666</p>
            </div>
            <div class="sub_footer">
                <img src="images/taqw/4.jpg" width="90px" height="60px" style="border-radius: 30px">
                <p id="55">Wechat：Countrywideflower121</p>
            </div>
        </div>
    </footer>
    <script type="text/javascript" src="js/box.js"></script>
    
         <script type="text/javascript">
        $(document).ready(
            function () {

                $('#Shopping_items').hide();
                $('#shopping_kart_image').click(
                    function () {
                        $('#Shopping_items').slideToggle(500);

                    }
                );

                if (document.readyState == 'loading') {
                    document.addEventListener('DOMContentLoaded', ready);
                }
                else {
                    ready();
                }

                function ready() {
                    var RemoveCartItemButtons = $('.btn-danger');
                    console.log(RemoveCartItemButtons);
                    for (var i = 0; i < RemoveCartItemButtons.length; i++) {
                        var removeButton = RemoveCartItemButtons[i];
                        removeButton.addEventListener('click', removeCartItems);


                    }
                    var quantityInputs = document.getElementsByClassName('cart_quantity_input');
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
                    var removeButtonClicked = event.target;
                    removeButtonClicked.parentElement.parentElement.remove();
                    updateKartTotal();
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


                    addItemToCart(title, price, imageSrc);
                    updateKartTotal();
                }
                function addItemToCart(title, price, imageSrc) {
                    var cartRow = document.createElement('div');
                    cartRow.classList.add('cart_row');
                    var cartItems = document.getElementById('Shopping_items');
                    var cartItemNames = cartItems.getElementsByClassName('shop-item-title');

                    if (!Cart_validation(title)) {
                        var cartRowContent = `<div class="cart_item cart_column">
                        <img class="cart_item_image" src="${imageSrc}" alt="" height="65" width="92">
                        <span class="cart_item_title">${title}</span>
                    </div>
                    <span class="cart_price cart_column">${price}</span>
                    <div class="cart_quantity cart_column">
                        <input class="cart_quantity_input" type="number" value="1">
                        <button type="button" class="btn btn-danger">REMOVE</button>
                    </div>`
                        cartRow.innerHTML = cartRowContent;
                        cartItems.prepend(cartRow);
                        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItems);
                        cartRow.getElementsByClassName('cart_quantity_input')[0].addEventListener('click',quantityChanged);
                    }
                }

                function Cart_validation(title) {
                    var cartItemContainer = document.getElementById('Shopping_items');
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
                    var cartItemContainer = document.getElementById('Shopping_items');
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
                    document.getElementsByClassName('cart_total_price')[0].innerText = '$'+total;
                }

                $('#button-purchase').click(
                    function()
                    {
                        alert('Thank You for Shopping With Us.');
                        $('#Shopping_items').slideUp(500);
                        $('.cart_row').remove();
                    }
                );
            }

               
        );

    </script>
</body>

</html>
