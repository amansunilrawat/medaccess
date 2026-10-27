const input = document.getElementById("medicineInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");
const message = document.getElementById("searchMessage");
const sortSelect = document.getElementById("sortSelect");

document.getElementById("medicineCount").textContent = medicineRecords.length;
document.getElementById("providerCount").textContent = providerRecords.filter(p => p.verified).length;

function normalize(value) { return value.trim().toLowerCase(); }

function findMedicine(query) {
  const key = normalize(query);
  const exact = medicineMap.get(key);
  if (exact) return exact;
  return medicineRecords.filter(m =>
    m.name.toLowerCase().includes(key) || m.generic.toLowerCase().includes(key)
  );
}

function renderResults(records) {
  results.innerHTML = "";
  if (!records.length) {
    message.textContent = "No matching medicine found. Try a generic or medicine name.";
    return;
  }
  message.textContent = `${records.length} matching medicine(s). Compare vendor prices and availability below.`;

  records.forEach(medicine => {
    const offers = medicine.offers.map(o => {
      const provider = providerRecords.find(p => p.id === o.providerId);
      return {...o, provider};
    }).sort((a,b) => {
      if (sortSelect.value === "distance") return a.provider.distance - b.provider.distance;
      return a.price - b.price;
    });

    const card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML = `
      <div class="result-top">
        <div><div class="medicine-name">${medicine.name}</div>
        <div class="generic">Generic: ${medicine.generic}</div></div>
        <div class="ds-badge">${offers.length} vendors</div>
      </div>
      <div class="offers">
        ${offers.map(o => {
          const p = o.provider;
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`;
          return `<div class="offer">
            <div class="offer-head"><strong>${p.name}</strong><span class="price">₹${o.price}</span></div>
            <div class="generic">${p.location} · ${p.distance.toFixed(1)} km</div>
            <div class="available ${o.stock > 0 ? "yes" : "no"}">${o.stock > 0 ? `Available · ${o.stock} units` : "Currently unavailable"}</div>
            <div class="shop-address">${p.address}</div>
            <a class="map-link" href="${mapUrl}" target="_blank" rel="noopener noreferrer">View shop on map ↗</a>
          </div>`;
        }).join("")}
      </div>`;
    results.appendChild(card);
  });
}

function searchMedicine() {
  const query = input.value;
  if (!query.trim()) {
    results.innerHTML = "";
    message.textContent = "Enter a medicine name to begin.";
    return;
  }
  renderResults(findMedicine(query));
}

searchBtn.addEventListener("click", searchMedicine);
input.addEventListener("keydown", e => { if (e.key === "Enter") searchMedicine(); });
sortSelect.addEventListener("change", () => {
  if (input.value.trim()) searchMedicine();
});

function renderProviders() {
  const grid = document.getElementById("providerGrid");
  grid.innerHTML = providerRecords.slice().sort((a,b) => a.distance-b.distance).map(p => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`;
    const count = medicineRecords.filter(m => m.offers.some(o => o.providerId === p.id)).length;
    return `<article class="provider">
      <span class="distance">${p.distance.toFixed(1)} km</span>
      <h3>${p.name}</h3><p>${p.address}</p>
      <span class="verified">✓ DEMO VENDOR</span>
      <p>${count} sample medicine listings</p>
      <a class="map-link" href="${mapUrl}" target="_blank" rel="noopener noreferrer">View shop on map ↗</a>
    </article>`;
  }).join("");
}
renderProviders();
