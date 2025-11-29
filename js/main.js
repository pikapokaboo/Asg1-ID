// VTuber data reused by profiles, vtuber pages, shop and fan art
const vtubers = {
  dokibird: {
    name: "Dokibird",
    accent: "#e73a4a",
    bg: "#1b0a0f",
    desc: "Chaotic bird VTuber known for FPS streams, memes and loud reactions.",
    links: {
      YouTube: "https://www.youtube.com/Dokibird",
      Twitch: "https://www.twitch.tv/dokibird",
      Twitter: "https://twitter.com/dokibird",
      TikTok: "https://www.tiktok.com/@dokibird"
    },
    clips: [
      "Insane FPS highlights",
      "Gremlin moment compilation",
      "Watching cursed videos"
    ],
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
      { title: "Controller gremlin sketch", credit: "artbySky", url: "" },
      { title: "Wings out, lobby ready",     credit: "pixelRin", url: "" }
    ]
  },

  sameko: {
    name: "Sameko Saba",
    accent: "#1e90ff",
    bg: "#0a121b",
    desc: "Art and chatting VTuber with a calm shark theme.",
    links: {
      YouTube: "https://www.youtube.com/@SamekoSaba",
      Twitter: "https://x.com/samekosaba"
      // No Twitch key because she does not use Twitch
    },
    clips: [
      "Chill drawing session",
      "Late night cafe stream",
      "Singing and small talk"
    ],
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
      { title: "Blue shark cafe scene",       credit: "minttea_draws", url: "" },
      { title: "Sketchbook thumbnail art",    credit: "sleepyfin",     url: "" }
    ]
  },

  mint: {
    name: "Mint Fantôme",
    accent: "#5bd1c7",
    bg: "#0e1418",
    desc: "Lo-fi ghost themed VTuber focused on relaxed music and games.",
    links: {
      YouTube: "https://www.youtube.com/@mintfantome",
      Twitter: "https://x.com/MintFantome",
      Bluesky: "https://bsky.app/profile/mintfantome.ghostmaid.cafe"
    },
    clips: [
      "Soft lo-fi karaoke",
      "Original track preview",
      "Trying a horror game"
    ],
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
          { name: "Sam",  text: "Very relaxing songs.",     stars: 5 },
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
          { name: "Rin",   text: "Art looks very clear.",        stars: 4 },
          { name: "Avery", text: "Good size for a bedroom wall.", stars: 5 }
        ]
      }
    ],
    fanart: [
      { title: "Floating ghost vocals", credit: "lofibread",  url: "" },
      { title: "Green room session",    credit: "softnoise",  url: "" }
    ]
  },

  nimi: {
    name: "Nimi Nightmare",
    accent: "#7b3cff",
    bg: "#0f0b18",
    desc: "Horror themed VTuber who plays scary games and tells stories.",
    links: {
      YouTube: "https://www.youtube.com/@niminightmare",
      Twitter: "https://x.com/niminightmare",
      Bluesky: "https://bsky.app/profile/niminightmare.bsky.social"
    },
    clips: [
      "Jump scare compilation",
      "Late night horror game",
      "Story time and lore"
    ],
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
          { name: "Gus",  text: "Nice details on the model.",   stars: 5 },
          { name: "Skye", text: "Paint looks clean with no smudges.", stars: 4 }
        ]
      },
      {
        id: "nimi-merch-2",
        title: "Horror Poster",
        price: 20.0,
        soldOut: true,
        tag: "limited",
        reviews: [
          { name: "Mira", text: "Looks intense on the wall.",    stars: 5 },
          { name: "Taro", text: "Dark colors show up clearly.",  stars: 4 }
        ]
      },
      {
        id: "nimi-merch-3",
        title: "Stream Starter Bundle",
        price: 82.0,
        soldOut: false,
        tag: "upcoming",
        reviews: [
          { name: "Ada",  text: "Good value for the contents.", stars: 4 },
          { name: "Nova", text: "Nice mix of items for fans.",  stars: 5 }
        ]
      }
    ],
    fanart: [
      { title: "Purple flame storyteller", credit: "nightink",   url: "" },
      { title: "Screaming into the void",  credit: "echochaser", url: "" }
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

  window.nextSlide = function () {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  };

  window.prevSlide = function () {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
  };

  setInterval(() => {
    window.nextSlide();
  }, 7000);
}

