const pageLoader = document.querySelector(".loader");
const pageTransition = document.querySelector(".transition-overlay");
const projectCategoryToggles = Array.from(document.querySelectorAll("[data-project-category-toggle]"));
const modelFilterButtons = Array.from(document.querySelectorAll("[data-model-filter]"));
const faceFilterButtons = Array.from(document.querySelectorAll("[data-face-filter]"));
const modelSubfilters = document.querySelector(".model-subfilters");
const modelGrid = document.querySelector("[data-model-grid]");
const modelEmpty = document.querySelector("[data-model-empty]");
const modelData = window.LONETREE_MODELS || [];
let modelCards = Array.from(document.querySelectorAll(".model-card"));
const previewPanel = document.querySelector(".preview-panel");
const previewClose = document.querySelector(".preview-close");
const previewImage = document.querySelector(".preview-image");
const previewTitle = document.querySelector(".preview-title");
const previewMeta = document.querySelector(".preview-meta");
const previewTriggers = Array.from(document.querySelectorAll("[data-preview-image]"));
const newsletterForm = document.querySelector(".newsletter");
const formNote = document.querySelector(".form-note");
const languageToggle = document.querySelector("[data-language-toggle]");
const aboutCopyCn = document.querySelector(".about-copy-cn");
const aboutCopyEn = document.querySelector(".about-copy-en");
const aboutStage = document.querySelector("[data-about-stage]");
const memberDetail = document.querySelector(".about-member-detail");
const memberTriggers = Array.from(document.querySelectorAll("[data-member-trigger]"));
const memberPanels = Array.from(document.querySelectorAll("[data-member-panel]"));
const memberBack = document.querySelector("[data-member-back]");
const memberLanguageToggle = document.querySelector("[data-member-language-toggle]");
const memberLanguageBlocks = Array.from(document.querySelectorAll(".member-language"));
const projectViewer = document.querySelector(".project-image-viewer");
const projectViewerImage = document.querySelector(".project-viewer-image");
const projectViewerGallery = document.querySelector(".project-viewer-gallery");
const projectViewerCopy = document.querySelector(".project-viewer-copy");
const projectViewerClose = document.querySelector("[data-project-viewer-close]");
const projectViewerZoomOut = document.querySelector("[data-project-viewer-zoom-out]");
const projectViewerZoomReset = document.querySelector("[data-project-viewer-zoom-reset]");
const projectViewerZoomIn = document.querySelector("[data-project-viewer-zoom-in]");
const projectImageButtons = Array.from(document.querySelectorAll("[data-project-full-image], [data-project-gallery], [data-project-lookbook]"));
const projectIndexTabs = Array.from(document.querySelectorAll("[data-project-index-tab]"));
const projectIndexStack = document.querySelector("[data-project-index-stack]");
const projectIndexImages = Array.from(document.querySelectorAll("[data-project-index-image]"));
const projectIndexGallery = document.querySelector("[data-project-index-gallery]");
const projectPanelTabs = Array.from(document.querySelectorAll("[data-project-panel-tab]"));
const projectPanelImage = document.querySelector("[data-project-panel-image]");
const projectPanelNumber = document.querySelector("[data-project-panel-number]");
const projectPanelTitle = document.querySelector("[data-project-panel-title]");
const projectPanelSubtitle = document.querySelector("[data-project-panel-subtitle]");
const projectPanelDescription = document.querySelector("[data-project-panel-description]");
const projectExhibitionItems = Array.from(document.querySelectorAll("[data-project-exhibit]"));
const wearableTrigger = document.querySelector("[data-project-wearable-trigger]");
const lookbookArchive = document.querySelector("[data-project-lookbook-archive]");
const lookbookBack = document.querySelector("[data-project-lookbook-back]");
const lookbookStack = document.querySelector("[data-project-lookbook-stack]");
const objectsTrigger = document.querySelector("[data-project-objects-trigger]");
const objectsArchive = document.querySelector("[data-project-objects-archive]");
const objectsBack = document.querySelector("[data-project-objects-back]");
const tableTrigger = document.querySelector("[data-project-table-trigger]");
const tableArchive = document.querySelector("[data-project-table-archive]");
const tableBack = document.querySelector("[data-project-table-back]");
const studioArchive = document.querySelector("[data-project-studio-archive]");
const studioTrigger = document.querySelector("[data-project-studio-trigger]");
const studioBack = document.querySelector("[data-project-studio-back]");
const studioProductCarousel = document.querySelector("[data-project-product-carousel]");
const studioProductTrack = document.querySelector("[data-project-product-track]");
const studioProductSlides = Array.from(document.querySelectorAll("[data-project-product-slide]"));
const studioProductNext = document.querySelector("[data-project-product-next]");
const videoArchiveTrigger = document.querySelector("[data-project-video-archive-trigger]");
const videoArchive = document.querySelector("[data-project-video-archive]");
const videoArchiveBack = document.querySelector("[data-project-video-archive-back]");
const videoArchivePreviews = Array.from(document.querySelectorAll(".project-video-archive-grid video"));
const videoOpenTriggers = Array.from(document.querySelectorAll("[data-project-video-open]"));
const videoViewer = document.querySelector("[data-project-video-viewer]");
const videoViewerPlayer = document.querySelector("[data-project-video-player]");
const videoViewerClose = document.querySelector("[data-project-video-close]");
const mobileVideoPlayback = window.matchMedia("(max-width: 767px)");
const spatialTrigger = document.querySelector("[data-project-spatial-trigger]");
const spatialArchive = document.querySelector("[data-project-spatial-archive]");
const graphicTrigger = document.querySelector("[data-project-graphic-trigger]");
const graphicArchive = document.querySelector("[data-project-graphic-archive]");
const exhibitionGrid = document.querySelector(".project-exhibition-grid");
const lookbookTransitionDuration = 820;
const lookbookStackDuration = 280;
let studioProductIndex = 0;
let studioProductPointerStartX = null;
let memberLineTimer = 0;
let memberDetailDragStartX = null;
let memberDetailDragging = false;
let projectViewerDragStartX = null;
let projectViewerDragging = false;
let projectViewerZoomLevel = 1;
let activeMemberLanguage = "cn";
let videoArchivePreviewObserver = null;
const mobileAbout = window.matchMedia("(max-width: 991px)");

