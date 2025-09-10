<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyrus Data Hub - Cart Order</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: url('background.jpg') no-repeat center center/cover;
      background-attachment: fixed;
      background-size: cover;
      color: #fff;
    }
    body::before {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.6);
      z-index: -1;
    }
    .container {
      max-width: 500px;
      margin: 40px auto;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(6px);
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
    h2, h3 {
      text-align: center;
      margin-bottom: 15px;
      color: #fff;
    }
    .bundle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      padding: 10px;
      background: rgba(255,255,255,0.2);
      border-radius: 6px;
    }
    .bundle button {
      background: #25D366;
      border: none;
      color: white;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
    }
    .bundle button:hover {
      background: #1ebe57;
    }
    #cart {
      margin-top: 20px;
      padding: 10px;
      background: rgba(0,0,0,0.4);
      border-radius: 6px;
    }
    #cart ul {
      list-style: none;
      padding: 0;
    }
    #cart li {
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #cart button {
      background: red;
      border: none;
      color: white;
      padding: 4px 8px;
      border-radius: 5px;
      cursor: pointer;
    }
    input, button.checkout {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 6px;
      border: none;
      font-size: 15px;
    }
    input {
      background: rgba(255,255,255,0.9);
      color: #000;
    }
    .checkout {
      background: #25D366;
      color: white;
      cursor: pointer;
    }
    .checkout:hover {
      background: #1ebe57;
    }
    #policy {
      text-align: center;
    }
    #policy p {
      margin: 15px 0;
    }
    #policy button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 6px;
      background: #25D366;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
    #policy button:hover {
      background: #1ebe57;
    }
  </style>
</head>
<body>
  <!-- Privacy Policy -->
  <div class="container" id="policy">
    <h2>Privacy Policy</h2>
    <p>By continuing, you agree that Cyrus Data Hub will process your order details for delivery and support purposes. We do not share your information with third parties.</p>
    <button onclick="acceptPolicy()">I Agree</button>
  </div>

  <!-- Order Cart -->
  <div class="container" id="orderForm" style="display:none;">
    <h2>Order Your Bundles</h2>

    <h3>MTN Non-Expiry Data</h3>
    <div class="bundle"><span>1GB - 6 GHC</span><button onclick="addToCart('MTN 1GB',6)">Add</button></div>
    <div class="bundle"><span>2GB - 11 GHC</span><button onclick="addToCart('MTN 2GB',11)">Add</button></div>
    <div class="bundle"><span>3GB - 17 GHC</span><button onclick="addToCart('MTN 3GB',17)">Add</button></div>
    <div class="bundle"><span>4GB - 22 GHC</span><button onclick="addToCart('MTN 4GB',22)">Add</button></div>
    <div class="bundle"><span>5GB - 26 GHC</span><button onclick="addToCart('MTN 5GB',26)">Add</button></div>
    <div class="bundle"><span>6GB - 31 GHC</span><button onclick="addToCart('MTN 6GB',31)">Add</button></div>
    <div class="bundle"><span>7GB - 35 GHC</span><button onclick="addToCart('MTN 7GB',35)">Add</button></div>
    <div class="bundle"><span>8GB - 45 GHC</span><button onclick="addToCart('MTN 8GB',45)">Add</button></div>
    <div class="bundle"><span>9GB - 50 GHC</span><button onclick="addToCart('MTN 9GB',50)">Add</button></div>
    <div class="bundle"><span>10GB - 50 GHC</span><button onclick="addToCart('MTN 10GB',50)">Add</button></div>
    <div class="bundle"><span>15GB - 67 GHC</span><button onclick="addToCart('MTN 15GB',67)">Add</button></div>
    <div class="bundle"><span>20GB - 86 GHC</span><button onclick="addToCart('MTN 20GB',86)">Add</button></div>
    <div class="bundle"><span>25GB - 135 GHC</span><button onclick="addToCart('MTN 25GB',135)">Add</button></div>
    <div class="bundle"><span>30GB - 145 GHC</span><button onclick="addToCart('MTN 30GB',145)">Add</button></div>
    <div class="bundle"><span>40GB - 165 GHC</span><button onclick="addToCart('MTN 40GB',165)">Add</button></div>

    <h3>Vodafone Non-Expiry Data</h3>
    <div class="bundle"><span>1GB - 5 GHC</span><button onclick="addToCart('Vodafone 1GB',5)">Add</button></div>
    <div class="bundle"><span>2GB - 10 GHC</span><button onclick="addToCart('Vodafone 2GB',10)">Add</button></div>
    <div class="bundle"><span>3GB - 15 GHC</span><button onclick="addToCart('Vodafone 3GB',15)">Add</button></div>
    <div class="bundle"><span>4GB - 20 GHC</span><button onclick="addToCart('Vodafone 4GB',20)">Add</button></div>
    <div class="bundle"><span>5GB - 25 GHC</span><button onclick="addToCart('Vodafone 5GB',25)">Add</button></div>
    <div class="bundle"><span>10GB - 50 GHC</span><button onclick="addToCart('Vodafone 10GB',50)">Add</button></div>
    <div class="bundle"><span>20GB - 90 GHC</span><button onclick="addToCart('Vodafone 20GB',90)">Add</button></div>
    <div class="bundle"><span>40GB - 150 GHC</span><button onclick="addToCart('Vodafone 40GB',150)">Add</button></div>

    <!-- Cart Section -->
    <div id="cart">
      <h3>Your Cart</h3>
      <ul id="cartItems"></ul>
      <p><strong>Total:</strong> <span id="total">0</span> GHC</p>
      <input type="text" id="number" placeholder="Enter your phone number" required>
      <button class="checkout" onclick="checkout()">Checkout via WhatsApp</button>
    </div>
  </div>

  <script>
    let cart = [];
    let total = 0;

    function acceptPolicy() {
      document.getElementById("policy").style.display = "none";
      document.getElementById("orderForm").style.display = "block";
    }

    function addToCart(item, price) {
      cart.push({item, price});
      total += price;
      renderCart();
    }

    function removeFromCart(index) {
      total -= cart[index].price;
      cart.splice(index, 1);
      renderCart();
    }

    function renderCart() {
      let cartList = document.getElementById("cartItems");
      cartList.innerHTML = "";
      cart.forEach((c, index) => {
        cartList.innerHTML += `<li>${c.item} - ${c.price} GHC <button onclick="removeFromCart(${index})">X</button></li>`;
      });
      document.getElementById("total").innerText = total;
    }

    function checkout() {
      let number = document.getElementById("number").value;
      if (!number) {
        alert("Please enter your phone number.");
        return;
      }
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      let items = cart.map(c => `- ${c.item}`).join("\n");
      let message = `Hello Cyrus Data Hub, I want to buy:\n\n${items}\n\nTotal: ${total} GHC\nPhone: ${number}`;
      let url = `https://wa.me/233502376541?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  </script>
</body>
</html>
