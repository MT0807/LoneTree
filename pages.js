const pageLoader = document.querySelector(".loader");
const pageTransition = document.querySelector(".transition-overlay");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const filterItems = Array.from(document.querySelectorAll("[data-category]"));
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
const projectImageButtons = Array.from(document.querySelectorAll("[data-project-full-image], [data-project-gallery]"));
let memberLineTimer = 0;
let memberDetailDragStartX = null;
let memberDetailDragging = false;
let projectViewerDragStartX = null;
let projectViewerDragging = false;
let activeMemberLanguage = "cn";
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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    filterItems.forEach((item) => {
      const visible = value === "all" || item.dataset.category === value;
      item.classList.toggle("is-hidden", !visible);
    });
  });
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
  projectViewer.classList.remove("is-visible", "has-gallery");
  projectViewer.setAttribute("aria-hidden", "true");
  if (projectViewerGallery) projectViewerGallery.innerHTML = "";
  if (projectViewerCopy) {
    projectViewerCopy.setAttribute("aria-hidden", "true");
    projectViewerCopy.querySelector("h2").textContent = "";
    projectViewerCopy.querySelector("p").textContent = "";
  }
  document.body.classList.remove("is-project-viewer-open");
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
    const galleryImages = button.dataset.projectGallery
      ? button.dataset.projectGallery.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    projectViewer.classList.toggle("has-gallery", galleryImages.length > 1);

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

if (projectViewer) {
  projectViewer.addEventListener("pointerdown", (event) => {
    if (!mobileAbout.matches || event.target.closest(".project-viewer-back")) return;
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