// VTUBER PROFILE PAGE (vtuber.html)
function populateVtuberPage() {
  const id = getQueryParam("v");
  if (!id || !vtubers[id]) return;

  const vt = vtubers[id];

  document.title = vt.name + " | Indie VTuber Hub";

  const body = document.body;
  if (body) {
    body.style.backgroundColor = vt.bg;
  }

  const header = document.getElementById("siteHeader");
  if (header) {
    header.style.borderBottomColor = vt.accent;
  }

  const bannerImg = document.getElementById("bannerImg");
  if (bannerImg) {
    bannerImg.src = `images/${id}/banner.jpg`;
  }

  const profileImg = document.getElementById("profileImg");
  if (profileImg) {
    profileImg.src = `images/${id}/${id}_pfp.jpg`;
  }

  const nameEl = document.getElementById("vtuberName");
  if (nameEl) nameEl.textContent = vt.name;

  const descEl = document.getElementById("vtuberDesc");
  if (descEl) descEl.textContent = vt.desc;

  const aboutEl = document.getElementById("aboutText");
  if (aboutEl) aboutEl.textContent = vt.desc;

  // Social links
  const socialList = document.getElementById("socialLinks");
  if (socialList) {
    socialList.innerHTML = "";
    Object.entries(vt.links).forEach(([platform, url]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = platform;
      li.appendChild(a);
      socialList.appendChild(li);
    });
  }

  // Schedule
  const scheduleUl = document.getElementById("scheduleList");
  if (scheduleUl) {
    scheduleUl.innerHTML = "";
    vt.schedule.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      scheduleUl.appendChild(li);
    });
  }

  // Clips
  const clipsGrid = document.getElementById("clipsGrid");
  if (clipsGrid) {
    clipsGrid.innerHTML = "";
    vt.clips.forEach(title => {
      const card = document.createElement("article");
      card.className = "video-card";
      card.dataset.title = title.toLowerCase();

      const h4 = document.createElement("h4");
      h4.textContent = title;

      card.appendChild(h4);
      clipsGrid.appendChild(card);
    });

    const clipSearch = document.getElementById("clipSearch");
    if (clipSearch) {
      clipSearch.addEventListener("input", function () {
        const query = clipSearch.value.toLowerCase();
        const cards = clipsGrid.querySelectorAll(".video-card");
        cards.forEach(card => {
          const title = card.dataset.title || "";
          card.style.display = title.includes(query) ? "block" : "none";
        });
      });
    }
  }

  // Merch preview on VTuber page
  const merchGridVT = document.getElementById("merchGridVT");
  if (merchGridVT) {
    merchGridVT.innerHTML = "";
    vt.merch.forEach(item => {
      const card = document.createElement("article");
      card.className = "merch-card";
      card.dataset.vt = id;
      card.dataset.item = item.id;

      const titleEl = document.createElement("h4");
      titleEl.textContent = item.title;

      const priceEl = document.createElement("p");
      if (item.soldOut) {
        const oldSpan = document.createElement("span");
        oldSpan.className = "sold-out";
        oldSpan.textContent = `$${item.price.toFixed(2)}`;
        const textSpan = document.createElement("span");
        textSpan.textContent = " Sold out";
        priceEl.appendChild(oldSpan);
        priceEl.appendChild(textSpan);
      } else {
        priceEl.textContent = `$${item.price.toFixed(2)}`;
      }

      card.appendChild(titleEl);
      card.appendChild(priceEl);
      merchGridVT.appendChild(card);

      card.addEventListener("click", () => {
        openMerchModal(id, item.id);
      });
    });
  }

  // Fan art specific to this VTuber
  const fanartGrid = document.getElementById("fanartGrid");
  if (fanartGrid && vt.fanart && vt.fanart.length) {
    fanartGrid.innerHTML = "";
    vt.fanart.forEach(fa => {
      const card = document.createElement("article");
      card.className = "fanart-card";

      const titleEl = document.createElement("h4");
      titleEl.textContent = fa.title;

      const meta = document.createElement("p");
      meta.className = "small muted";
      if (fa.url && fa.url.trim() !== "") {
        meta.innerHTML = `By ${fa.credit} · <a href="${fa.url}" target="_blank" rel="noopener">view</a>`;
      } else {
        meta.textContent = `By ${fa.credit}`;
      }

      card.appendChild(titleEl);
      card.appendChild(meta);
      fanartGrid.appendChild(card);
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
      const card = document.createElement("article");
      card.className = "merch-card";
      card.dataset.vt = id;
      card.dataset.item = item.id;
      card.dataset.tag = item.tag;

      const titleEl = document.createElement("h3");
      titleEl.textContent = item.title;

      const priceEl = document.createElement("p");
      if (item.soldOut) {
        const oldSpan = document.createElement("span");
        oldSpan.className = "sold-out";
        oldSpan.textContent = `$${item.price.toFixed(2)}`;
        const textSpan = document.createElement("span");
        textSpan.textContent = " Sold out";
        priceEl.appendChild(oldSpan);
        priceEl.appendChild(textSpan);
      } else {
        priceEl.textContent = `$${item.price.toFixed(2)}`;
      }

      const byline = document.createElement("p");
      byline.className = "small muted";
      byline.textContent = `Creator: ${vt.name}`;

      card.appendChild(titleEl);
      card.appendChild(priceEl);
      card.appendChild(byline);
      grid.appendChild(card);

      card.addEventListener("click", () => {
        openMerchModal(id, item.id);
      });
    });
  });

  // Search
  const searchInput = document.getElementById("merchSearch");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const cards = grid.querySelectorAll(".merch-card");
      cards.forEach(card => {
        const title = card.querySelector("h3");
        const text = title ? title.textContent.toLowerCase() : "";
        card.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }

  // Filter
  const filterSelect = document.getElementById("merchFilter");
  if (filterSelect) {
    filterSelect.addEventListener("change", () => {
      const value = filterSelect.value;
      const cards = grid.querySelectorAll(".merch-card");
      cards.forEach(card => {
        const tag = card.dataset.tag;
        card.style.display = (value === "all" || tag === value) ? "block" : "none";
      });
    });
  }
}