window.setTimeout(() => {
  pageLoader.classList.add("is-gone");
  document.body.classList.add("is-ready");
}, 420);

window.setTimeout(() => pageLoader.remove(), 1000);

document.querySelectorAll("a[href$='.html']").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    pageTransition.classList.add("is-active");
    window.setTimeout(() => {
      window.location.href = link.href;
    }, 360);
  });
});

projectCategoryToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const section = toggle.closest(".project-brand-section");
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!section || !panel) return;

    const isOpen = section.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.setAttribute("aria-hidden", String(!isOpen));
  });
});

function setProjectIndex(tab) {
  if (!projectIndexStack) return;
  const images = (tab.dataset.images || "").split(",").map((image) => image.trim()).filter(Boolean);

  projectIndexTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });

  projectIndexStack.classList.add("is-changing");
  window.setTimeout(() => {
    projectIndexImages.forEach((image, index) => {
      image.src = images[index] || images[0] || "";
      image.alt = index === 0 ? `${tab.dataset.title || "Project"} project folder` : "";
    });
    if (projectIndexGallery) {
      projectIndexGallery.innerHTML = images.map((image, index) => `<figure><img src="${image}" alt="${tab.dataset.title || "Project"} work ${index + 1}" loading="lazy"></figure>`).join("");
      projectIndexGallery.hidden = true;
    }
    projectIndexStack.setAttribute("aria-label", `Open ${tab.dataset.title || "project"} folder`);
    projectIndexStack.setAttribute("aria-expanded", "false");
    projectIndexStack.classList.remove("is-open", "is-changing");
  }, 120);
}

projectIndexTabs.forEach((tab) => tab.addEventListener("click", () => setProjectIndex(tab)));

projectIndexStack?.addEventListener("click", () => {
  if (!projectIndexGallery) return;
  const isOpen = projectIndexStack.classList.toggle("is-open");
  projectIndexStack.setAttribute("aria-expanded", String(isOpen));
  projectIndexGallery.hidden = !isOpen;
});

if (projectIndexTabs.length) {
  setProjectIndex(projectIndexTabs.find((tab) => tab.classList.contains("is-active")) || projectIndexTabs[0]);
}

