document.addEventListener("DOMContentLoaded", function() {

  // ==========================================
  // 1. KONFİGÜRASYON & AYARLAR
  // ==========================================
  const STEP = 5;
  const MIN_QTY = 20;      
  const FREE_SHIP = 30;    
  const SHIP_PRICE = 120;
  const CURRENCY = "TL";
  const WHATSAPP = "908503463240";

  // Ürünlerin Kategorize Edilmiş Hali
  const CATEGORIZED_PRODUCTS = {
    "Alman Markaları": [
      { id: "1401", name: "Mercedes", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1401.webp" },
      { id: "1403", name: "Mercedes", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1403.webp" },
      { id: "1406", name: "VW", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1406.webp" },
      { id: "1407", name: "Audi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1407.webp" },
      { id: "1408", name: "Audi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1408.webp" },
      { id: "1410", name: "Opel", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1410.webp" },
      { id: "1411", name: "BMW", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1411.webp" },
      { id: "1436", name: "Passat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1436.webp" },
      { id: "1438", name: "Opel", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1438.webp" },
      { id: "1462", name: "Volkswagen", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1462.webp" },
      { id: "1476", name: "VW", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1476.webp" },
      { id: "1477", name: "Golf", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1477.webp" },
      { id: "1478", name: "AMG", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1478.webp" }
    ],
    "Japon & Kore Markaları": [
      { id: "1404", name: "Honda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1404.webp" },
      { id: "1409", name: "Honda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1409.webp" },
      { id: "1412", name: "Hyundai", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1412.webp" },
      { id: "1413", name: "Nissan", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1413.webp" },
      { id: "1415", name: "Toyota", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1415.webp" },
      { id: "1416", name: "Hyundai", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1416.webp" },
      { id: "1420", name: "KIA", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1420.webp" },
      { id: "1423", name: "Suzuki", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1423.webp" },
      { id: "1426", name: "Mitsubishi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1426.webp" },
      { id: "1428", name: "Mazda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1428.webp" },
      { id: "1432", name: "BYD", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1432.webp" },
      { id: "1449", name: "Civic", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1449.webp" },
      { id: "1450", name: "Supra", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1450.webp" }
    ],
    "Fransız & İtalyan Markaları": [
      { id: "1402", name: "Renault", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1402.webp" },
      { id: "1419", name: "Peugeot", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1419.webp" },
      { id: "1421", name: "Citroen", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1421.webp" },
      { id: "1433", name: "Fiat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1433.webp" },
      { id: "1434", name: "Renault", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1434.webp" },
      { id: "1437", name: "Fiat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1437.webp" },
      { id: "1470", name: "Fiat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1470.webp" }
    ],
    "Diğer Markalar & Özel": [
      { id: "1405", name: "Ford", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1405.webp" },
      { id: "1414", name: "Dodge", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1414.webp" },
      { id: "1417", name: "Volvo", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1417.webp" },
      { id: "1422", name: "Seat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1422.webp" },
      { id: "1427", name: "Jeep", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1427.webp" },
      { id: "1430", name: "Cupra", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1430.webp" },
      { id: "1435", name: "Tesla", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1435.webp" },
      { id: "1444", name: "Kawasaki", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1444.webp" },
      { id: "1483", name: "Harley Davidson", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1483.webp" }
    ]
  };

  const categoryContainer = document.getElementById("grid"); 
  const qty = {};

  // ==========================================
  // 2. KATEGORİ VE ÜRÜN ÇİZİMİ
  // ==========================================
  function renderCategories() {
    categoryContainer.innerHTML = ""; // Mevcut gridi temizle

    for (const [catName, products] of Object.entries(CATEGORIZED_PRODUCTS)) {
      const catId = catName.replace(/\s+/g, '-').toLowerCase();
      
      // Kategori Bölümü
      const section = document.createElement("div");
      section.className = "category-section";
      section.style.gridColumn = "1 / -1"; // Tüm sütunları kapla
      
      section.innerHTML = `
        <h2 class="category-header">${catName}</h2>
        <div class="grid cat-grid" id="grid-${catId}"></div>
        ${products.length > 4 ? `<button class="btn-toggle" data-cat="${catId}">Kategoriyi Aç (${products.length - 4} Ürün Daha)</button>` : ""}
      `;
      
      categoryContainer.appendChild(section);
      const subGrid = document.getElementById(`grid-${catId}`);

      products.forEach((p, index) => {
        qty[p.id] = 0;
        const item = document.createElement("div");
        item.className = `item ${index >= 4 ? 'is-hidden' : ''}`;
        item.setAttribute("data-cat-group", catId);
        
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

        // Olaylar
        const updateUI = () => {
          const q = qty[p.id];
          item.querySelector(".item-qty").innerText = q;
          item.querySelector(".item-badge").innerText = q + " Adet";
          item.querySelector(".remove").style.visibility = q > 0 ? "visible" : "hidden";
          item.querySelector(".item-badge").style.display = q > 0 ? "block" : "none";
          q > 0 ? item.classList.add("active") : item.classList.remove("active");
          updateGlobalStatus();
        };

        item.onclick = () => { qty[p.id] += STEP; updateUI(); };
        item.querySelector(".remove").onclick = (e) => { 
          e.stopPropagation(); 
          qty[p.id] = Math.max(0, qty[p.id] - STEP); 
          updateUI(); 
        };

        subGrid.appendChild(item);
      });
    }

    // Toggle Buton Mantığı
    document.querySelectorAll(".btn-toggle").forEach(btn => {
      btn.onclick = function() {
        const targetCat = this.getAttribute("data-cat");
        const hiddenItems = document.querySelectorAll(`.item[data-cat-group="${targetCat}"].is-hidden`);
        const allItems = document.querySelectorAll(`.item[data-cat-group="${targetCat}"]`);
        
        if (this.innerText.includes("Aç")) {
          allItems.forEach(el => el.classList.remove("is-hidden"));
          this.innerText = "Kategoriyi Kapat";
        } else {
          allItems.forEach((el, idx) => { if(idx >= 4) el.classList.add("is-hidden"); });
          this.innerText = `Kategoriyi Aç (${allItems.length - 4} Ürün Daha)`;
        }
      };
    });
  }

  // ==========================================
  // 3. STATUS BAR & FORM İŞLEMLERİ
  // ==========================================
  function updateGlobalStatus() {
    const total = Object.values(qty).reduce((a, b) => a + b, 0);
    const bar = document.getElementById("statusBar");
    if (total >= MIN_QTY) {
      bar.classList.add("success");
      bar.innerHTML = total >= FREE_SHIP ? `🚀 Sepet: ${total} Adet - Kargo Bedava!` : `✅ Sepet: ${total} Adet (Kargo Bedava için ${FREE_SHIP-total} kaldı)`;
    } else {
      bar.classList.remove("success");
      bar.innerHTML = `Sepet: ${total} Adet (Min. ${MIN_QTY} için ${MIN_QTY-total} lazım)`;
    }
  }

  ["businessName", "address", "recipient", "phone"].forEach(f => {
    const el = document.getElementById(f);
    if(el && localStorage.getItem(f)) el.value = localStorage.getItem(f);
  });

  document.getElementById("saveFormBtn").onclick = () => {
    ["businessName", "address", "recipient", "phone"].forEach(f => {
      localStorage.setItem(f, document.getElementById(f).value);
    });
    alert("Bilgiler kaydedildi.");
  };

  // ==========================================
  // 4. SİPARİŞ OLUŞTURMA (WHATSAPP DETAYLI)
  // ==========================================
  document.getElementById("createOrderBtn").onclick = () => {
    const total = Object.values(qty).reduce((a, b) => a + b, 0);
    if (total < MIN_QTY) { alert(`En az ${MIN_QTY} adet seçmelisiniz.`); return; }

    let subtotal = 0;
    let productLines = "";
    
    // Tüm kategorileri tara
    for (const cat in CATEGORIZED_PRODUCTS) {
      CATEGORIZED_PRODUCTS[cat].forEach(p => {
        if (qty[p.id] > 0) {
          subtotal += (qty[p.id] * p.price);
          productLines += `• ${p.id} ${p.name}: ${qty[p.id]} adet\n`;
        }
      });
    }

    const shipping = total >= FREE_SHIP ? 0 : SHIP_PRICE;
    const grandTotal = subtotal + shipping;

    const summaryText = `NFC.web.tr Yeni Sipariş!\n\n` +
                        `Alıcı: ${document.getElementById("recipient").value}\n` +
                        `Adres: ${document.getElementById("address").value}\n\n` +
                        `Ürünler:\n${productLines}\n` +
                        `--------------------------\n` +
                        `Toplam Adet: ${total}\n` +
                        `Ürün Toplamı: ${subtotal} ${CURRENCY}\n` +
                        `Kargo: ${shipping === 0 ? "Ücretsiz" : shipping + " " + CURRENCY}\n` +
                        `Genel Toplam: ${grandTotal} ${CURRENCY}`;

    document.getElementById("orderOutput").value = summaryText;
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(summaryText)}`;
    
    document.getElementById("summary").innerHTML = `
      <div class="wa-box">
        <p>Sipariş Hazır! Tamamlamak için tıklayın:</p>
        <a href="${waUrl}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="60"></a>
      </div>
    `;
  };

  renderCategories();
});
