const input = document.getElementById("medicineInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");
const message = document.getElementById("searchMessage");

document.getElementById("medicineCount").textContent = medicineRecords.length;
document.getElementById("providerCount").textContent = providerRecords.filter(p => p.verified).length;

function normalize(value) {
  return value.trim().toLowerCase();
}

function findMedicine(query) {
  // O(1) exact lookup through the Hash Map.
  const exact = medicineMap.get(normalize(query));
  if (exact) return [exact];

  // Prefix/partial matching for a friendlier demo search.
  return medicineRecords.filter(m =>
    m.name.toLowerCase().includes(normalize(query)) ||
    m.generic.toLowerCase().includes(normalize(query))
  );
}

function renderResults(records) {
  results.innerHTML = "";

  if (!records.length) {
    message.textContent = "No medicine found. Try Paracetamol, Azithromycin, Cetirizine or Metformin.";
    return;
  }

  message.textContent = `${records.length} medicine result(s) found. Offers are sorted by price.`;

  records.forEach(medicine => {
    // Sorting: lowest price first.
    const sortedOffers = [...medicine.offers].sort((a, b) => a.price - b.price);

    const card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML = `
      <div class="result-top">
        <div>
          <div class="medicine-name">${medicine.name}</div>
          <div class="generic">Generic: ${medicine.generic}</div>
        </div>
        <div class="ds-badge">${sortedOffers.length} providers</div>
      </div>
      <div class="offers">
        ${sortedOffers.map(o => `
          <div class="offer">
            <div class="offer-head">
              <strong>${o.provider}</strong>
              <span class="price">₹${o.price}</span>
            </div>
            <div class="generic">${o.location} · ${o.distance} km</div>
            <div class="available ${o.stock > 0 ? "yes" : "no"}">
              ${o.stock > 0 ? `Available · ${o.stock} units` : "Currently unavailable"}
            </div>
          </div>
        `).join("")}
      </div>
    `;
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
input.addEventListener("keydown", e => {
  if (e.key === "Enter") searchMedicine();
});

function renderProviders() {
  const grid = document.getElementById("providerGrid");
  grid.innerHTML = providerRecords
    .slice()
    .sort((a, b) => a.distance - b.distance)
    .map(p => `
      <article class="provider">
        <span class="distance">${p.distance} km</span>
        <h3>${p.name}</h3>
        <p>${p.location}</p>
        <span class="verified">✓ VERIFIED PROVIDER</span>
      </article>
    `).join("");
}

renderProviders();
