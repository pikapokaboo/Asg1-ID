// VTuber data used for profiles and shop
// To update: edit descriptions, schedules, clips, merch and fanart here.
const vtubers = {
  dokibird: {
    name: "Dokibird",
    accent: "#e73a4a",
    bg: "#1b0a0f",
    desc: "Chaotic bird VTuber known for FPS streams, memes and loud reactions.",
    links: {
      YouTube: "https://www.youtube.com/Dokibird",
      Twitch: "https://www.twitch.tv/dokibird",   // fixed
      Twitter: "https://twitter.com/dokibird",     // fixed
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
      {
        title: "Controller gremlin sketch",
        credit: "artbySky",
        url: "" // optional: add a link to the original art
      },
      {
        title: "Wings out, lobby ready",
        credit: "pixelRin",
        url: ""
      }
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
      {
        title: "Blue shark cafe scene",
        credit: "minttea_draws",
        url: ""
      },
      {
        title: "Sketchbook thumbnail art",
        credit: "sleepyfin",
        url: ""
      }
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
          { name: "Rin",   text: "Art looks very clear.", stars: 4 },
          { name: "Avery", text: "Good size for a bedroom wall.", stars: 5 }
        ]
      }
    ],
    fanart: [
      {
        title: "Floating ghost vocals",
        credit: "lofibread",
        url: ""
      },
      {
        title: "Green room session",
        credit: "softnoise",
        url: ""
      }
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
          { name: "Gus",  text: "Nice details on the model.", stars: 5 },
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
          { name: "Mira", text: "Looks intense on the wall.", stars: 5 },
          { name: "Taro", text: "Dark colors show up clearly.", stars: 4 }
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
          { name: "Nova", text: "Nice mix of items for fans.", stars: 5 }
        ]
      }
    ],
    fanart: [
      {
        title: "Purple flame storyteller",
        credit: "nightink",
        url: ""
      },
      {
        title: "Screaming into the void",
        credit: "echochaser",
        url: ""
      }
    ]
  }
};

// Helper: read a query string key from the URL
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// Set up hero slider on the index page
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

  // Expose functions for buttons
  window.nextSlide = function () {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  };

  window.prevSlide = function () {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
  };

  // Auto rotate
  setInterval(() => {
    window.nextSlide();
  }, 7000);
}

