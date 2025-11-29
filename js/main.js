/* ============================================================
   main.js — Site functionality for multiple indie VTubers
   Hand-written, no templates, no frameworks
   ============================================================ */

// Independent VTuber Data (PLACEHOLDERS for now)
const vtubers = {
  dokibird: {
    name: "Dokibird",
    accent: "#e73a4a",
    bg: "#1b0a0f",
    desc: "Chaotic bird VTuber known for FPS, memes, and pure chaos.",
    links: { YouTube: "#", Twitch: "#", Twitter: "#" },
    clips: ["Insane FPS Highlights", "Gremlin Doki Moments"],
    schedule: ["Mon 8PM–10PM", "Thu 7PM–11PM"],
    merch: [
      { id: "doki-merch-1", title: "Doki Hoodie", price: 48, soldOut: false, tag: "new", reviews: [
        { name: "Eli", text: "Very comfy!", stars: 5 },
        { name: "Zoe", text: "Love the print!", stars: 4 }
      ]},
      { id: "doki-merch-2", title: "Poster", price: 15, soldOut: true, tag: "limited", reviews: [
        { name: "Mason", text: "Looks awesome on my wall", stars: 5 }
      ]},
      { id: "doki-merch-3", title: "Keychain", price: 9.5, soldOut: false, tag: "upcoming", reviews: [
        { name: "Tom", text: "Cute lil accessory", stars: 4 },
        { name: "Jen", text: "Good quality", stars: 5 }
      ]}
    ]
  },

  sameko: {
    name: "Sameko Saba",
    accent: "#1e90ff",
    bg: "#0a121b",
    desc: "Ocean shark VTuber focused on art, cozy games, and sea-level nonsense.",
    links: { YouTube: "#", Twitch: "#", Twitter: "#", Instagram:"#"},
    clips: ["Chill Drawing", "Cafe IRL Stream"],
    schedule: ["Wed 6PM–9PM", "Sun 3PM–8PM"],
    merch: [
      { id: "saba-merch-1", title: "Sticker Pack", price: 7.0, soldOut: false, tag: "new", reviews: [
        {name:"Kai",text:"Sticks well!",stars:5},
        {name:"Ana",text:"Cute art!",stars:4},
        {name:"Rin",text:"Love these!",stars:5},
      ]},
      { id: "saba-merch-2", title: "Shark Mug", price: 18, soldOut: true, tag: "limited", reviews: [
        {name:"Drew",text:"Keeps my coffee warm.",stars:5},
        {name:"Zed",text:"Nice ceramic, solid print.",stars:4},
        { name: "Lea", text: "Packed well, no cracks.", stars: 5 },
      ]},
      { id: "saba-merch-3", title: "Sameko Plushie", price: 34.5, soldOut: false, tag: "upcoming", reviews: [
        {name:"Nora",text:"So soft!",stars:5},
        {name:"Mason",text:"Well stitched.",stars:4},
      ]}
    ]
  },

  mint: {
    name: "Mint Fantôme",
    accent: "#5bd1c7",
    bg: "#081013",
    desc: "Ghost musician indie idol who specializes in chill lo-fi beats.",
    links: { YouTube: "#", Twitch:"#", Twitter:"#"},
    clips: ["Lo-fi Demonic Singing", "Ghost Horror Clip"],
    schedule: ["Tue 9PM–12AM", "Sun 4PM–8PM"],
    merch: [
      { id: "mint-merch-1", title: "Mint Album (CD)", price: 13.0, soldOut: false, tag: "new", reviews: [
        { name: "Lyn", text: "Amazing vibes!", stars: 5 },
        { name: "Eli", text: "Beautiful tracks.", stars: 5 },
        { name: "Tom", text: "Great audio and packaging.", stars: 4 },
      ]},
      { id: "mint-merch-2", title: "Ghost Hoodie", price: 52.0, soldOut: true, tag: "limited", reviews: [
        { name: "Tia", text: "Extra comfy material.", stars: 5 },
        { name: "Jon", text: "My new favorite!", stars: 5 },
        { name: "Rin", text: "Sizing is perfect.", stars: 4 },
      ]},
      { id: "mint-merch-3", title: "Mint Poster", price: 22.5, soldOut: false, tag: "upcoming", reviews: [
        { name: "Sam", text: "Printed on thick paper!", stars: 5 },
        { name: "Kai", text: "Looks scary & cute!", stars: 4 },
      ]}
    ]
  },

  nimi: {
    name: "Nimi Nightmare",
    accent: "#7b3cff",
    bg: "#0a0912",
    desc: "Horror demon indie VTuber focused on storytelling and screams.",
    links: { YouTube: "#", Twitch: "#", Discord: "#" },
    clips: ["Horror Game Reactions", "Silent Scares Clip"],
    schedule: ["Fri 10PM–2AM", "Sun 7PM–11PM"],
    merch: [
      { id: "nimi-merch-1", title: "Nimi Figure", price: 65, soldOut: false, tag: "new", reviews: [
        { name: "Eli", text: "Amazing sculpt!", stars: 5 },
        { name: "Gus", text: "Small paint imperfection, still great", stars: 4 },
        { name:"Jen",text:"Stands perfectly, high detail",stars:5},
        { name:"Mira",text:"Exactly as advertised",stars:5},
      ]},
      { id: "nimi-merch-2", title: "Horror Poster", price: 20, soldOut: true, tag: "limited", reviews: [
        { name: "Mira", text: "Truly terrifying print, 10/10", stars: 5 },
        { name:"Kai",text:"No pixelation at all!",stars:5},
      ]},
      { id: "nimi-merch-3", title: "Nimi Stream Kit Bundle", price: 82.0, soldOut: false, tag: "upcoming", reviews: [
        { name: "Tom", text: "Great bundle value!", stars: 5 },
        { name:"Sam",text:"Arrived fast!",stars:4},
        {name:"Ada",text:"A little pricey but worth it",stars:5},
        {name:"Rei",text:"Two thumbs up!",stars:5},
      ]}
    ]
  }
};

