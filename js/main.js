// VTuber data reused by profiles, vtuber pages, shop and fan art
const vtubers = {
  dokibird: {
    name: "Dokibird",
    accent: "#e73a4a",
    bg: "#1b0a0f",
    desc: "Chaotic bird VTuber known for FPS streams, memes and loud reactions.",
    about: "Dokibird is a loud chaotic gremlin birb VTuber who bends reality with memes, dominates FPS lobbies, and occasionally screams with the force of 10,000 birds. Despite the chaos, she treasures her community and streams like she's hanging out with friends. Her lore is currently classified.",
    links: {
      YouTube: "https://www.youtube.com/Dokibird",
      Twitch: "https://www.twitch.tv/dokibird",
      Twitter: "https://twitter.com/dokibird",
      TikTok: "https://www.tiktok.com/@dokibird"
    },
    schedule: [
      "Monday 8PM – 10PM",
      "Thursday 7PM – 11PM",
      "Saturday 9PM – 1AM"
    ],
    merch: [
      {
        id: "doki-merch-1",
        title: "Gremlin Bird Hoodie",
        price: 48.0,
        soldOut: false,
        tag: "new",
        reviews: [
          { name: "Lyn",  text: "Very comfy and warm.", stars: 5 },
          { name: "Eli",  text: "Fits nicely and looks great.", stars: 4 },
          { name: "Skye", text: "Colors look the same as the preview.", stars: 5 }
        ]
      },
      {
        id: "doki-merch-2",
        title: "Dimension Glitch Poster",
        price: 20.0,
        soldOut: true,
        tag: "limited",
        reviews: [
          { name: "Kai",  text: "Print quality is very sharp.", stars: 5 },
          { name: "Nova", text: "Looks great framed on my wall.", stars: 5 }
        ]
      },
      {
        id: "doki-merch-3",
        title: "Bird Keychain",
        price: 9.5,
        soldOut: false,
        tag: "upcoming",
        reviews: [
          { name: "Mira", text: "Small but detailed.", stars: 4 },
          { name: "Jin",  text: "Feels solid, not flimsy.", stars: 5 }
        ]
      }
    ],
    fanart: [
      { file: "doki1.png", title: "cheese!📸💛", credit: "myfroggythighs"},
      { file: "doki2.jpg", title: "#DokiGallery", credit: "Smol_DrawingBun"},
      { file: "doki3.jpg", title: "I want to spend this winter with you！🫶", credit: "Ramwing1"}
    ],
    streams: [
      { id: "doki-stream-1", title: "【DOKISMP MINECRAFT】No war crimes【Dokibird】", link: "https://www.youtube.com/embed/4tXUcSeIvF0" },
      { id: "doki-stream-2", title: "【ARC RAIDERS】Don't shoot【Dokibird】", link: "https://www.youtube.com/embed/9aVcw2lIbDM" }
    ]
  },

  sameko: {
    name: "Sameko Saba",
    accent: "#1e90ff",
    bg: "#0a121b",
    desc: "Art and chatting VTuber with a calm shark theme.",
    about: "Sameko is a calm cozy art VTuber who enjoys chill talks at ocean cafés, draws when spirits move her, and avoids chaos unless it walks into her room personally. She has no password for her brainwaves at the moment.",
    links: {
      YouTube: "https://www.youtube.com/@SamekoSaba",
      Twitter: "https://x.com/samekosaba"
    },
    schedule: [
      "Wednesday 6PM – 9PM",
      "Sunday 3PM – 8PM"
    ],
    merch: [
      {
        id: "saba-merch-1",
        title: "Shark Beanie",
        price: 24.0,
        soldOut: false,
        tag: "new",
        reviews: [
          { name: "Lyn",  text: "Very cute and fits well.", stars: 5 },
          { name: "Ryo",  text: "Warm but not too heavy.", stars: 4 },
          { name: "Skye", text: "Perfect for cozy streams.", stars: 5 }
        ]
      },
      {
        id: "saba-merch-2",
        title: "Ocean Mug",
        price: 18.0,
        soldOut: false,
        tag: "upcoming",
        reviews: [
          { name: "Tom", text: "Nice size for coffee or tea.", stars: 4 },
          { name: "Mei", text: "Handle is comfortable to hold.", stars: 5 }
        ]
      },
      {
        id: "saba-merch-3",
        title: "Shark Sticker Set",
        price: 7.5,
        soldOut: true,
        tag: "limited",
        reviews: [
          { name: "Kai", text: "Sticks well and looks bright.", stars: 5 },
          { name: "Nia", text: "No peeling after a few weeks.", stars: 4 }
        ]
      }
    ],
    fanart: [
      { file: "saba1.jpg", title: "Happy Halloween🎃🐟💙", credit: "cNERUc"},
      { file: "saba2.jpg", title: "Catshark ghost👻🎃", credit: "_yuiyo_"},
      { file: "saba3.jpg", title: "Rawr🐟🐯", credit: "mycdy_0"},
      { file: "saba4.jpg", title: "#sabart", credit: "1016_ayan"}
    ],
    streams: [
      { id: "sameko-stream-1", title: "【Leaf it Alone】lost my leafin' mind", link: "https://www.youtube.com/embed/DKhRLkhlQDc" },
      { id: "sameko-stream-2", title: "【PEAK】is there a badge for eating sand", link: "https://www.youtube.com/embed/pHNNqjYV63M" },
      { id: "sameko-stream-3", title: "【DONKEY KONG BANANZA】return to monkey", link: "https://www.youtube.com/embed/v4dADTeZFTA" }
    ]
  },

  mint: {
    name: "Mint Fantôme",
    accent: "#5bd1c7",
    bg: "#0e1418",
    desc: "Lo-fi ghost themed VTuber focused on relaxed music and games.",
    about: "Mint is a lo-fi spectral VTuber who casually floats around in static, hums melodically, and occasionally screams at horror games only to go back to whispering politely. Ghost but make it cozy.",
    links: {
      YouTube: "https://www.youtube.com/@mintfantome",
      Twitter: "https://x.com/MintFantome",
      Bluesky: "https://bsky.app/profile/mintfantome.ghostmaid.cafe"
    },
    schedule: [
      "Tuesday 9PM – 12AM",
      "Sunday 4PM – 8PM"
    ],
    merch: [
      {
        id: "mint-merch-1",
        title: "Phantom CD Album",
        price: 13.0,
        soldOut: false,
        tag: "new",
        reviews: [
          { name: "Sam",  text: "Very relaxing songs.", stars: 5 },
          { name: "Jade", text: "Nice to have a physical CD.", stars: 4 }
        ]
      },
      {
        id: "mint-merch-2",
        title: "Ghost Hoodie",
        price: 52.0,
        soldOut: true,
        tag: "limited",
        reviews: [
          { name: "Nora", text: "Material feels thick and warm.", stars: 5 },
          { name: "Rei",  text: "Print stayed clean after washing.", stars: 4 }
        ]
      },
      {
        id: "mint-merch-3",
        title: "Mint Poster",
        price: 22.5,
        soldOut: false,
        tag: "upcoming",
        reviews: [
          { name: "Rin", text: "Art looks very clear.", stars: 4 },
          { name: "Avery", text: "Good size for a bedroom wall.", stars: 5 }
        ]
      }
    ],
    fanart: [
      { file: "mint1.jpg", title: "❄️", credit: "_yuyue_"},
      { file: "mint2.jpg", title: "#Fantography #oshi", credit: "khlovys"},
      { file: "mint3.jpg", title: "👻 #Fantography", credit: "shepissh"}
    ],
    streams: [
      { id: "mint-stream-1", title: "【LIMBO】putting my platforming legs on!!【Maid Mint Fantôme】", link: "https://www.youtube.com/embed/OaeWfq_o4FU" },
      { id: "mint-stream-2", title: "【TO THE MOON part2】feels journey time【Maid Mint Fantôme】", link: "https://www.youtube.com/embed/cpas1ryQNxo" }
    ]
  },

  nimi: {
    name: "Nimi Nightmare",
    accent: "#7b3cff",
    bg: "#0f0b18",
    desc: "Horror themed VTuber who plays scary games and tells stories.",
    about: "Nimi is the 3AM horror narrator. She tells eldritch lore and will jumpscare you spiritually while physically sitting still.",
    links: {
      YouTube: "https://www.youtube.com/@niminightmare",
      Twitter: "https://x.com/niminightmare"
    },
    schedule: [
      "Friday 10PM – 2AM",
      "Sunday 7PM – 11PM"
    ],
    merch: [
      {
        id: "nimi-merch-1",
        title: "Nimi Figurine",
        price: 65.0,
        soldOut: false,
        tag: "new",
        reviews: [
          { name: "Gus",  text: "Nice details on the model.", stars: 5 },
          { name: "Skye", text: "Paint looks clean.", stars: 4 }
        ]
      }
    ],
    fanart: [
      { file: "nimi1.jpg", title: "💚", credit: "RitsukiChrilip9"},
      { file: "nimi2.jpg", title: "tapir eye twitch", credit: "tasstyy99"}
    ],
    streams: [
      { id: "nimi-stream-1", title: "【FEAR & HUNGER】 The horror game I was too scared to play", link: "https://www.youtube.com/embed/qGL1WEFMscs" }
    ]
  }
};

