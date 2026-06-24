const media = [
  { name: "LoneTree 01", type: "Visual", image: "assets/output/home-01.png" },
  { name: "LoneTree 02", type: "Visual", image: "assets/output/home-02.png" },
  { name: "LoneTree 03", type: "Visual", image: "assets/output/home-03.png" },
  { name: "LoneTree 04", type: "Visual", image: "assets/output/home-04.png" },
  { name: "LoneTree 05", type: "Visual", image: "assets/output/home-05.png" },
  { name: "LoneTree 06", type: "Visual", image: "assets/output/home-06.png" },
  { name: "LoneTree 07", type: "Visual", image: "assets/output/home-07.png" },
  { name: "LoneTree 08", type: "Visual", image: "assets/output/home-08.png" },
  { name: "LoneTree 09", type: "Visual", image: "assets/output/home-09.png" },
  { name: "LoneTree 10", type: "Visual", image: "assets/output/home-10.png" }
];

const AUTO_SCROLL_SPEED = 0.38;

const legacyRoutes = {
  "#talents": "talents.html",
  "#projects": "projects.html",
  "#services": "services.html",
  "#insights": "insights.html",
  "#contact": "contact.html",
  "#book": "insights.html"
};

if (legacyRoutes[window.location.hash]) {
  window.location.replace(legacyRoutes[window.location.hash]);
}

const gallery = document.querySelector("#gallery");
const loader = document.querySelector(".loader");
const transition = document.querySelector(".transition-overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const modal = document.querySelector(".project-modal");
const modalClose = document.querySelector(".modal-close");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalKicker = document.querySelector(".modal-kicker");
let tiles = [];
let dragging = false;
let moved = false;
let pointerStart = 0;
let dragStart = 0;
let target = 0;
let current = 0;
let itemHeight = 0;
let itemStep = 0;
let trackHeight = 0;
let restingOffset = 0;
let introductionFinished = false;
let frame = 0;

function shuffledItems() {
  return [...media];
}

function renderGallery() {
  gallery.innerHTML = shuffledItems()
    .map(
      (item) => `
        <article class="tile" data-name="${item.name}" data-type="${item.type}" data-image="${item.image}">
          <div class="tile-label"><span class="tile-dot"></span><span>${item.name}</span></div>
          <a class="media-link" href="#" draggable="false" aria-label="View ${item.name}">
            <img src="${item.image}" alt="${item.name}" draggable="false">
          </a>
        </article>
      `
    )
    .join("");
  tiles = [...gallery.querySelectorAll(".tile")];
  tiles.forEach((tile) => {
    tile.querySelector(".media-link").addEventListener("click", (event) => {
      event.preventDefault();
      if (!moved) openPreview(tile);
    });
  });
  measure();
}

function measure() {
  if (!tiles.length) return;
  itemHeight = tiles[0].getBoundingClientRect().height;
  itemStep = itemHeight + 18;
  trackHeight = itemStep * tiles.length;
  restingOffset = gallery.getBoundingClientRect().height + itemHeight * 0.15;
}

function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

function paintGallery() {
  if (!trackHeight) return;
  const viewportHeight = gallery.getBoundingClientRect().height;

  tiles.forEach((tile, index) => {
    let y = viewportHeight + index * itemStep - current;
    while (y > viewportHeight + itemStep) y -= trackHeight;
    while (y < -itemHeight - itemStep) y += trackHeight;
    const center = y + itemHeight / 2;
    const progress = clamp(center / viewportHeight, 0, 1);
    const opacity = clamp(Math.min((y + itemHeight) / 52, (viewportHeight - y) / 52), 0, 1);
    const parallax = -8 + progress * 5;

    tile.style.opacity = String(opacity);
    tile.style.transform = `translateY(${y}px)`;
    tile.style.zIndex = "1";
    tile.style.setProperty("--parallax", `${parallax}%`);
  });
}

function tick() {
  const ease = dragging ? 0.12 : 0.06;
  if (introductionFinished && !dragging && !modal.classList.contains("is-visible")) {
    target += AUTO_SCROLL_SPEED;
  }
  current += (target - current) * ease;
  if (!introductionFinished && Math.abs(current - restingOffset) < 1) {
    current = restingOffset;
    target = restingOffset;
    introductionFinished = true;
  }
  if (introductionFinished && trackHeight && current > restingOffset + trackHeight) {
    current -= trackHeight;
    target -= trackHeight;
  }
  if (introductionFinished && trackHeight && current < restingOffset) {
    current += trackHeight;
    target += trackHeight;
  }
  paintGallery();
  frame = requestAnimationFrame(tick);
}

function onWheel(event) {
  if (modal.classList.contains("is-visible")) return;
  event.preventDefault();
  introductionFinished = true;
  const distance = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  target += distance * 0.5;
}

function beginDrag(event) {
  introductionFinished = true;
  dragging = true;
  moved = false;
  pointerStart = event.clientY;
  dragStart = current;
  gallery.classList.add("is-dragging");
}

function moveDrag(event) {
  if (!dragging) return;
  const distance = pointerStart - event.clientY;
  if (Math.abs(distance) > 5) moved = true;
  target = dragStart + distance;
}

function endDrag() {
  dragging = false;
  gallery.classList.remove("is-dragging");
  window.setTimeout(() => {
    moved = false;
  }, 0);
}

function openMenu() {
  mobileMenu.setAttribute("aria-hidden", "false");
  menuOpen.setAttribute("aria-expanded", "true");
  mobileMenu.classList.add("is-open");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  menuOpen.setAttribute("aria-expanded", "false");
  window.setTimeout(() => mobileMenu.setAttribute("aria-hidden", "true"), 400);
}

function flashTransition(callback) {
  transition.classList.add("is-active");
  window.setTimeout(() => {
    callback();
    transition.classList.remove("is-active");
  }, 390);
}

function openPreview(tile) {
  flashTransition(() => {
    modalImage.src = tile.dataset.image;
    modalImage.alt = tile.dataset.name;
    modalKicker.textContent = tile.dataset.type;
    modalTitle.textContent = tile.dataset.name;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
  });
}

function closePreview() {
  flashTransition(() => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  });
}

function loadHome() {
  renderGallery();
  target = restingOffset;
  window.setTimeout(() => {
    loader.classList.add("is-gone");
    document.body.classList.add("is-ready");
  }, 500);
  window.setTimeout(() => loader.remove(), 1150);
  frame = requestAnimationFrame(tick);
}

gallery.addEventListener("wheel", onWheel, { passive: false });
gallery.addEventListener("pointerdown", beginDrag);
window.addEventListener("pointermove", moveDrag);
window.addEventListener("pointerup", endDrag);
window.addEventListener("resize", measure);
menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
modalClose.addEventListener("click", closePreview);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-visible")) closePreview();
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) closeMenu();
});
window.addEventListener("pagehide", () => cancelAnimationFrame(frame));

loadHome();
