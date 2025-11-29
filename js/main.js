// -------------------- VTUBER PROFILE DATA --------------------
const vtubers = {
  dokibird: {
    name: "Dokibird",
    accent: "#e73a4a",
    bg: "#1b0a0f",
    desc: "Chaotic bird VTuber known for FPS, memes, and scuffed hype.",
    links: { YouTube: "#", Twitch: "#", Twitter: "#" },
    clips: ["Insane FPS Highlights", "Gremlin Moments", "Cursed Meme.exe"],
    schedule: ["Mon 8PM–10PM", "Thu 7PM–11PM", "Sat 9PM–1AM"],
    merch: [
      { id:"doki-merch-1", title:"Gremlin Bird Hoodie", price:48.00, soldOut:false, tag:"new", reviews:[
        {name:"Lyn",text:"Very comfy, quality stitching!",stars:5},
        {name:"Eli",text:"Best hoodie energy!",stars:4},
        {name:"Mira",text:"Super warm and red is perfect!",stars:5}
      ]},
      { id:"doki-merch-2", title:"Dimension Glitch Poster", price:20.00, soldOut:true, tag:"limited", reviews:[
        {name:"Kai",text:"Beautiful wall piece",stars:5},
        {name:"Mira",text:"My room is now 20% more cursed",stars:4}
      ]},
      { id:"doki-merch-3", title:"Bird Bite Keychain", price:9.50, soldOut:false, tag:"upcoming", reviews:[
        {name:"Jen",text:"Metal feels premium!",stars:5},
        {name:"Rin",text:"Loud clink but I like loud",stars:4}
      ]}
    ]
  },

  nimi: {
    name: "Nimi Nightmare",
    accent: "#7b3cff",
    bg: "#0f0b18",
    desc: "Nightmare demon indie VTuber who narrates lore at max volume.",
    links: { YouTube:"#", Twitch:"#", Discord:"#"},
    clips: ["Boss Fight Panic Arc", "Silent Scares Clip", "Ear-piercing scream comp"],
    schedule: ["Fri 10PM–2AM", "Sun 7PM–11PM", "Wed 9PM–12AM"],
    merch: [
      {id:"nimi-merch-1", title:"Nightmare Figurine", price:65.0, soldOut:false, tag:"new", reviews:[
        {name:"Gus",text:"Sculpt detail makes me fear.",stars:5},
        {name:"Jen",text:"I have nightmares now, thanks.",stars:4}
      ]},
      {id:"nimi-merch-2", title:"Abyss Horror Poster", price:20.0, soldOut:true, tag:"limited", reviews:[
        {name:"Mira",text:"Actually terrifying.",stars:5},
        {name:"Lea",text:"Colors go hard, vibes go harder",stars:5}
      ]},
      {id:"nimi-merch-3", title:"Stream Kit Bundle", price:82.0, soldOut:false, tag:"upcoming", reviews:[
        {name:"Tom",text:"Great bundle value",stars:5},
        {name:"Ada",text:"Manual says cursed. Probably is.",stars:4}
      ]}
    ]
  },

  sameko: {
    name: "Sameko Saba",
    accent: "#1e90ff",
    bg: "#0a121b",
    desc: "Cozy art-shark VTuber who spills soup and draws dangerously.",
    links: { YouTube:"#", Twitch:"#", Twitter:"#", Instagram:"#"},
    clips: ["Ocean Debug Stream", "Cafe Warm Vibes", "SCUFFED OCEAN PHYSICS"],
    schedule: ["Wed 6PM–9PM", "Sun 3PM–8PM"],
    merch: [
      {id:"saba-merch-1", title:"Shark Beanie", price:24.0, soldOut:false, tag:"new", reviews:[
        {name:"Lyn",text:"Fits perfectly on stream.",stars:5},
        {name:"Mason",text:"Snug but cute!!",stars:4}
      ]},
      {id:"saba-merch-2", title:"Deep Sea Mug", price:18.0, soldOut:false, tag:"upcoming", reviews:[
        {name:"Tom",text:"Keeps drinks hot!",stars:5},
        {name:"Rin",text:"Shonk cup supremacy",stars:5}
      ]},
      {id:"saba-merch-3", title:"Shark Plush", price:34.5, soldOut:true, tag:"limited", reviews:[
        {name:"Jen",text:"SO soft.",stars:5}
      ]}
    ]
  },

  mint: {
    name: "Mint Fantôme",
    accent: "#5bd1c7",
    bg: "#0e1418",
    desc: "Lo-fi ghost idol who sings calamity tunes calmly.",
    links: { YouTube:"#", Twitch:"#", Twitter:"#"},
    clips: ["Lo-Fi Karaoke.exe","Haunted Track Drop","Ghost Reactions"],
    schedule: ["Tue 9PM–12AM","Sun 4PM–8PM"],
    merch: [
      {id:"mint-merch-1", title:"Phantom CD Album", price:13.0, soldOut:false, tag:"new", reviews:[
        {name:"Sam",text:"Audio is immaculate!",stars:5},
        {name:"Mira",text:"Brain altered gently.",stars:5}
      ]},
      {id:"mint-merch-2", title:"Spectral Hoodie", price:52.0, soldOut:true, tag:"limited", reviews:[
        {name:"Tom",text:"Warm and spectral 👍",stars:4},
        {name:"Kai",text:"Glow-up ghost energy",stars:5},
        {name:"Ada",text:"I haunt better now",stars:5}
      ]},
      {id:"mint-merch-3", title:"Mint HD Poster", price:22.5, soldOut:false, tag:"upcoming", reviews:[
        {name:"Nora",text:"Thick paper & clean print!",stars:5}
      ]}
    ]
  }
};

// -------------------- HERO SLIDESHOW FIX --------------------
let currentSlide = 0;

function changeSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function nextSlide() { changeSlide(1); }
function prevSlide() { changeSlide(-1); }

// Auto-cycle every 6 seconds
setInterval(nextSlide, 6000);

// -------------------- POPULATE VTUBER PROFILE PAGE --------------------
function populateVT() {
  const id = getQueryParam("v");
  if (!id || !vtubers[id]) {
    console.error("❌ VTuber ID not found in data object");
    return;
  }

  const vt = vtubers[id];

  // Apply theme
  document.body.style.backgroundColor = vt.bg;
  document.getElementById("siteHeader").style.background = vt.accent;

  // Set PFP correctly
  document.getElementById("profileImg").src = `images/${id}/${id}_pfp.jpg`;

  // Update text
  document.getElementById("vtuberName").textContent = vt.name;
  document.getElementById("vtuberDesc").textContent = vt.desc;

  // Inject socials
  document.getElementById("socialLinks").innerHTML =
      Object.entries(vt.links).map(([k,v]) =>
      `<li><a href="${v}" target="_blank">${k}</a></li>`).join("");

  // Schedule
  document.getElementById("scheduleList").innerHTML =
      vt.schedule.map(s => `<li>${s}</li>`).join("");

  // Clips
  document.getElementById("clipsGrid").innerHTML =
      vt.clips.map(c =>
      `<article class="video-card"><img src="images/placeholder.png"><h4>${c}</h4></article>`).join("");
}

// -------------------- INIT --------------------
window.addEventListener("load", () => {
  populateVT();
});
