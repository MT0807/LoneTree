const media = [
  { name: "Wearable Worlds 01", type: "Fashion", image: "assets/projects/digital-lookbook/01/cover.webp" },
  { name: "Wearable Worlds 02", type: "Fashion", image: "assets/projects/digital-lookbook/01/02.webp" },
  { name: "Wearable Worlds 03", type: "Fashion", image: "assets/projects/digital-lookbook/02/cover.webp" },
  { name: "Wearable Worlds 04", type: "Fashion", image: "assets/projects/digital-lookbook/02/02.webp" },
  { name: "Wearable Worlds 05", type: "Fashion", image: "assets/projects/digital-lookbook/03/cover.webp" },
  { name: "Wearable Worlds 06", type: "Fashion", image: "assets/projects/digital-lookbook/03/02.webp" },
  { name: "Wearable Worlds 07", type: "Fashion", image: "assets/projects/digital-lookbook/04/cover.webp" },
  { name: "Wearable Worlds 08", type: "Fashion", image: "assets/projects/digital-lookbook/04/02.webp" },
  { name: "Objects in Focus 01", type: "Objects", image: "assets/projects/objects-in-focus/1.webp" },
  { name: "Objects in Focus 02", type: "Objects", image: "assets/projects/objects-in-focus/2.webp" },
  { name: "Objects in Focus 03", type: "Objects", image: "assets/projects/objects-in-focus/3.webp" },
  { name: "Objects in Focus 04", type: "Objects", image: "assets/projects/objects-in-focus/4.webp" },
  { name: "Objects in Focus 05", type: "Objects", image: "assets/projects/objects-in-focus/5.webp" },
  { name: "Objects in Focus 06", type: "Objects", image: "assets/projects/objects-in-focus/6.webp" },
  { name: "Objects in Focus 07", type: "Objects", image: "assets/projects/objects-in-focus/7.webp" },
  { name: "Digital MOVE 01", type: "Motion", image: "assets/projects/digital-move/01.mp4?v=20260919-1", mobileImage: "assets/projects/digital-move/01-mobile.mp4?v=20260919-1", kind: "video" },
  { name: "Digital MOVE 02", type: "Motion", image: "assets/projects/digital-move/02.mp4?v=20260918-1", kind: "video" },
  { name: "Digital MOVE 03", type: "Motion", image: "assets/projects/digital-move/03.mp4?v=20260918-1", kind: "video" },
  { name: "Digital MOVE 04", type: "Motion", image: "assets/projects/digital-move/04.mp4?v=20260918-1", kind: "video" }
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
const modalVideo = document.querySelector(".modal-video");
const modalTitle = document.querySelector(".modal-title");
const modalKicker = document.querySelector(".modal-kicker");
const compactHome = window.matchMedia("(max-width: 479px)");
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
let galleryVideos = [];

function startMutedVideo(video) {
  if (!video || document.hidden) return;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.play().catch(() => {});
}

function shuffledItems() {
  const videos = media.filter((item) => item.kind === "video");
  const images = media.filter((item) => item.kind !== "video");

  for (let index = images.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [images[index], images[swapIndex]] = [images[swapIndex], images[index]];
  }

  return [...videos, ...images];
}

function renderGallery() {
  const mobileHeroVideo = media.find((item) => item.name === "Digital MOVE 01");
  const galleryItems = compactHome.matches && mobileHeroVideo ? [mobileHeroVideo] : shuffledItems();

  gallery.innerHTML = galleryItems.map((item) => {
    const isMobileHeroVideo = compactHome.matches && item === mobileHeroVideo;
    const mediaSource = isMobileHeroVideo && item.mobileImage ? item.mobileImage : item.image;
    const mediaElement = item.kind === "video"
      ? `<video src="${mediaSource}" muted loop autoplay playsinline webkit-playsinline preload="${isMobileHeroVideo ? "auto" : "metadata"}" aria-label="${item.name}"></video>`
      : `<img src="${item.image}" alt="${item.name}" draggable="false">`;

    return `
      <article class="tile${isMobileHeroVideo ? " is-mobile-hero-video" : ""}" data-name="${item.name}" data-type="${item.type}" data-image="${mediaSource}" data-kind="${item.kind || "image"}">
        <div class="tile-label"><span class="tile-dot"></span><span>${item.name}</span></div>
        ${isMobileHeroVideo
          ? mediaElement
          : `<a class="media-link" href="#" draggable="false" aria-label="View ${item.name}">${mediaElement}</a>`}
      </article>
    `;
  }).join("");
  tiles = [...gallery.querySelectorAll(".tile")];
  galleryVideos = Array.from(gallery.querySelectorAll("video"));
  galleryVideos.forEach((video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.pause();
    if (compactHome.matches) {
      video.addEventListener("canplay", () => startMutedVideo(video), { once: true });
    }
  });
  tiles.forEach((tile) => {
    tile.querySelector(".media-link")?.addEventListener("click", (event) => {
      event.preventDefault();
      if (!moved) openPreview(tile);
    });
  });
  measure();
}

function measure() {
  if (!tiles.length) return;
  itemHeight = tiles[0].getBoundingClientRect().height;
  itemStep = itemHeight + (compactHome.matches ? 12 : 18);
  trackHeight = itemStep * tiles.length;
  const startsAtGalleryTop = compactHome.matches;
  restingOffset = gallery.getBoundingClientRect().height + (startsAtGalleryTop ? 0 : itemHeight * 0.15);
}

function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

function paintGallery() {
  if (!trackHeight) return;
  const viewportHeight = gallery.getBoundingClientRect().height;
  let activeVideo = null;
  let activeVideoDistance = Infinity;

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

    const video = tile.querySelector("video");
    const isVisible = y < viewportHeight && y + itemHeight > 0;
    const distanceFromCenter = Math.abs(center - viewportHeight / 2);
    if (video && isVisible && distanceFromCenter < activeVideoDistance) {
      activeVideo = video;
      activeVideoDistance = distanceFromCenter;
    }
  });

  galleryVideos.forEach((video) => {
    if (video === activeVideo && !document.hidden) {
      if (video.paused) startMutedVideo(video);
    } else if (!video.paused) {
      video.pause();
    }
  });
}

function tick() {
  const ease = dragging ? 0.12 : 0.06;
  if (introductionFinished && !dragging && !modal.classList.contains("is-visible") && !compactHome.matches) {
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
  if (!compactHome.matches) frame = requestAnimationFrame(tick);
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
    const isVideo = tile.dataset.kind === "video";
    modalImage.hidden = isVideo;
    modalVideo.hidden = !isVideo;
    if (isVideo) {
      modalVideo.src = tile.dataset.image;
      modalVideo.load();
      modalVideo.play().catch(() => {});
    } else {
      modalVideo.pause();
      modalVideo.removeAttribute("src");
      modalVideo.load();
      modalImage.src = tile.dataset.image;
      modalImage.alt = tile.dataset.name;
    }
    modalKicker.textContent = tile.dataset.type;
    modalTitle.textContent = tile.dataset.name;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
  });
}

function closePreview() {
  flashTransition(() => {
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
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
document.addEventListener("visibilitychange", () => {
  if (document.hidden) galleryVideos.forEach((video) => video.pause());
  else if (compactHome.matches) galleryVideos.forEach((video) => startMutedVideo(video));
});
window.addEventListener("pageshow", () => {
  if (compactHome.matches) galleryVideos.forEach((video) => startMutedVideo(video));
});
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
