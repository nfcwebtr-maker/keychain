document.addEventListener("DOMContentLoaded", function() {

  // ==========================================
  // 1. KONFIGURATION & WERTE
  // ==========================================
  const STEP = 5;
  const MIN_QTY = 20;      
  const FREE_SHIP = 30;    
  const SHIP_PRICE = 120;
  const CURRENCY = "TL";
  const WHATSAPP = "908503463240";
  const DEFAULT_PRICE = 30;

  // Deine aktualisierte Produktliste
const PRODUCTS = [
  { id: "1401", name: "1401", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1401.webp" },
  { id: "1402", name: "1402", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1402.webp" },
  { id: "1403", name: "1403", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1403.webp" },
  { id: "1404", name: "1404", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1404.webp" },
  { id: "1405", name: "1405", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1405.webp" },
  { id: "1406", name: "1406", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1406.webp" },
  { id: "1407", name: "1407", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1407.webp" },
  { id: "1408", name: "1408", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1408.webp" },
  { id: "1409", name: "1409", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1409.webp" },
  { id: "1410", name: "1410", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1410.webp" },
  { id: "1411", name: "1411", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1411.webp" },
  { id: "1412", name: "1412", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1412.webp" },
  { id: "1413", name: "1413", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1413.webp" },
  { id: "1414", name: "1414", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1414.webp" },
  { id: "1415", name: "1415", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1415.webp" },
  { id: "1416", name: "1416", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1416.webp" },
  { id: "1417", name: "1417", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1417.webp" },
  { id: "1418", name: "1418", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1418.webp" },
  { id: "1419", name: "1419", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1419.webp" },
  { id: "1420", name: "1420", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1420.webp" },
  { id: "1421", name: "1421", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1421.webp" },
  { id: "1422", name: "1422", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1422.webp" },
  { id: "1423", name: "1423", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1423.webp" },
  { id: "1424", name: "1424", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1424.webp" },
  { id: "1425", name: "1425", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1425.webp" },
  { id: "1426", name: "1426", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1426.webp" },
  { id: "1427", name: "1427", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1427.webp" },
  { id: "1428", name: "1428", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1428.webp" },
  { id: "1429", name: "1429", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1429.webp" },
  { id: "1430", name: "1430", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1430.webp" },
  { id: "1431", name: "1431", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1431.webp" },
  { id: "1432", name: "1432", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1432.webp" },
  { id: "1433", name: "1433", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1433.webp" },
  { id: "1434", name: "1434", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1434.webp" },
  { id: "1435", name: "1435", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1435.webp" },
  { id: "1436", name: "1436", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1436.webp" },
  { id: "1437", name: "1437", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1437.webp" },
  { id: "1438", name: "1438", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1438.webp" },
  { id: "1439", name: "1439", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1439.webp" },
  { id: "1440", name: "1440", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1440.webp" },
  { id: "1441", name: "1441", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1441.webp" },
  { id: "1442", name: "1442", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1442.webp" },
  { id: "1443", name: "1443", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1443.webp" },
  { id: "1444", name: "1444", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1444.webp" },
  { id: "1445", name: "1445", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1445.webp" },
  { id: "1446", name: "1446", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1446.webp" },
  { id: "1447", name: "1447", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1447.webp" },
  { id: "1448", name: "1448", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1448.webp" },
  { id: "1449", name: "1449", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1449.webp" },
  { id: "1450", name: "1450", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1450.webp" },
  { id: "1451", name: "1451", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1451.webp" },
  { id: "1452", name: "1452", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1452.webp" },
  { id: "1453", name: "1453", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1453.webp" },
  { id: "1454", name: "1454", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1454.webp" },
  { id: "1455", name: "1455", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1455.webp" },
  { id: "1456", name: "1456", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1456.webp" },
  { id: "1457", name: "1457", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1457.webp" },
  { id: "1458", name: "1458", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1458.webp" },
  { id: "1459", name: "1459", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1459.webp" },
  { id: "1460", name: "1460", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1460.webp" },
  { id: "1461", name: "1461", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1461.webp" },
  { id: "1462", name: "1462", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1462.webp" },
  { id: "1463", name: "1463", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1463.webp" },
  { id: "1464", name: "1464", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1464.webp" },
  { id: "1465", name: "1465", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1465.webp" },
  { id: "1466", name: "1466", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1466.webp" },
  { id: "1467", name: "1467", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1467.webp" },
  { id: "1468", name: "1468", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1468.webp" },
  { id: "1469", name: "1469", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1469.webp" },
  { id: "1470", name: "1470", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1470.webp" },
  { id: "1471", name: "1471", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1471.webp" },
  { id: "1472", name: "1472", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1472.webp" },
  { id: "1473", name: "1473", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1473.webp" },
  { id: "1474", name: "1474", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1474.webp" },
  { id: "1475", name: "1475", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1475.webp" },
  { id: "1476", name: "1476", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1476.webp" },
  { id: "1477", name: "1477", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1477.webp" },
  { id: "1478", name: "1478", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1478.webp" },
  { id: "1479", name: "1479", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1479.webp" },
  { id: "1480", name: "1480", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1480.webp" },
  { id: "1481", name: "1481", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1481.webp" },
  { id: "1482", name: "1482", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1482.webp" },
  { id: "1483", name: "1483", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1483.webp" },
  { id: "1484", name: "1484", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1484.webp" },
  { id: "1485", name: "1485", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1485.webp" },
  { id: "1486", name: "1486", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1486.webp" },
  { id: "1487", name: "1487", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1487.webp" },
  { id: "1488", name: "1488", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1488.webp" },
  { id: "1489", name: "1489", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1489.webp" },
  { id: "1490", name: "1490", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1490.webp" }
];


  const grid = document.getElementById("grid");
  const qty = {};

  // ==========================================
  // 2. GRID RENDERING & INTERAKTION
  // ==========================================
  PRODUCTS.forEach(p => {
    qty[p.id] = 0;
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="overlay"></div>
      <div class="item-badge" style="display:none;">0 Adet</div>
      <div class="item-title">${p.id} - ${p.name}</div>
      <div class="controls">
        <button class="remove" style="visibility:hidden;">-</button>
        <span class="item-qty">0</span>
        <button class="add">+</button>
      </div>
    `;

    const overlay = item.querySelector(".overlay");
    const badge = item.querySelector(".item-badge");
    const removeBtn = item.querySelector(".remove");
    const qtySpan = item.querySelector(".item-qty");

    const updateItemUI = () => {
      qtySpan.innerText = qty[p.id];
      badge.innerText = qty[p.id] + " Adet";
      
      if (qty[p.id] > 0) {
        item.classList.add("active");
        overlay.style.display = "block";
        badge.style.display = "block";
        removeBtn.style.visibility = "visible";
      } else {
        item.classList.remove("active");
        overlay.style.display = "none";
        badge.style.display = "none";
        removeBtn.style.visibility = "hidden";
      }
      updateGlobalStatus();
    };

    // Klick auf das Bild/Item fügt +5 hinzu
    item.onclick = () => { qty[p.id] += STEP; updateItemUI(); };
    
    // Klick auf Minus-Button (verhindert Bild-Klick)
    removeBtn.onclick = (e) => { 
      e.stopPropagation(); 
      qty[p.id] -= STEP; 
      if(qty[p.id] < 0) qty[p.id] = 0; 
      updateItemUI(); 
    };

    grid.appendChild(item);
  });

  // ==========================================
  // 3. STATUS BAR GÜNCELLEME
  // ==========================================
  function updateGlobalStatus() {
    const total = Object.values(qty).reduce((a, b) => a + b, 0);
    const bar = document.getElementById("statusBar");
    
    if(!bar) return;

    if (total >= MIN_QTY) {
      bar.classList.add("success");
      if (total >= FREE_SHIP) {
          bar.innerHTML = `🚀 Sepetiniz: ${total} Adet - Kargo Ücretsiz!`;
      } else {
          bar.innerHTML = `✅ Sepetiniz: ${total} Adet (Ücretsiz Kargo için ${FREE_SHIP - total} daha ekleyin)`;
      }
    } else {
      bar.classList.remove("success");
      bar.innerHTML = `Sepetiniz: ${total} Adet (Minimum için ${MIN_QTY - total} daha ekleyin)`;
    }
  }

  // ==========================================
  // 4. FORMULAR DATEN LADEN/SPEICHERN
  // ==========================================
  ["businessName", "address", "recipient", "phone"].forEach(f => {
    const el = document.getElementById(f);
    if(el && localStorage.getItem(f)) el.value = localStorage.getItem(f);
  });

  document.getElementById("saveFormBtn").onclick = () => {
    ["businessName", "address", "recipient", "phone"].forEach(f => {
      localStorage.setItem(f, document.getElementById(f).value);
    });
    alert("Bilgileriniz kaydedildi.");
  };

  // ==========================================
  // 5. SIPARIŞI OLUŞTURMA & WHATSAPP
  // ==========================================
  document.getElementById("createOrderBtn").onclick = () => {
    const total = Object.values(qty).reduce((a, b) => a + b, 0);
    if (total < MIN_QTY) {
      alert(`Minimum ${MIN_QTY} adet seçmelisiniz.`);
      return;
    }

    let subtotal = 0;
    let productLines = "";
    PRODUCTS.forEach(p => {
      if (qty[p.id] > 0) {
        subtotal += (qty[p.id] * p.price);
        productLines += `• ${p.id} - ${p.name}: ${qty[p.id]} adet\n`;
      }
    });

    const shipping = total >= FREE_SHIP ? 0 : SHIP_PRICE;
    const summaryText = `NFC.web.tr Yeni Sipariş!\n\nAlıcı: ${document.getElementById("recipient").value}\nTel: ${document.getElementById("phone").value}\n\nÜrünler:\n${productLines}\nToplam: ${subtotal + shipping} ${CURRENCY}`;

    document.getElementById("orderOutput").value = summaryText;
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(summaryText)}`;

    document.getElementById("summary").innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; gap:15px; margin-top:30px; padding:20px; background:#fff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.05); border:1px solid #eee;">
        <p style="color: #111827; font-size: 16px; font-weight: 600; margin: 0; text-align: center;">
          Sipariş listeniz oluşturuldu! ✅ <br>
          <span style="color: #4b5563; font-weight: 400; font-size: 14px;">Tamamlamak için lütfen aşağıdaki butona tıklayın:</span>
        </p>
        <a href="${waUrl}" target="_blank" style="transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" style="width:80px;">
        </a>
        <div style="background:#e8f5e9; padding:10px 15px; border-radius:8px; color:#2e7d32; font-size:13px; text-align:center;">
          Tıkladığınızda detaylar WhatsApp'a aktarılacaktır.
        </div>
      </div>
    `;

    document.getElementById("orderOutput").scrollIntoView({ behavior: "smooth", block: "center" });
  };
});


