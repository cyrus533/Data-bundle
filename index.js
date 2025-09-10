<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cyrus Data Hub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #0d1117; /* dark background */
      color: white;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    header {
      font-size: 32px;
      font-weight: bold;
      padding: 20px;
      background: #161b22;
    }
    header span {
      font-size: 36px;
    }
    .instructions {
      font-size: 16px;
      margin: 15px;
      padding: 10px;
      background: #1f242d;
      border-radius: 10px;
    }
    .bundle-section {
      margin: 20px;
    }
    h2 {
      color: #00ffcc;
    }
    .bundle-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1f242d;
      margin: 8px auto;
      padding: 12px 18px;
      border-radius: 10px;
      max-width: 400px;
    }
    .bundle-card button {
      background: #2ea043;
      border: none;
      padding: 8px 15px;
      border-radius: 8px;
      color: white;
      cursor: pointer;
      font-weight: bold;
    }
    .bundle-card button:hover {
      background: #238636;
    }
    .order-form {
      margin: 25px auto;
      padding: 20px;
      max-width: 450px;
      background: #1f242d;
      border-radius: 12px;
      text-align: left;
    }
    .order-form h3 {
      text-align: center;
      color: #00ffcc;
    }
    .order-form label {
      display: block;
      margin: 8px 0 4px;
    }
    .order-form input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: none;
      margin-bottom: 12px;
    }
    .order-form button {
      width: 100%;
      padding: 12px;
      background: #2ea043;
      border: none;
      border-radius: 10px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    .order-form button:hover {
      background: #238636;
    }
    footer {
      margin: 20px;
      font-size: 14px;
      color: #bbb;
    }
  </style>
</head>
<body>
  <header>
    ✈️ Cyrus Data Hub ✈️
  </header>

  <div class="instructions">
    <p><strong>Send payment to 0502376541</strong></p>
    <p>MTN users must select <b>Other Network</b> when sending.</p>
    <p>Vodafone users can go straight to the point ✅</p>
  </div>

  <div class="bundle-section">
    <h2>MTN Non-Expiry Data</h2>

    <div class="bundle-card"><span>1GB - 6 GHC</span><button onclick="selectBundle('MTN','1GB','6')">Add</button></div>
    <div class="bundle-card"><span>2GB - 11 GHC</span><button onclick="selectBundle('MTN','2GB','11')">Add</button></div>
    <div class="bundle-card"><span>3GB - 17 GHC</span><button onclick="selectBundle('MTN','3GB','17')">Add</button></div>
    <div class="bundle-card"><span>4GB - 22 GHC</span><button onclick="selectBundle('MTN','4GB','22')">Add</button></div>
    <div class="bundle-card"><span>5GB - 26 GHC</span><button onclick="selectBundle('MTN','5GB','26')">Add</button></div>
    <div class="bundle-card"><span>6GB - 31 GHC</span><button onclick="selectBundle('MTN','6GB','31')">Add</button></div>
    <div class="bundle-card"><span>7GB - 35 GHC</span><button onclick="selectBundle('MTN','7GB','35')">Add</button></div>
    <div class="bundle-card"><span>8GB - 45 GHC</span><button onclick="selectBundle('MTN','8GB','45')">Add</button></div>
    <div class="bundle-card"><span>9GB - 50 GHC</span><button onclick="selectBundle('MTN','9GB','50')">Add</button></div>
    <div class="bundle-card"><span>10GB - 50 GHC</span><button onclick="selectBundle('MTN','10GB','50')">Add</button></div>
    <div class="bundle-card"><span>15GB - 67 GHC</span><button onclick="selectBundle('MTN','15GB','67')">Add</button></div>
    <div class="bundle-card"><span>20GB - 86 GHC</span><button onclick="selectBundle('MTN','20GB','86')">Add</button></div>
    <div class="bundle-card"><span>25GB - 135 GHC</span><button onclick="selectBundle('MTN','25GB','135')">Add</button></div>
    <div class="bundle-card"><span>30GB - 145 GHC</span><button onclick="selectBundle('MTN','30GB','145')">Add</button></div>
    <div class="bundle-card"><span>40GB - 165 GHC</span><button onclick="selectBundle('MTN','40GB','165')">Add</button></div>
  </div>

  <div class="bundle-section">
    <h2>Vodafone Data</h2>

    <div class="bundle-card"><span>5GB - 25 GHC</span><button onclick="selectBundle('Vodafone','5GB','25')">Add</button></div>
    <div class="bundle-card"><span>10GB - 50 GHC</span><button onclick="selectBundle('Vodafone','10GB','50')">Add</button></div>
    <div class="bundle-card"><span>15GB - 68 GHC</span><button onclick="selectBundle('Vodafone','15GB','68')">Add</button></div>
    <div class="bundle-card"><span>20GB - 85 GHC</span><button onclick="selectBundle('Vodafone','20GB','85')">Add</button></div>
    <div class="bundle-card"><span>30GB - 125 GHC</span><button onclick="selectBundle('Vodafone','30GB','125')">Add</button></div>
    <div class="bundle-card"><span>40GB - 147 GHC</span><button onclick="selectBundle('Vodafone','40GB','147')">Add</button></div>
    <div class="bundle-card"><span>50GB - 220 GHC</span><button onclick="selectBundle('Vodafone','50GB','220')">Add</button></div>
  </div>

  <div class="order-form">
    <h3>Complete Order</h3>
    <form id="orderForm">
      <label>Selected Network</label>
      <input type="text" id="network" readonly required>

      <label>Selected Bundle</label>
      <input type="text" id="bundle" readonly required>

      <label>Price (GHC)</label>
      <input type="text" id="price" readonly required>

      <label>Beneficiary Number</label>
      <input type="text" id="number" placeholder="Enter beneficiary number" required>

      <button type="submit">Submit Order</button>
    </form>
    <p style="font-size: 13px; margin-top: 10px;">
      After payment is confirmed, you will receive your bundle within 2–25 minutes.
    </p>
  </div>

  <footer>
    © 2025 Cyrus Data Hub. All rights reserved.
  </footer>

  <script>
    function selectBundle(network, bundle, price) {
      document.getElementById('network').value = network;
      document.getElementById('bundle').value = bundle;
      document.getElementById('price').value = price;
    }

    document.getElementById('orderForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const network = document.getElementById('network').value;
      const bundle = document.getElementById('bundle').value;
      const price = document.getElementById('price').value;
      const number = document.getElementById('number').value;

      const message = `New Order:%0A📶 Network: ${network}%0A📦 Bundle: ${bundle}%0A💰 Price: ${price} GHC%0A📱 Beneficiary: ${number}`;
      window.open(`https://wa.me/233502376541?text=${message}`, '_blank');
    });
  </script>
</body>
</html>
