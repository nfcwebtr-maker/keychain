document.addEventListener("DOMContentLoaded", function() {
  const STEP = 5;
  const MIN_QTY = 20;
  const FREE_SHIP = 30;
  const SHIP_PRICE = 120;
  const WHATSAPP = "908503463240";
  const CURRENCY = "TL";

  // TÜM 90 ÜRÜNÜN KATEGORİZE EDİLMİŞ LİSTESİ
  const PRODUCTS = {
    "Avrupa Markaları": [
      { id: "1401", name: "Mercedes", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1401.webp" },
      { id: "1402", name: "Renault", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1402.webp" },
      { id: "1403", name: "Mercedes", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1403.webp" },
      { id: "1406", name: "VW", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1406.webp" },
      { id: "1407", name: "Audi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1407.webp" },
      { id: "1408", name: "Audi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1408.webp" },
      { id: "1410", name: "Opel", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1410.webp" },
      { id: "1411", name: "BMW", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1411.webp" },
      { id: "1417", name: "Volvo", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1417.webp" },
      { id: "1419", name: "Peugeot", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1419.webp" },
      { id: "1421", name: "Citroen", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1421.webp" },
      { id: "1422", name: "Seat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1422.webp" },
      { id: "1425", name: "Seat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1425.webp" },
      { id: "1433", name: "Fiat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1433.webp" },
      { id: "1434", name: "Renault", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1434.webp" },
      { id: "1436", name: "Passat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1436.webp" },
      { id: "1437", name: "Fiat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1437.webp" },
      { id: "1438", name: "Opel", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1438.webp" },
      { id: "1439", name: "SuperB", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1439.webp" },
      { id: "1441", name: "Audi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1441.webp" },
      { id: "1442", name: "Skoda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1442.webp" },
      { id: "1458", name: "Skoda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1458.webp" },
      { id: "1462", name: "Volkswagen", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1462.webp" },
      { id: "1463", name: "Dacia", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1463.webp" },
      { id: "1469", name: "Dacia", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1469.webp" },
      { id: "1470", name: "Fiat", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1470.webp" },
      { id: "1473", name: "Skoda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1473.webp" },
      { id: "1476", name: "VW", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1476.webp" },
      { id: "1477", name: "Golf", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1477.webp" }
    ],
    "Asya Markaları": [
      { id: "1404", name: "Honda", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1404.webp" },
      { id: "1412", name: "Hyundai", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1412.webp" },
      { id: "1415", name: "Toyota", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1415.webp" },
      { id: "1420", name: "KIA", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1420.webp" },
      { id: "1426", name: "Mitsubishi", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1426.webp" },
      { id: "1432", name: "BYD", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1432.webp" },
      { id: "1452", name: "Toyota", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1452.webp" },
      { id: "1461", name: "KIA", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1461.webp" }
    ],
    "Amerikan Markaları": [
      { id: "1405", name: "Ford", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1405.webp" },
      { id: "1414", name: "Dodge", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1414.webp" },
      { id: "1427", name: "Jeep", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1427.webp" },
      { id: "1451", name: "Ford", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1451.webp" },
      { id: "1481", name: "Dodge", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1481.webp" }
    ],
    "Lüks Markalar": [
      { id: "1435", name: "Tesla", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1435.webp" },
      { id: "1450", name: "Supra", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1450.webp" },
      { id: "1468", name: "Maserati", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1468.webp" },
      { id: "1471", name: "Ferrari", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1471.webp" },
      { id: "1478", name: "AMG", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1478.webp" },
      { id: "1480", name: "Jaguar", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1480.webp" },
      { id: "1482", name: "nismo", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1482.webp" },
      { id: "1489", name: "Lotus", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1489.webp" }
    ],
    "Motosiklet": [
      { id: "1444", name: "Kawasaki", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1444.webp" },
      { id: "1483", name: "Harley Davidson", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1483.webp" },
      { id: "1486", name: "Fox", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1486.webp" }
    ],
    "Diğer Modeller": [
      { id: "1490", name: "Nascar", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1490.webp" },
      { id: "1424", name: "Model-1424", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1424.webp" },
      { id: "1445", name: "Model-1445", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1445.webp" },
      { id: "1446", name: "Model-1446", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1446.webp" },
      { id: "1447", name: "Model-1447", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1447.webp" },
      { id: "1484", name: "Model-1484", price: 30, image: "https://raw.githubusercontent.com/nfcwebtr-maker/keychain/main/assets/1484.webp" }
    ]
  };

  const qty = {};
  const mainGrid = document.getElementById("mainGrid");

  // Ürün Gruplarını ve Kartları Oluştur
  for (const [catName, list] of Object.entries(PRODUCTS)) {
    const section = document.createElement("div");
    section.className = "category-block";
    
    // Boşlukları ve '&' gibi özel karakterleri tamamen temizler
const catId = catName.replace(/[^a-zA-Z0-9]/g, '');

    section.innerHTML = `
      <div class="category-header">${catName}</div>
      <div class="grid" id="grid-${catId}"></div>
      ${list.length > 4 ? `<button class="btn-toggle" onclick="toggleCat('${catId}', this)">Kategoriyi Aç (${list.length - 4} Ürün Daha)</button>` : ''}
    `;
    mainGrid.appendChild(section);
    const grid = document.getElementById(`grid-${catId}`);

    list.forEach((p, idx) => {
      qty[p.id] = 0;
      const card = document.createElement("div");
      card.className = `item ${idx >= 4 ? 'is-hidden hidden-' + catId : ''}`;
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="item-badge" style="display:none">0</div>
        <div class="item-title">${p.id} - ${p.name}</div>
        <div class="controls">
          <button class="remove" style="visibility:hidden">-</button>
          <span class="val">0</span>
          <button class="add">+</button>
        </div>
      `;

      const updateCard = () => {
        const v = qty[p.id];
        card.querySelector(".val").innerText = v;
        card.querySelector(".item-badge").innerText = v + " Adet";
        card.querySelector(".item-badge").style.display = v > 0 ? "block" : "none";
        card.querySelector(".remove").style.visibility = v > 0 ? "visible" : "hidden";
        v > 0 ? card.classList.add("active") : card.classList.remove("active");
        updateStatus();
      };

      card.onclick = () => { qty[p.id] += STEP; updateCard(); };
      card.querySelector(".remove").onclick = (e) => { e.stopPropagation(); qty[p.id] = Math.max(0, qty[p.id] - STEP); updateCard(); };
      grid.appendChild(card);
    });
  }

  // Kategori Aç/Kapat
  window.toggleCat = (id, btn) => {
    const items = document.querySelectorAll(".hidden-" + id);
    const isOpening = btn.innerText.includes("Aç");
    items.forEach(el => el.classList.toggle("is-hidden"));
    btn.innerText = isOpening ? "Kategoriyi Kapat" : `Kategoriyi Aç (${items.length} Ürün Daha)`;
  };

  const updateStatus = () => {
    const total = Object.values(qty).reduce((a, b) => a + b, 0);
    const bar = document.getElementById("statusBar");
    if (total >= MIN_QTY) {
      bar.classList.add("success");
      bar.innerHTML = total >= FREE_SHIP ? `🚀 Sepet: ${total} Adet - Kargo Bedava!` : `✅ Sepet: ${total} Adet (Bedava Kargo için ${FREE_SHIP - total} ekle)`;
    } else {
      bar.classList.remove("success");
      bar.innerHTML = `Sepet: ${total} Adet (Min. ${MIN_QTY} için ${MIN_QTY - total} lazım)`;
    }
  };

  // Form Verilerini Kaydet
  document.getElementById("saveFormBtn").onclick = () => {
    ["recipient", "phone", "address", "businessName"].forEach(id => {
      localStorage.setItem(id, document.getElementById(id).value);
    });
    alert("Bilgileriniz kaydedildi.");
  };

  // Sayfa Yüklendiğinde Formu Doldur
  ["recipient", "phone", "address", "businessName"].forEach(id => {
    if(localStorage.getItem(id)) document.getElementById(id).value = localStorage.getItem(id);
  });

  // SİPARİŞİ OLUŞTUR VE AŞAĞI KAYDIR
  document.getElementById("createOrderBtn").onclick = () => {
    const total = Object.values(qty).reduce((a, b) => a + b, 0);
    if (total < MIN_QTY) { alert(`Minimum ${MIN_QTY} adet seçmelisiniz.`); return; }

    let sub = 0, lines = "";
    for (const cat in PRODUCTS) {
      PRODUCTS[cat].forEach(p => {
        if (qty[p.id] > 0) {
          sub += (qty[p.id] * p.price);
          lines += `• ${p.id} ${p.name}: ${qty[p.id]} adet\n`;
        }
      });
    }

    const ship = total >= FREE_SHIP ? 0 : SHIP_PRICE;
    const msg = `NFC.web.tr Yeni Sipariş!\n\nAlıcı: ${document.getElementById("recipient").value}\nTel: ${document.getElementById("phone").value}\nAdres: ${document.getElementById("address").value}\n\nÜrünler:\n${lines}\n--------------------------\nToplam Adet: ${total}\nÜrün Toplamı: ${sub} ${CURRENCY}\nKargo: ${ship === 0 ? "Ücretsiz" : ship + " " + CURRENCY}\nGenel Toplam: ${sub + ship} ${CURRENCY}`;

    document.getElementById("resultSection").classList.remove("is-hidden");
    document.getElementById("orderOutput").value = msg;
    document.getElementById("summary").innerHTML = `
      <div class="wa-container">
        <div class="wa-info">✅ Sipariş Özetiniz Hazır!</div>
        <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}" target="_blank" class="wa-button-final">
          Siparişi WhatsApp ile Gönder
        </a>
      </div>`;

    // Otomatik Aşağı Kaydır
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };
});