// Helper: read query parameter
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// HERO SLIDER (index.html)
function setupHeroSlider() {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;
  const slides = slider.querySelectorAll(".slide");
  if (!slides.length) return;

  let currentIndex = 0;
  function showSlide(index) {
    slides[currentIndex].classList.remove("active");
    currentIndex = index;
    slides[currentIndex].classList.add("active");
  }

  window.nextSlide = () => showSlide((currentIndex + 1) % slides.length);
  window.prevSlide = () => showSlide((currentIndex - 1 + slides.length) % slides.length);

  setInterval(() => window.nextSlide(), 7000);
}

// VTUBER PROFILE PAGE (vtuber.html)
function populateVtuberPage() {
  const id = getQueryParam("v");
  if (!id || !vtubers[id]) return;
  const vt = vtubers[id];

  document.title = `${vt.name} | Indie VTuber Hub`;
  document.body.style.backgroundColor = vt.bg;

  const header = document.getElementById("siteHeader");
  if (header) header.style.borderBottomColor = vt.accent;

  const banner = document.getElementById("bannerImg");
  if (banner) {
    banner.src = `images/${id}/banner.jpg`; // ✅ fixed banner logic
    banner.onerror = () => console.error("❗ Banner missing at: images/" + id + "/banner.jpg");
  }

  const pfp = document.getElementById("profileImg");
  if (pfp) pfp.src = `images/${id}/${id}_pfp.jpg`;

  const nameEl = document.getElementById("vtuberName");
  if (nameEl) nameEl.textContent = vt.name;

  const descEl = document.getElementById("vtuberDesc");
  if (descEl) descEl.textContent = vt.desc;

  const aboutEl = document.getElementById("aboutText");
  if (aboutEl) aboutEl.textContent = vt.about || vt.desc;

  const socialList = document.getElementById("socialLinks");
  if (socialList) {
    socialList.innerHTML = "";
    for (const [platform, url] of Object.entries(vt.links)) {
      socialList.innerHTML += `<li><a href="${url}" target="_blank" rel="noopener">${platform}</a></li>`;
    }
  }

  const scheduleUl = document.getElementById("scheduleList");
  if (scheduleUl) {
    scheduleUl.innerHTML = "";
    vt.schedule.forEach(line => scheduleUl.innerHTML += `<li>${line}</li>`);
  }

  const fanartGrid = document.getElementById("fanartGrid");
  if (fanartGrid) {
    fanartGrid.innerHTML = "";
    vt.fanart.forEach(fa => {
      fanartGrid.innerHTML += `
      <div class="fanart-card">
        <img src="images/${id}/fanart/${fa.file}" class="modal-img" alt="${fa.title}">
        <h4>${fa.title}</h4>
        <p class="small muted">By ${fa.credit}</p>
      </div>`;
    });
  }

  const streamsGrid = document.getElementById("streamsGrid");
  if (streamsGrid) {
    streamsGrid.innerHTML = "";
    vt.streams.forEach(stream => {
      streamsGrid.innerHTML += `
      <article class="video-card">
        <div class="video-embed">
          <iframe src="${stream.link}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        </div>
        <h4>${stream.title}</h4>
      </article>`;
    });
  }

  const merchGrid = document.getElementById("merchGridVT");
  if (merchGrid) {
    merchGrid.innerHTML = "";
    vt.merch.forEach(item => {
      merchGrid.innerHTML += `
      <article class="merch-card" data-vt="${id}" data-item="${item.id}" data-tag="${item.tag}">
        <h3>${item.title}</h3>
        <p>${item.soldOut ? `<span class="sold-out">$${item.price.toFixed(2)}</span> Sold out` : `$${item.price.toFixed(2)}`}</p>
      </article>`;
    });

    merchGrid.querySelectorAll(".merch-card").forEach(card => {
      card.addEventListener("click", () => openMerchModal(card.dataset.vt, card.dataset.item));
    });
  }
}