function setProjectPanel(tab) {
  projectPanelTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });
  if (projectPanelImage) {
    projectPanelImage.src = tab.dataset.image || "";
    projectPanelImage.alt = `${tab.dataset.title || "Project"} project visual`;
  }
  if (projectPanelNumber) projectPanelNumber.textContent = tab.dataset.number || "";
  if (projectPanelTitle) projectPanelTitle.textContent = tab.dataset.title || "";
  if (projectPanelSubtitle) projectPanelSubtitle.textContent = tab.dataset.subtitle || "";
  if (projectPanelDescription) projectPanelDescription.textContent = tab.dataset.description || "";
  projectExhibitionItems.forEach((item) => item.classList.toggle("is-active", item.dataset.projectExhibit === tab.dataset.number));
}

projectPanelTabs.forEach((tab) => tab.addEventListener("click", () => {
  setProjectPanel(tab);
  if (tab !== spatialTrigger && spatialArchive?.classList.contains("is-open")) {
    setSpatialArchive(false);
  }
  if (tab !== graphicTrigger && graphicArchive?.classList.contains("is-open")) {
    setGraphicArchive(false);
  }
}));

projectExhibitionItems.forEach((item) => {
  item.addEventListener("pointerenter", () => item.classList.add("is-swap"));
  item.addEventListener("pointerleave", () => item.classList.remove("is-swap"));
  item.addEventListener("focusin", () => item.classList.add("is-swap"));
  item.addEventListener("focusout", () => item.classList.remove("is-swap"));
  item.addEventListener("pointerdown", () => item.classList.add("is-swap"));
});