// Read query for VTuber
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// Populate dynamic VTuber profile page
function populateVT() {
  const id = getQueryParam("v");
  if (!id || !vtubers[id]) return;

  const vt = vtubers[id];

  document.body.style.background = vt.bg;
  document.querySelector('.site-header').style.background = vt.accent;
  document.getElementById('vtuberName').textContent = vt.name;
  document.getElementById('vtuberDesc').textContent = vt.desc;

  // Social links
  const socialHTML = Object.keys(vt.links)
      .map(k => `<a href="${vt.links[k]}" target="_blank" rel="noopener">${k}</a>`)
      .join("");

  document.getElementById('socialLinks').innerHTML = socialHTML;

  // Schedule
  const schedHTML = vt.schedule
      .map(s => `<li>${s}</li>`)
      .join("");
  document.getElementById('scheduleList').innerHTML = schedHTML;

  // Clips
  const clipArray = vt.clips;
  const clipHTML = clipArray.map(c => `
    <article class="video-card" data-title="${c}">
        <img src="images/placeholder.png" alt="Clip">
        <h5>${c}</h5>
    </article>
  `).join("");

  document.getElementById('clipsGrid').innerHTML = clipHTML;

  // Search clips
  const clipSearch = document.getElementById("clipSearch");
  if (clipSearch) {
    clipSearch.addEventListener("keyup", () => {
      const q = clipSearch.value.toLowerCase();
      document.querySelectorAll(".video-card").forEach(card => {
        const t = card.dataset.title.toLowerCase();
        card.style.display = t.includes(q) ? "block" : "none";
      });
    });
  }
}

// Populate merch grid on shop.html
function populateShop() {
  const grid = document.getElementById("merchGridShop");
  if (!grid) return;

  grid.innerHTML = "";
  Object.keys(vtubers).forEach(id => {
    vtubers[id].merch.forEach(m => {
      grid.innerHTML += `
      <article class="merch-card" data-v="${id}" data-item="${m.id}">
        <img src="images/placeholder.png" alt="merch">
        <h4>${m.title}</h4>
        ${m.soldOut
          ? `<p class="sold-out">$${m.price.toFixed(2)} – SOLD OUT</p>`
          : `<p>$${m.price.toFixed(2)}</p>`}
        <span class="small muted">by ${vtubers[id].name}</span>
      </article>`;
    });
  });

  // Add modal open handlers
  grid.querySelectorAll(".merch-card").forEach(card => {
    card.addEventListener("click", () => openMerchModal(card.dataset.v, card.dataset.item));
  });
}

// merch modal
function openMerchModal(v, itemId) {
  const vt = vtubers[v];
  if (!vt) return;
  const merch = vt.merch.find(m => m.id === itemId);
  if (!merch) return;
  const modal = document.getElementById("merchModal");
  if (!modal) return;

  modal.style.display = "flex";
  document.getElementById("modalTitleShop").textContent = merch.title;
  document.getElementById("modalDescShop").textContent = "Placeholder description — edit later.";
  document.getElementById("modalPriceShop").innerHTML = merch.soldOut
      ? `<span class="sold-out">$${merch.price.toFixed(2)}</span>`
      : `$${merch.price.toFixed(2)}`;
  document.getElementById("stockLabel").textContent = merch.soldOut ? "Out of stock" : "In stock";

  // reviews
  const r = document.getElementById("modalReviewsShop");
  r.innerHTML = "";
  merch.reviews.forEach(rv => {
    r.innerHTML += `<li><strong>${rv.name}</strong><br><span class="small">${rv.text}</span></li>`;
  });

  // close
  document.getElementById("modalCloseShop").onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target === modal) modal.style.display = "none" };
}

/* initialize */
document.addEventListener("DOMContentLoaded", () => {
  populateVT();
  populateShop();
});