// SHOP PAGE
function populateShopPage() {
  const grid = document.getElementById("merchGridShop");
  if (!grid) return;

  grid.innerHTML = "";
  Object.entries(vtubers).forEach(([id, vt]) => {
    vt.merch.forEach(item => {
      grid.innerHTML += `
      <article class="merch-card" data-vt="${id}" data-item="${item.id}" data-tag="${item.tag}">
        <h3>${item.title}</h3>
        <p>${item.soldOut ? `<span class="sold-out">$${item.price.toFixed(2)}</span> Sold out` : `$${item.price.toFixed(2)}`}</p>
        <p class="small muted">Creator: ${vt.name}</p>
      </article>`;
    });
  });

  grid.querySelectorAll(".merch-card").forEach(card => {
    card.addEventListener("click", () => openMerchModal(card.dataset.vt, card.dataset.item));
  });

  const search = document.getElementById("merchSearch");
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase();
      grid.querySelectorAll(".merch-card").forEach(card => {
        const t = card.querySelector("h3")?.textContent.toLowerCase() || "";
        card.style.display = t.includes(q) ? "block" : "none";
      });
    });
  }

  const filter = document.getElementById("merchFilter");
  if (filter) {
    filter.addEventListener("change", () => {
      const v = filter.value;
      grid.querySelectorAll(".merch-card").forEach(card => {
        card.style.display = (v === "all" || card.dataset.tag === v) ? "block" : "none";
      });
    });
  }
}