function setLookbookArchive(open) {
  if (!lookbookArchive || !exhibitionGrid) return;
  if (open) {
    lookbookArchive.classList.remove("is-expanded", "is-expanding");
    lookbookArchive.hidden = false;
    lookbookArchive.setAttribute("aria-hidden", "false");
    exhibitionGrid.classList.add("is-leaving");
    void lookbookArchive.offsetWidth;
    window.requestAnimationFrame(() => lookbookArchive.classList.add("is-open"));
    window.setTimeout(() => {
      exhibitionGrid.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  exhibitionGrid.hidden = false;
  exhibitionGrid.classList.add("is-leaving");
  void exhibitionGrid.offsetWidth;
  window.requestAnimationFrame(() => exhibitionGrid.classList.remove("is-leaving"));
  lookbookArchive.classList.remove("is-open");
  lookbookArchive.classList.remove("is-expanded", "is-expanding");
  window.setTimeout(() => {
    lookbookArchive.hidden = true;
    lookbookArchive.setAttribute("aria-hidden", "true");
  }, lookbookTransitionDuration);
}

function setObjectsArchive(open) {
  if (!objectsArchive || !exhibitionGrid) return;
  if (open) {
    objectsArchive.classList.remove("is-expanded", "is-expanding");
    objectsArchive.hidden = false;
    objectsArchive.setAttribute("aria-hidden", "false");
    exhibitionGrid.classList.add("is-leaving");
    void objectsArchive.offsetWidth;
    window.requestAnimationFrame(() => objectsArchive.classList.add("is-open"));
    window.setTimeout(() => {
      exhibitionGrid.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  exhibitionGrid.hidden = false;
  exhibitionGrid.classList.add("is-leaving");
  void exhibitionGrid.offsetWidth;
  window.requestAnimationFrame(() => exhibitionGrid.classList.remove("is-leaving"));
  objectsArchive.classList.remove("is-open", "is-expanded", "is-expanding");
  window.setTimeout(() => {
    objectsArchive.hidden = true;
    objectsArchive.setAttribute("aria-hidden", "true");
  }, lookbookTransitionDuration);
}

function setTableArchive(open) {
  if (!tableArchive || !exhibitionGrid) return;
  if (open) {
    tableArchive.classList.remove("is-expanded", "is-expanding");
    tableArchive.hidden = false;
    tableArchive.setAttribute("aria-hidden", "false");
    exhibitionGrid.classList.add("is-leaving");
    void tableArchive.offsetWidth;
    window.requestAnimationFrame(() => tableArchive.classList.add("is-open"));
    window.setTimeout(() => {
      exhibitionGrid.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  exhibitionGrid.hidden = false;
  exhibitionGrid.classList.add("is-leaving");
  void exhibitionGrid.offsetWidth;
  window.requestAnimationFrame(() => exhibitionGrid.classList.remove("is-leaving"));
  tableArchive.classList.remove("is-open", "is-expanded", "is-expanding");
  window.setTimeout(() => {
    tableArchive.hidden = true;
    tableArchive.setAttribute("aria-hidden", "true");
  }, lookbookTransitionDuration);
}

function setStudioArchive(open) {
  if (!studioArchive || !lookbookArchive) return;

  if (open) {
    studioArchive.hidden = false;
    studioArchive.setAttribute("aria-hidden", "false");
    lookbookArchive.classList.add("is-leaving");
    void studioArchive.offsetWidth;
    window.requestAnimationFrame(() => studioArchive.classList.add("is-open"));
    window.setTimeout(() => {
      lookbookArchive.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  lookbookArchive.hidden = false;
  lookbookArchive.classList.add("is-leaving");
  void lookbookArchive.offsetWidth;
  window.requestAnimationFrame(() => lookbookArchive.classList.remove("is-leaving"));
  studioArchive.classList.remove("is-open");
  window.setTimeout(() => {
    studioArchive.hidden = true;
    studioArchive.setAttribute("aria-hidden", "true");
  }, lookbookTransitionDuration);
}

function prepareVideoPreview(video) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
}

function stopVideoArchivePreviews() {
  videoArchivePreviewObserver?.disconnect();
  videoArchivePreviewObserver = null;
  videoArchivePreviews.forEach((video) => video.pause());
}

function startVideoArchivePreviews() {
  stopVideoArchivePreviews();
  videoArchivePreviews.forEach(prepareVideoPreview);

  if (!mobileVideoPlayback.matches) {
    videoArchivePreviews.forEach((video) => video.play().catch(() => {}));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    videoArchivePreviews[0]?.play().catch(() => {});
    return;
  }

  videoArchivePreviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55 && !document.hidden) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: [0, 0.55] });
  videoArchivePreviews.forEach((video) => videoArchivePreviewObserver.observe(video));
}

function setVideoArchive(open) {
  if (!videoArchive || !exhibitionGrid) return;

  if (open) {
    videoArchive.hidden = false;
    videoArchive.setAttribute("aria-hidden", "false");
    exhibitionGrid.classList.add("is-leaving");
    void videoArchive.offsetWidth;
    window.requestAnimationFrame(() => videoArchive.classList.add("is-open"));
    startVideoArchivePreviews();
    window.setTimeout(() => {
      exhibitionGrid.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  exhibitionGrid.hidden = false;
  exhibitionGrid.classList.add("is-leaving");
  void exhibitionGrid.offsetWidth;
  window.requestAnimationFrame(() => exhibitionGrid.classList.remove("is-leaving"));
  videoArchive.classList.remove("is-open");
  window.setTimeout(() => {
    videoArchive.hidden = true;
    videoArchive.setAttribute("aria-hidden", "true");
    stopVideoArchivePreviews();
  }, lookbookTransitionDuration);
}

function setSpatialArchive(open) {
  if (!spatialArchive || !exhibitionGrid) return;

  if (open) {
    spatialArchive.hidden = false;
    spatialArchive.setAttribute("aria-hidden", "false");
    exhibitionGrid.classList.add("is-leaving");
    void spatialArchive.offsetWidth;
    window.requestAnimationFrame(() => spatialArchive.classList.add("is-open"));
    window.setTimeout(() => {
      exhibitionGrid.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  exhibitionGrid.hidden = false;
  exhibitionGrid.classList.add("is-leaving");
  void exhibitionGrid.offsetWidth;
  window.requestAnimationFrame(() => exhibitionGrid.classList.remove("is-leaving"));
  spatialArchive.classList.remove("is-open");
  window.setTimeout(() => {
    spatialArchive.hidden = true;
    spatialArchive.setAttribute("aria-hidden", "true");
  }, lookbookTransitionDuration);
}

function setGraphicArchive(open) {
  if (!graphicArchive || !exhibitionGrid) return;

  if (open) {
    graphicArchive.hidden = false;
    graphicArchive.setAttribute("aria-hidden", "false");
    exhibitionGrid.classList.add("is-leaving");
    void graphicArchive.offsetWidth;
    window.requestAnimationFrame(() => graphicArchive.classList.add("is-open"));
    window.setTimeout(() => {
      exhibitionGrid.hidden = true;
    }, lookbookTransitionDuration);
    return;
  }

  exhibitionGrid.hidden = false;
  exhibitionGrid.classList.add("is-leaving");
  void exhibitionGrid.offsetWidth;
  window.requestAnimationFrame(() => exhibitionGrid.classList.remove("is-leaving"));
  graphicArchive.classList.remove("is-open");
  window.setTimeout(() => {
    graphicArchive.hidden = true;
    graphicArchive.setAttribute("aria-hidden", "true");
  }, lookbookTransitionDuration);
}

function closeVideoViewer() {
  if (!videoViewer || !videoViewerPlayer) return;
  videoViewerPlayer.pause();
  videoViewerPlayer.removeAttribute("src");
  videoViewerPlayer.load();
  videoViewer.classList.remove("is-visible");
  videoViewer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-video-viewer-open");
}

function openVideoViewer(src) {
  if (!videoViewer || !videoViewerPlayer || !src) return;
  videoViewerPlayer.src = src;
  videoViewerPlayer.muted = false;
  videoViewerPlayer.volume = 0.78;
  videoViewerPlayer.load();
  videoViewer.classList.add("is-visible");
  videoViewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-video-viewer-open");
  videoViewerPlayer.play().catch(() => {});
}

function setStudioProduct(nextIndex) {
  if (!studioProductTrack || !studioProductSlides.length) return;
  studioProductIndex = (nextIndex + studioProductSlides.length) % studioProductSlides.length;
  studioProductTrack.style.transform = `translateX(-${studioProductIndex * 100}%)`;
  studioProductSlides.forEach((slide, index) => {
    slide.setAttribute("aria-hidden", String(index !== studioProductIndex));
  });
}

wearableTrigger?.addEventListener("click", () => setLookbookArchive(true));
lookbookBack?.addEventListener("click", () => setLookbookArchive(false));
objectsTrigger?.addEventListener("click", () => setObjectsArchive(true));
objectsBack?.addEventListener("click", () => setObjectsArchive(false));
tableTrigger?.addEventListener("click", () => setTableArchive(true));
tableBack?.addEventListener("click", () => setTableArchive(false));
studioTrigger?.addEventListener("click", () => setStudioArchive(true));
studioBack?.addEventListener("click", () => setStudioArchive(false));
videoArchiveTrigger?.addEventListener("click", () => setVideoArchive(true));
videoArchiveBack?.addEventListener("click", () => setVideoArchive(false));
spatialTrigger?.addEventListener("click", () => setSpatialArchive(true));
graphicTrigger?.addEventListener("click", () => setGraphicArchive(true));
videoOpenTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openVideoViewer(trigger.dataset.projectVideoSrc));
});
videoViewerClose?.addEventListener("click", closeVideoViewer);
studioProductNext?.addEventListener("click", () => setStudioProduct(studioProductIndex + 1));
studioProductCarousel?.addEventListener("pointerdown", (event) => {
  studioProductPointerStartX = event.clientX;
});
studioProductCarousel?.addEventListener("pointerup", (event) => {
  if (studioProductPointerStartX === null) return;
  const swipeDistance = event.clientX - studioProductPointerStartX;
  studioProductPointerStartX = null;
  if (swipeDistance < -48) setStudioProduct(studioProductIndex + 1);
  if (swipeDistance > 48) setStudioProduct(studioProductIndex - 1);
});
studioProductCarousel?.addEventListener("pointercancel", () => {
  studioProductPointerStartX = null;
});
lookbookStack?.addEventListener("click", () => {
  if (!lookbookArchive || lookbookArchive.classList.contains("is-expanding")) return;
  lookbookArchive.classList.add("is-expanding");
  window.setTimeout(() => {
    lookbookArchive.classList.remove("is-expanding");
    lookbookArchive.classList.add("is-expanded");
  }, lookbookStackDuration);
});

const modelParams = new URLSearchParams(window.location.search);
let activeModelFilter = modelParams.get("category") || "all";
let activeFaceFilter = modelParams.get("face") || "all";

const modelLabels = {
  male: { en: "Male", cn: "男性" },
  female: { en: "Female", cn: "女性" },
  "east-asian": { en: "East Asian", cn: "东亚面孔" },
  european: { en: "European", cn: "欧洲面孔" },
  african: { en: "African", cn: "非洲面孔" }
};

function renderModelBook() {
  if (!modelGrid || !modelData.length) return;

  const modelsByName = [...modelData].sort((first, second) =>
    first.name.localeCompare(second.name, "en", { sensitivity: "base" })
  );

  modelGrid.innerHTML = modelsByName
    .map((model) => `
      <a class="model-card" href="model.html?id=${encodeURIComponent(model.id)}" data-category="${model.category}" data-face="${model.face}" aria-label="View ${model.name}">
        <span class="model-card-image model-card-image--${model.coverPosition || "center"}">
          <img src="${model.cover || model.images[0]}" alt="${model.name} headshot" loading="lazy">
        </span>
        <h2>${model.name}</h2>
        <p class="bilingual" data-cn="${modelLabels[model.face].cn}">${modelLabels[model.face].en}</p>
      </a>
    `)
    .join("");

  modelCards = Array.from(modelGrid.querySelectorAll(".model-card"));
}

function updateModelBookFilters() {
  const showFaceFilters = activeModelFilter !== "all";
  if (modelSubfilters) modelSubfilters.hidden = !showFaceFilters;

  let visibleCount = 0;
  modelCards.forEach((card) => {
    const modelMatch = activeModelFilter === "all" || card.dataset.category === activeModelFilter;
    const faceMatch = !showFaceFilters || activeFaceFilter === "all" || card.dataset.face === activeFaceFilter;
    const visible = modelMatch && faceMatch;
    card.classList.toggle("is-hidden", !visible);
    if (visible) visibleCount += 1;
  });

  if (modelEmpty) modelEmpty.hidden = visibleCount !== 0;
}

renderModelBook();
modelFilterButtons.forEach((button) => {
  button.classList.toggle("is-active", button.dataset.modelFilter === activeModelFilter);
});
faceFilterButtons.forEach((button) => {
  button.classList.toggle("is-active", activeModelFilter !== "all" && button.dataset.faceFilter === activeFaceFilter);
});
updateModelBookFilters();

modelFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeModelFilter = button.dataset.modelFilter;
    activeFaceFilter = "all";
    modelFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    faceFilterButtons.forEach((item) => item.classList.remove("is-active"));
    updateModelBookFilters();
  });
});

faceFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFaceFilter = button.dataset.faceFilter;
    faceFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    updateModelBookFilters();
  });
});

const closePreview = () => {
  if (!previewPanel) return;
  previewPanel.classList.remove("is-visible");
  previewPanel.setAttribute("aria-hidden", "true");
};

const closeProjectViewer = () => {
  if (!projectViewer) return;
  projectViewer.classList.remove("is-visible", "has-gallery", "is-lookbook-viewer");
  projectViewer.setAttribute("aria-hidden", "true");
  if (projectViewerGallery) {
    projectViewerGallery.innerHTML = "";
    projectViewerGallery.classList.remove("is-lookbook-gallery");
    projectViewerGallery.style.removeProperty("--project-viewer-zoom");
  }
  projectViewerZoomLevel = 1;
  if (projectViewerZoomReset) projectViewerZoomReset.textContent = "100%";
  if (projectViewerCopy) {
    projectViewerCopy.setAttribute("aria-hidden", "true");
    projectViewerCopy.querySelector("h2").textContent = "";
    projectViewerCopy.querySelector("p").textContent = "";
  }
  document.body.classList.remove("is-project-viewer-open");
};

const setProjectViewerZoom = (nextZoom) => {
  if (!projectViewerGallery) return;
  projectViewerZoomLevel = Math.min(1.45, Math.max(0.85, nextZoom));
  projectViewerGallery.style.setProperty("--project-viewer-zoom", String(projectViewerZoomLevel));
  if (projectViewerZoomReset) {
    projectViewerZoomReset.textContent = `${Math.round(projectViewerZoomLevel * 100)}%`;
  }
};

previewTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!previewPanel) return;
    previewImage.src = trigger.dataset.previewImage;
    previewImage.alt = trigger.dataset.previewTitle;
    previewTitle.textContent = trigger.dataset.previewTitle;
    previewMeta.textContent = trigger.dataset.previewMeta;
    previewPanel.classList.add("is-visible");
    previewPanel.setAttribute("aria-hidden", "false");
  });
});