// Fill VTuber profile page
function populateVtuberPage() {
  const id = getQueryParam("v");
  if (!id || !vtubers[id]) return;

  const vt = vtubers[id];

  // Page title
  const pageTitle = document.getElementById("pageTitle");
  if (pageTitle) {
    pageTitle.textContent = vt.name + " | Indie VTuber Hub";
  }
  document.title = vt.name + " | Indie VTuber Hub";

  // Theme colors
  document.body.style.backgroundColor = vt.bg;
  const header = document.getElementById("siteHeader");
  if (header) {
    header.style.borderBottomColor = vt.accent;
  }

  // Banner and profile images
  const bannerImg = document.getElementById("bannerImg");
  if (bannerImg) {
    // You need to place images here: images/<id>/banner.jpg
    bannerImg.src = "images/" + id + "/banner.jpg";
  }

  const profileImg = document.getElementById("profileImg");
  if (profileImg) {
    // You need to place images here: images/<id>/<id>_pfp.jpg
    profileImg.src = "images/" + id + "/" + id + "_pfp.jpg";
  }

  // Name and description
  const nameEl = document.getElementById("vtuberName");
  if (nameEl) nameEl.textContent = vt.name;

  const descEl = document.getElementById("vtuberDesc");
  if (descEl) descEl.textContent = vt.desc;

  // Social links (styled so they don't blend into banners)
  const socialList = document.getElementById("socialLinks");
  if (socialList) {
    socialList.innerHTML = "";
    Object.keys(vt.links).forEach((platform) => {
      const url = vt.links[platform];
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = platform;

      // make readable over images
      a.style.color = "#ffffff";
      a.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      a.style.padding = "4px 10px";
      a.style.borderRadius = "999px";
      a.style.display = "inline-block";
      a.style.marginRight = "6px";
      a.style.fontSize = "0.9rem";

      li.appendChild(a);
      socialList.appendChild(li);
    });
  }

  // Schedule
  const scheduleUl = document.getElementById("scheduleList");
  if (scheduleUl) {
    scheduleUl.innerHTML = "";
    vt.schedule.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      scheduleUl.appendChild(li);
    });
  }

  // Clips
  const clipsGrid = document.getElementById("clipsGrid");
  if (clipsGrid) {
    clipsGrid.innerHTML = "";
    vt.clips.forEach((title) => {
      const card = document.createElement("article");
      card.className = "video-card";
      card.setAttribute("data-title", title.toLowerCase());

      const h4 = document.createElement("h4");
      h4.textContent = title;

      card.appendChild(h4);
      clipsGrid.appendChild(card);
    });
  }

  // Clip search filter
  const clipSearch = document.getElementById("clipSearch");
  if (clipSearch && clipsGrid) {
    clipSearch.addEventListener("input", function () {
      const query = clipSearch.value.toLowerCase();
      const cards = clipsGrid.querySelectorAll(".video-card");
      cards.forEach((card) => {
        const title = card.getAttribute("data-title");
        if (title && title.indexOf(query) !== -1) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Merch preview on VTuber page
  const merchGridVT = document.getElementById("merchGridVT");
  if (merchGridVT) {
    merchGridVT.innerHTML = "";
    vt.merch.forEach((item) => {
      const card = document.createElement("article");
      card.className = "merch-card";
      card.setAttribute("data-vt", id);
      card.setAttribute("data-item", item.id);

      const title = document.createElement("h4");
      title.textContent = item.title;

      const price = document.createElement("p");
      if (item.soldOut) {
        const spanOld = document.createElement("span");
        spanOld.className = "sold-out";
        spanOld.textContent = "$" + item.price.toFixed(2);
        const spanText = document.createElement("span");
        spanText.textContent = " Sold out";
        price.appendChild(spanOld);
        price.appendChild(spanText);
      } else {
        price.textContent = "$" + item.price.toFixed(2);
      }

      card.appendChild(title);
      card.appendChild(price);
      merchGridVT.appendChild(card);

      // Open modal from VTuber page as well
      card.addEventListener("click", function () {
        openMerchModal(id, item.id);
      });
    });
  }

  // Fan art section on VTuber page
  // Make sure vtuber.html has: <div id="fanartGrid" class="fanart-grid"></div>
  const fanartGrid = document.getElementById("fanartGrid");
  if (fanartGrid && vt.fanart && vt.fanart.length) {
    fanartGrid.innerHTML = "";
    vt.fanart.forEach((fa) => {
      const card = document.createElement("article");
      card.className = "fanart-card";

      const title = document.createElement("h4");
      title.textContent = fa.title;

      const meta = document.createElement("p");
      meta.className = "small muted";
      if (fa.url && fa.url.trim() !== "") {
        meta.innerHTML = `By ${fa.credit} — <a href="${fa.url}" target="_blank" rel="noopener">view</a>`;
      } else {
        meta.textContent = "By " + fa.credit;
      }

      card.appendChild(title);
      card.appendChild(meta);
      fanartGrid.appendChild(card);
    });
  }
}

// Fill shop page grid
function populateShopPage() {
  const grid = document.getElementById("merchGridShop");
  if (!grid) return;

  grid.innerHTML = "";
  Object.keys(vtubers).forEach((id) => {
    const vt = vtubers[id];
    vt.merch.forEach((item) => {
      const card = document.createElement("article");
      card.className = "merch-card";
      card.setAttribute("data-vt", id);
      card.setAttribute("data-item", item.id);
      card.setAttribute("data-tag", item.tag);

      const title = document.createElement("h3");
      title.textContent = item.title;

      const price = document.createElement("p");
      if (item.soldOut) {
        const spanOld = document.createElement("span");
        spanOld.className = "sold-out";
        spanOld.textContent = "$" + item.price.toFixed(2);
        const spanText = document.createElement("span");
        spanText.textContent = " Sold out";
        price.appendChild(spanOld);
        price.appendChild(spanText);
      } else {
        price.textContent = "$" + item.price.toFixed(2);
      }

      const byline = document.createElement("p");
      byline.className = "small muted";
      byline.textContent = "Creator: " + vt.name;

      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(byline);
      grid.appendChild(card);

      card.addEventListener("click", function () {
        openMerchModal(id, item.id);
      });
    });
  });

  // Search by item name
  const searchInput = document.getElementById("merchSearch");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
      const cards = grid.querySelectorAll(".merch-card");
      cards.forEach((card) => {
        const title = card.querySelector("h3");
        if (!title) return;
        const text = title.textContent.toLowerCase();
        if (text.indexOf(query) !== -1) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Filter by tag
  const filterSelect = document.getElementById("merchFilter");
  if (filterSelect) {
    filterSelect.addEventListener("change", function () {
      const value = filterSelect.value;
      const cards = grid.querySelectorAll(".merch-card");
      cards.forEach((card) => {
        const tag = card.getAttribute("data-tag");
        if (value === "all" || tag === value) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
}

// Modal for merch details
function openMerchModal(vtId, merchId) {
  const vt = vtubers[vtId];
  if (!vt) return;
  const merch = vt.merch.find((m) => m.id === merchId);
  if (!merch) return;

  const modal = document.getElementById("merchModal");
  if (!modal) return;

  const titleEl = document.getElementById("modalTitleShop");
  const priceEl = document.getElementById("modalPriceShop");
  const stockEl = document.getElementById("stockLabel");
  const reviewList = document.getElementById("modalReviewsShop");

  if (titleEl) titleEl.textContent = merch.title;
  if (priceEl) priceEl.textContent = "$" + merch.price.toFixed(2);
  if (stockEl) stockEl.textContent = merch.soldOut ? "Status: sold out" : "Status: available";

  if (reviewList) {
    reviewList.innerHTML = "";
    merch.reviews.forEach((r) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = r.name + " ";
      const stars = "★".repeat(r.stars);
      const textSpan = document.createElement("span");
      textSpan.className = "muted small";
      textSpan.textContent = " " + r.text;

      li.appendChild(strong);
      li.appendChild(document.createTextNode(stars));
      li.appendChild(document.createElement("br"));
      li.appendChild(textSpan);
      reviewList.appendChild(li);
    });
  }

  modal.style.display = "flex";

  const closeBtn = document.getElementById("modalCloseShop");
  if (closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  // Close when clicking outside
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Simple cart button behaviour
  const cartBtn = document.getElementById("cartBtnShop");
  if (cartBtn) {
    cartBtn.onclick = function () {
      alert('This is a simple demo: "' + merch.title + '" was added to a test cart.');
    };
  }
}

// Initialise everything when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  setupHeroSlider();
  populateVtuberPage();
  populateShopPage();
});
