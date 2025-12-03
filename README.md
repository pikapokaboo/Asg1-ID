# Indie VTuber Hub

## 🔗 Project Links
### GitHub Repo  
**Repo:** https://github.com/pikapokaboo/Asg1-ID.git

### Live Site (GitHub Pages)  
**Page:** https://pikapokaboo.github.io/Asg1-ID/

---

## 🌙 Overview
Indie VTuber Hub is a fan-built directory and content corner for discovering independent virtual creators and their worlds.  
The site combines profile spotlights, community fan art, and curated stream embeds, acting as a one-stop hub for fans who want quick access to creator identities, vibes, and live content without scrolling through multiple platforms.

It’s useful because it:
- Centralizes scattered indie creator content
- Highlights fandom-driven contributions (fan art + stream culture)
- Provides clean navigation and responsive layouts for mobile and desktop

This project was made for fellow VTuber fans who enjoy personality-driven browsing, aesthetic presentation, and fast content access in one cozy space.

---

## 🎨 Design Process
The website is built **for VTuber fans and students exploring fandom culture** — specifically people who want:
- easy discovery of indie creators
- a clean, dark-theme aesthetic (cos who likes light mode)
- quick access to live streams and fan art

The project helps them achieve this by using:
- Responsive card layouts that resize on mobile
- A navigation bar that adapts to screen width
- Embedded YouTube streams for instant access to creator content
- Dedicated profile pages showcasing creator identities

### User Stories
- **As a VTuber fan**, I want to browse creators quickly via cards, so that I can jump into their profiles without digging through links.
- **As a mobile user**, I want the site to resize instantly on navigation, so that I can view content comfortably without manually refreshing the layout.

### Wireframes & Mockups
Design files created during the process:
https://www.figma.com/site/KG001MS9lwk8niDt8P4kmg/Module_S10270880E_ReynerChye_Assg1_wireframe?node-id=0-1&t=fw0dhi2dgzOt5tGt-1

---

## ✨ Features

### ✅ Existing Features
- **Creator Spotlight Cards** — Browse VTubers at a glance and open profile pages instantly
- **YouTube Stream Embeds** — Watch real streams directly inside the site
- **Fandom Art Gallery** — View curated fan artworks by community artists
- **Dark Theme UI** — Consistent immersive visual identity across pages
- **Responsive Layouts (Fixed Navigation Resizing Bug)** — CSS and JS combine to auto-apply resizing on navigation

---

## 🛠 Technologies Used
- **HTML** — Structure and content of web pages
- **CSS** — Styling and responsive layout handling
- **JavaScript** — Forces live resize recalculation on page navigation
- **jQuery** — Used in profile pages for DOM handling and smoother scripting logic

---

## 🧪 Testing
The project was tested manually through real user interaction and browser simulation using devtools.

Test scenarios included:
1. Navigating across pages while resizing the window to simulate mobile width
2. Confirming layout applies resize rules immediately after navigation
3. Verifying responsive behavior doesn’t overflow or scroll horizontally
4. Clicking each creator card and confirming correct page loads
5. Playing each embedded YouTube stream and verifying it renders correctly

### Notable Bugs Encountered
- Navigation did not automatically recalc screen size on page load (fixed using JS resize dispatch)
- Height-only media queries were catching desktop views unintentionally (removed and replaced with width-preferred logic)

---

## 💌 Creator & Media Links

### 🎀 Creator Channel Links
- Dokibird: https://www.youtube.com/@Dokibird
- Sameko Saba: https://www.youtube.com/@SamekoSaba
- Maid Mint Fantôme: https://www.youtube.com/@mintfantome
- Nimi Nightmare: https://www.youtube.com/@niminightmare

### 🖼 Profile Pictures & Banners
(Used throughout site via direct linking from official channels where possible)

- Dokibird YouTube: https://www.youtube.com/embed/Dokibird
- Sameko banner: https://www.youtube.com/@SamekoSaba
- Mint banner: https://www.youtube.com/@mintfantome
- Nimi banner: https://www.youtube.com/@niminightmare

### 🌸 Curated Fan Art
All fan art is linked and credited properly below:

| VTuber | Artist Link |
|--------|----------------|
| Dokibird #1 | https://x.com/myfroggythighs/status/1993768335981596938 |
| Dokibird #2 | https://x.com/Smol_DrawingBun/status/1993677284025479679 |
| Dokibird #3 | https://x.com/Ramwing1/status/1993163504782889401 |
| Sameko #1 | https://x.com/cNERUc/status/1984215376721477986 |
| Sameko #2 | https://x.com/_yuiyo_/status/1983919448705712303 |
| Sameko #3 | https://x.com/mycdy_0/status/1983120457101652434 |
| Sameko #4 | https://x.com/1016_ayan/status/1981353392644771883 |
| Mint #1 | https://x.com/_yuyue_/status/1994290297011061172 |
| Mint #2 | https://x.com/khlovys/status/1985770253297627224 |
| Mint #3 | https://x.com/shepissh/status/1985548044344181065 |
| Nimi #1 | https://x.com/RitsukiChrilip9/status/1987490651953619302 |
| Nimi #2 | https://x.com/tasstyy99/status/1985137527611933069 |

### 🎥 Embedded Streams
All streams are used via embed links and confirmed working:

1. **DOKISMP Minecraft Stream – Dokibird**  
   https://www.youtube.com/embed/4tXUcSeIvF0
2. **Leaf it Alone – lost my leafin' mind**  
   https://www.youtube.com/embed/DKhRLkhlQDc
3. **PEAK – eating sand**  
   https://www.youtube.com/embed/pHNNqjYV63M
4. **Donkey Kong Bananza – return to monkey**  
   https://www.youtube.com/embed/v4dADTeZFTA
5. **LIMBO – putting my platforming legs on – Maid Mint Fantôme**  
   https://www.youtube.com/embed/OaeWfq_o4FU
6. **To The Moon part2 – feels journey time – Maid Mint Fantôme**  
   https://www.youtube.com/embed/cpas1ryQNxo
7. **Fear & Hunger – horror game embed**  
   https://www.youtube.com/embed/qGL1WEFMscs

---

## 💗 Credits

### ✍ Content
- Directory concept, card layout structure, and responsive image strategies learned from course materials, freecodecamp, and XD prototype examples

### 🎞 Media
- Channel profile pictures and banners were obtained from official creator YouTube channels
- Fan artworks were curated from the artists linked above and remain credited properly

### 🌷 Acknowledgements
- Inspired by VTuber fan hubs and community-driven creator directories
- Extra debugging help from Ami (ChatGPT) 😌💗
  (browser monster taming emotional support hehe)