if (previewClose) {
  previewClose.addEventListener("click", closePreview);
}

projectImageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!projectViewer || !projectViewerImage) return;
    const image = button.querySelector("img");
    const isLookbook = Boolean(button.dataset.projectLookbook);
    const gallerySource = button.dataset.projectLookbook || button.dataset.projectGallery;
    const galleryImages = gallerySource
      ? gallerySource.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    projectViewer.classList.toggle("has-gallery", galleryImages.length > 1);
    projectViewer.classList.toggle("is-lookbook-viewer", isLookbook);
    if (projectViewerGallery) {
      projectViewerGallery.classList.toggle("is-lookbook-gallery", isLookbook);
    }
    setProjectViewerZoom(1);

    if (galleryImages.length > 1 && projectViewerGallery && projectViewerCopy) {
      projectViewerGallery.innerHTML = galleryImages
        .map((src, index) => `<img src="${src}" alt="${button.dataset.projectTitle || "Project"} ${index + 1}">`)
        .join("");
      projectViewerImage.removeAttribute("src");
      projectViewerImage.alt = "";
      projectViewerCopy.querySelector("h2").textContent = button.dataset.projectTitle || "";
      projectViewerCopy.querySelector("p").textContent = button.dataset.projectSubtitle || "";
      projectViewerCopy.setAttribute("aria-hidden", "false");
    } else {
      if (projectViewerGallery) projectViewerGallery.innerHTML = "";
      if (projectViewerCopy) projectViewerCopy.setAttribute("aria-hidden", "true");
      projectViewerImage.src = button.dataset.projectFullImage;
      projectViewerImage.alt = image ? image.alt : "Project image";
    }

    projectViewer.classList.add("is-visible");
    projectViewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-project-viewer-open");
  });
});

