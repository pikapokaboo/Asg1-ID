// -------------------- VTUBER PROFILE DATA (PLACEHOLDER IMAGES) --------------------
const vtubers = {
  dokibird: {
    name: "Dokibird",
    accent: "#e73a4a",
    bg: "#1b0a0f",
    desc: "Chaotic bird VTuber focused on FPS, memes, scuffed hype and indie grit.",
    links: { YouTube: "#", Twitch: "#", Twitter: "#" },
    clips: ["Insane FPS Highlights", "Gremlin Moments", "Cursed Meme.exe"],
    schedule: ["Mon 8PM–10PM", "Thu 7PM–11PM", "Sat 9PM–1AM"],
    merch: [
      { id:"doki-merch-1", title:"Gremlin Bird Hoodie", price:48.00, soldOut:false, tag:"new", reviews:[
        {name:"Lyn",text:"Very comfy, quality stitching!",stars:5},
        {name:"Eli",text:"Design captures the gremlin energy",stars:4},
        {name:"Tom",text:"Breathable material + warm",stars:5},
      ]},
      { id:"doki-merch-2", title:"Dimension Glitch Poster", price:20.00, soldOut:true, tag:"limited", reviews:[
        {name:"Kai",text:"Frame-worthy print, super sharp!",stars:5},
        {name:"Mira",text:"Came slightly bent but art 10/10",stars:4},
      ]},
      { id:"doki-merch-3", title:"Bird Bite Keychain", price:9.50, soldOut:false, tag:"upcoming", reviews:[
        {name:"Jen",text:"Premium metal feel!",stars:5},
        {name:"Nora",text:"Smol but cute af",stars:4},
        {name:"Zed",text:"Feels sturdy, print looks clean",stars:5}
      ]}
    ]
  },

  sameko: {
    name: "Sameko Saba",
    accent: "#1e90ff",
    bg: "#0a121b",
    desc: "Ocean shark indie who does art, cozy games and philosophical seafood nonsense.",
    links: { YouTube: "#", Twitch: "#", Twitter: "#", Instagram:"#"},
    clips: ["Ocean Debugging Stream", "Cafe Warm Vibes", "Shark Karaoke.exe", "Deep Lore Clip"],
    schedule: ["Wed 6PM–9PM", "Sun 3PM–8PM", "Fri 8PM–12AM"],
    merch: [
      {id:"saba-merch-1", title:"Shark Beanie", price:24.00, soldOut:true, tag:"limited", reviews:[
        {name:"Lyn",text:"Fits snug, looks premium",stars:4},
        {name:"Ana",text:"Very aesthetic on camera!",stars:5},
        {name:"Gus",text:"My new stream hat fr fr",stars:5}
      ]},
      {id:"saba-merch-2", title:"Deep Sea Ceramic Mug", price:18.00, soldOut:false, tag:"new", reviews:[
        {name:"Mason",text:"Weight is good, print clean",stars:4},
        {name:"Kai",text:"No fading after washes!",stars:5}
      ]},
      {id:"saba-merch-3", title:"Sameko Plush", price:34.50, soldOut:false, tag:"upcoming", reviews:[
        {name:"Nora",text:"EXTREMELY soft, nice size",stars:5},
        {name:"Tom",text:"Well-made + cute on setup",stars:4},
        {name:"Jen",text:"Came late but adorable lol",stars:5}
      ]}
    ]
  },

  mint: {
    name: "Mint Fantôme",
    accent: "#5bd1c7",
    bg: "#0e1418",
    desc: "Lo-fi ghost idol who sings original tracks and haunts digital files.",
    links: { YouTube:"#", Twitch:"#", Twitter:"#"},
    clips: ["Lo-Fi but Demonic Karaoke", "Haunted Music Session", "Mint Lore Dump"],
    schedule: ["Tue 9PM–12AM", "Sun 4PM–8PM", "Sat 7PM–10PM"],
    merch: [
      {id:"mint-merch-1", title:"Phantom CD Album", price:13.00, soldOut:false, tag:"new", reviews:[
        {name:"Sam",text:"Audio crisp + banger tracks",stars:5},
        {name:"Mira",text:"The vibes are immaculate 👻",stars:5}
      ]},
      {id:"mint-merch-2", title:"Spectral Hoodie", price:52.00, soldOut:true, tag:"limited", reviews:[
        {name:"Lyn",text:"Warm, glows IRL too, wild ⭐",stars:5},
        {name:"Ada",text:"No thread issues at all!",stars:4},
        {name:"Tom",text:"Sizing is peak accuracy.",stars:5},
      ]},
      {id:"mint-merch-3", title:"Mint Wall Poster", price:22.50, soldOut:false, tag:"upcoming", reviews:[
        {name:"Nora",text:"Thick paper! No glare!",stars:5},
        {name:"Kai",text:"Scary-cute center piece",stars:4}
      ]}
    ]
  },

  nimi: {
    name: "Nimi Nightmare",
    accent: "#7b3cff",
    bg: "#0f0b18",
    desc: "Nightmare demon who streams horror storytelling and loud.exe shrieks.",
    links: { YouTube:"#", Twitch:"#", Discord:"#"},
    clips: ["Boss Fight Panic Arc", "Demonic Horror Stories", "Silent Hill reaction clip"],
    schedule: ["Fri 10PM–2AM", "Sun 7PM–11PM", "Wed 9PM–12AM"],
    merch: [
      {id:"nimi-merch-1", title:"Nightmare Figurine", price:65.00, soldOut:false, tag:"new", reviews:[
        {name:"Eli", text:"Paint detail CLEAN clean",stars:5},
        {name:"Gus", text:"Solid base, no wobble!",stars:4},
        {name:"Sam", text:"Very detailed. Demon energy too strong",stars:5}
      ]},
      {id:"nimi-merch-2", title:"Abyss Horror Poster", price:20.00, soldOut:true, tag:"limited", reviews:[
        {name:"Mira",text:"Actually terrifying. 5★",stars:5},
        {name:"Ada",text:"Packaging reinforced 🔥",stars:4}
      ]},
      {id:"nimi-merch-3", title:"Starter Bundle Kit", price:82.00, soldOut:false, tag:"upcoming", reviews:[
        {name:"Tom", text:"Great bundle value!",stars:5},
        {name:"Nora", text:"Lovely extras included",stars:4},
        {name:"Jen", text:"Manual says cursed. Probably cursed",stars:4},
        {name:"Kai", text:"The theme alignment is flawless 😈",stars:5}
      ]}
    ]
  }
};