// MERCH MODAL
function openMerchModal(vtId, merchId) {
  const vt = vtubers[vtId];
  if (!vt) return;
  const merch = vt.merch.find(m => m.id === merchId);
  if (!merch) return;

  const modal = document.getElementById("merchModal");
  if (!modal) return;

  const titleEl = document.getElementById("modalTitleShop");
  const priceEl = document.getElementById("modalPriceShop");
  const stockEl = document.getElementById("stockLabel");
  const reviewList = document.getElementById("modalReviewsShop");

  if (titleEl) titleEl.textContent = merch.title;
  if (priceEl) priceEl.textContent = `$${merch.price.toFixed(2)}`;
  if (stockEl) {
    stockEl.textContent = merch.soldOut ? "Status: sold out" : "Status: available";
  }

  if (reviewList) {
    reviewList.innerHTML = "";
    merch.reviews.forEach(r => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = r.name + " ";
      const stars = "★".repeat(r.stars);
      const starsNode = document.createTextNode(stars);
      const br = document.createElement("br");
      const textSpan = document.createElement("span");
      textSpan.className = "muted small";
      textSpan.textContent = " " + r.text;

      li.appendChild(strong);
      li.appendChild(starsNode);
      li.appendChild(br);
      li.appendChild(textSpan);
      reviewList.appendChild(li);
    });
  }

  modal.style.display = "flex";

  const closeBtn = document.getElementById("modalCloseShop");
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  const cartBtn = document.getElementById("cartBtnShop");
  if (cartBtn) {
    cartBtn.onclick = function () {
      alert(`Demo cart: "${merch.title}" added.`);
    };
  }
}

// FAN ART PAGE (art.html)
function populateArtPage() {
  const artGrid = document.getElementById("artGrid");
  if (!artGrid) return;

  artGrid.innerHTML = "";
  Object.entries(vtubers).forEach(([id, vt]) => {
    if (!vt.fanart || !vt.fanart.length) return;

    vt.fanart.forEach(fa => {
      const card = document.createElement("article");
      card.className = "fanart-card";

      const titleEl = document.createElement("h4");
      titleEl.textContent = fa.title;

      const meta = document.createElement("p");
      meta.className = "small muted";
      if (fa.url && fa.url.trim() !== "") {
        meta.innerHTML = `${vt.name} — by ${fa.credit} · <a href="${fa.url}" target="_blank" rel="noopener">view</a>`;
      } else {
        meta.textContent = `${vt.name} — by ${fa.credit}`;
      }

      card.appendChild(titleEl);
      card.appendChild(meta);
      artGrid.appendChild(card);
    });
  });
}

// INIT
document.addEventListener("DOMContentLoaded", function () {
  setupHeroSlider();
  populateVtuberPage();
  populateShopPage();
  populateArtPage();
});