if (projectViewerClose) {
  projectViewerClose.addEventListener("click", closeProjectViewer);
}

if (projectViewerZoomOut) {
  projectViewerZoomOut.addEventListener("click", () => setProjectViewerZoom(projectViewerZoomLevel - 0.15));
}

if (projectViewerZoomIn) {
  projectViewerZoomIn.addEventListener("click", () => setProjectViewerZoom(projectViewerZoomLevel + 0.15));
}

if (projectViewerZoomReset) {
  projectViewerZoomReset.addEventListener("click", () => setProjectViewerZoom(1));
}

if (projectViewer) {
  projectViewer.addEventListener("pointerdown", (event) => {
    if (!mobileAbout.matches || event.target.closest(".project-viewer-back, .project-viewer-zoom")) return;
    projectViewerDragStartX = event.clientX;
    projectViewerDragging = true;
    projectViewer.setPointerCapture?.(event.pointerId);
    projectViewer.classList.add("is-dragging");
  });

  projectViewer.addEventListener("pointermove", (event) => {
    if (!mobileAbout.matches || !projectViewerDragging || projectViewerDragStartX === null) return;
    const movedX = Math.max(0, event.clientX - projectViewerDragStartX);
    projectViewer.style.setProperty("--viewer-drag-x", `${movedX}px`);
  });

  projectViewer.addEventListener("pointerup", (event) => {
    if (!mobileAbout.matches || projectViewerDragStartX === null) return;
    const movedX = event.clientX - projectViewerDragStartX;
    projectViewerDragStartX = null;
    projectViewerDragging = false;
    projectViewer.classList.remove("is-dragging");
    projectViewer.style.setProperty("--viewer-drag-x", "0px");
    if (movedX > 70) closeProjectViewer();
  });

  projectViewer.addEventListener("pointercancel", () => {
    projectViewerDragStartX = null;
    projectViewerDragging = false;
    projectViewer.classList.remove("is-dragging");
    projectViewer.style.setProperty("--viewer-drag-x", "0px");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePreview();
  if (event.key === "Escape") closeProjectViewer();
  if (event.key === "Escape") closeMemberDetail();
});

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterForm.reset();
    formNote.textContent = "Thank you. We will keep you close to the culture.";
  });
}