// -------------------- GENERIC HELPER FUNCTIONS --------------------
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// -------------------- POPULATE VTUBER PROFILE PAGE --------------------
function populateVT() {
  const id = getQueryParam("v");
  if (!id || !vtubers[id]) return;

  const vt = vtubers[id];

  document.title = vt.name;

  // Dynamic theme overrides
  document.documentElement.style.setProperty("--accent", vt.accent);

  // Page personalized background
  document.body.style.background = vt.bg;

  // Fill profile content
  document.getElementById('vtuberName').textContent = vt.name;
  document.getElementById('vtuberDesc').textContent = vt.desc;

  // Social links (must ensure no broken links)
  const socialsContainer = document.getElementById("socialLinks");
  socialsContainer.innerHTML = "";
  Object.keys(vt.links).forEach(key => {
    socialsContainer.innerHTML += `<li><a href="${vt.links[key]}" target="_blank" rel="noopener">${key}</a></li>`;
  });

  // Streaming schedule fillers
  const scheduleContainer = document.getElementById('scheduleList');
  scheduleContainer.innerHTML = vt.schedule.map(s => `<li>${s}</li>`).join("");

  // Dummy clips/search placeholder styling preserved
  const clipsContainer = document.getElementById("clipsGrid");
  clipsContainer.innerHTML = vt.clips.map(c => `
    <article class="video-card" data-title="${c}">
      <img src="images/placeholder.png" alt="clip thumbnail">
      <h5>${c}</h5>
    </article>
  `).join("");

  // Merch preview for VTuber page
  const merchContainer = document.getElementById("merchGridVT");
  if (merchContainer) {
    merchContainer.innerHTML = vt.merch.map(m => `
      <div class="merch-card" data-item="${m.id}">
        <img src="images/placeholder.png" alt="${m.title}">
        <h4>${m.title}</h4>
        ${m.soldOut ? `<p class="sold-out">$${m.price.toFixed(2)}</p>` : `<p>$${m.price.toFixed(2)}</p>`}
        <span class="small muted">Tag: ${m.tag.toUpperCase()}</span>
      </div>
    `).join("");
  }

  // Clip search filter still supported
  const clipSearch = document.getElementById("clipSearch");
  if (clipSearch) {
    clipSearch.disabled = false;
    clipSearch.addEventListener("keyup", () => {
      const value = clipSearch.value.toLowerCase();
      document.querySelectorAll(".video-card").forEach(card => {
        const t = card.dataset.title.toLowerCase();
        card.style.display = t.includes(value) ? "block" : "none";
      });
    });
  }
}

// -------------------- POPULATE GLOBAL SHOP PAGE --------------------
function populateShop() {
  const grid = document.getElementById("merchGridShop");
  if (!grid) return;

  grid.innerHTML = "";
  Object.keys(vtubers).forEach(v => {
    const vt = vtubers[v];
    vt.merch.forEach(m => {
      grid.innerHTML += `
        <article class="merch-card" data-v="${v}" data-item="${m.id}" data-tag="${m.tag}">
          <img src="images/placeholder.png" alt="${m.title}">
          <h4>${m.title}</h4>
          ${m.soldOut ? `<p class="sold-out">$${m.price.toFixed(2)}</p>` : `<p>$${m.price.toFixed(2)}</p>`}
          <p class="muted small">by ${vt.name}</p>
        </article>`;
    });
  });

  document.querySelectorAll(".merch-card").forEach(card => {
    card.addEventListener("click", () => openMerchModal(card.dataset.v, card.dataset.item));
  });
}

// -------------------- MERCH MODAL (DETAIL POPUP) --------------------
function openMerchModal(v, itemId) {
  const vt = vtubers[v];
  if (!vt) return;
  const merch = vt.merch.find(m => m.id === itemId);
  if (!merch) return;
  const modal = document.getElementById("merchModal");
  if (!modal) return;

  modal.style.display = "flex";
  document.getElementById("modalTitleShop").textContent = merch.title;
  document.getElementById("modalDescShop").textContent = "You can edit this description manually.";
  document.getElementById("modalPriceShop").textContent = `$${merch.price.toFixed(2)}`;
  document.getElementById("stockLabel").textContent = merch.soldOut ? "Out of stock" : "Available now";

  const r = document.getElementById("modalReviewsShop");
  r.innerHTML = "";
  merch.reviews.forEach(rv => {
    r.innerHTML += `<li><strong>${rv.name}</strong><br>${'★'.repeat(rv.stars)}<br><span class="small muted">${rv.text}</span></li>`;
  });

  document.getElementById("modalCloseShop").onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target === modal) modal.style.display = "none" };
}

// -------------------- INITIALIZE ALL NON-BLOCKING FEATURES --------------------
document.addEventListener("DOMContentLoaded", () => {
  populateVT();
  populateShop();
});