// MERCH MODAL
function openMerchModal(vtId, merchId) {
  const vt = vtubers[vtId];
  const merch = vt?.merch.find(m => m.id === merchId);
  const modal = document.getElementById("merchModal");
  if (!modal || !merch) return;

  document.getElementById("modalTitleShop").textContent = merch.title;
  document.getElementById("modalPriceShop").textContent = `$${merch.price.toFixed(2)}`;
  document.getElementById("stockLabel").textContent = `Status: ${merch.soldOut ? "Sold Out" : "Available"}`;

  const reviewList = document.getElementById("modalReviewsShop");
  if (reviewList) {
    reviewList.innerHTML = "";
    merch.reviews.forEach(r => {
      reviewList.innerHTML += `<li><strong>${r.name}</strong><br>★${"★".repeat(r.stars-1)} <span class="muted small">${r.text}</span></li>`;
    });
  }

  modal.style.display = "flex";

  document.getElementById("modalCloseShop").onclick = () => modal.style.display = "none";
  document.getElementById("cartBtnShop").onclick = () => alert(`"${merch.title}" added to cart!`);
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
}

// FAN ART PAGE (art.html)
function populateArtPage() {
  const grid = document.getElementById("artGrid");
  if (!grid) return;

  grid.innerHTML = "";
  Object.entries(vtubers).forEach(([id, vt]) => {
    vt.fanart.forEach(fa => {
      grid.innerHTML += `
      <article class="fanart-card">
        <img src="images/${id}/fanart/${fa.file}" class="modal-img" alt="${fa.title}">
        <h4>${fa.title}</h4>
        <p class="small muted">${vt.name} — by ${fa.credit}</p>
      </article>`;
    });
  });
}

// INIT
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".hero-slider");
  if (slider) setupHeroSlider();
  populateVtuberPage();
  populateShopPage();
  populateArtPage();
  populateMerchPreviewVT(); // ✅ merch preview added to profile page
});