if (languageToggle && aboutCopyCn && aboutCopyEn) {
  languageToggle.addEventListener("click", () => {
    const showEnglish = aboutCopyEn.hidden;
    aboutCopyEn.hidden = !showEnglish;
    aboutCopyCn.hidden = showEnglish;
    languageToggle.textContent = showEnglish ? "中文" : "English";
    languageToggle.setAttribute("aria-pressed", String(showEnglish));
  });
}


function syncMemberLanguage() {
  memberLanguageBlocks.forEach((block) => {
    const showBlock = block.classList.contains(`member-language-${activeMemberLanguage}`);
    block.hidden = !showBlock;
  });
  if (memberLanguageToggle) {
    const showEnglish = activeMemberLanguage === "en";
    memberLanguageToggle.textContent = showEnglish ? "中文" : "English";
    memberLanguageToggle.setAttribute("aria-pressed", String(showEnglish));
  }
}

if (memberLanguageToggle) {
  memberLanguageToggle.addEventListener("click", () => {
    activeMemberLanguage = activeMemberLanguage === "cn" ? "en" : "cn";
    syncMemberLanguage();
  });
  syncMemberLanguage();
}

function setActiveMember(member) {
  memberPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.memberPanel === member);
  });
}

function switchMobileMember(member) {
  if (!aboutStage || !memberDetail || !mobileAbout.matches || !aboutStage.classList.contains("is-member-open")) {
    setActiveMember(member);
    return;
  }

  aboutStage.classList.add("is-member-switching");
  window.setTimeout(() => {
    setActiveMember(member);
    aboutStage.classList.remove("is-member-switching");
  }, 220);
}

function closeMemberDetail() {
  if (!aboutStage || !memberDetail) return;
  window.clearTimeout(memberLineTimer);
  aboutStage.classList.remove("is-member-open");
  memberDetail.setAttribute("aria-hidden", "true");
  memberTriggers.forEach((trigger) => {
    trigger.classList.remove("is-active", "is-lining");
    trigger.setAttribute("aria-expanded", "false");
  });
}

memberTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!aboutStage || !memberDetail) return;
    const member = trigger.dataset.memberTrigger;
    window.clearTimeout(memberLineTimer);

    memberTriggers.forEach((item) => {
      item.classList.remove("is-active", "is-lining");
      item.setAttribute("aria-expanded", "false");
    });

    switchMobileMember(member);
    trigger.classList.add("is-lining");

    memberLineTimer = window.setTimeout(() => {
      aboutStage.classList.add("is-member-open");
      memberDetail.setAttribute("aria-hidden", "false");
      trigger.classList.remove("is-lining");
      trigger.classList.add("is-active");
      trigger.setAttribute("aria-expanded", "true");
    }, 280);
  });
});

if (memberBack) {
  memberBack.addEventListener("click", closeMemberDetail);
}

if (memberDetail) {
  memberDetail.addEventListener("pointerdown", (event) => {
    if (!mobileAbout.matches) return;
    memberDetailDragStartX = event.clientX;
    memberDetailDragging = true;
    memberDetail.setPointerCapture?.(event.pointerId);
    memberDetail.classList.add("is-dragging");
  });

  memberDetail.addEventListener("pointermove", (event) => {
    if (!mobileAbout.matches || !memberDetailDragging || memberDetailDragStartX === null) return;
    const movedX = Math.max(0, event.clientX - memberDetailDragStartX);
    memberDetail.style.setProperty("--panel-drag-x", `${movedX}px`);
  });

  memberDetail.addEventListener("pointerup", (event) => {
    if (!mobileAbout.matches || memberDetailDragStartX === null) return;
    const movedX = event.clientX - memberDetailDragStartX;
    memberDetailDragStartX = null;
    memberDetailDragging = false;
    memberDetail.classList.remove("is-dragging");
    memberDetail.style.setProperty("--panel-drag-x", "0px");
    if (movedX > 60) closeMemberDetail();
  });

  memberDetail.addEventListener("pointercancel", () => {
    memberDetailDragStartX = null;
    memberDetailDragging = false;
    memberDetail.classList.remove("is-dragging");
    memberDetail.style.setProperty("--panel-drag-x", "0px");
  });
}
