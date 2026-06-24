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
let memberLineTimer = 0;

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

let activeModelFilter = "all";
let activeFaceFilter = "all";

const modelLabels = {
  male: { en: "Male", cn: "男性" },
  female: { en: "Female", cn: "女性" },
  "east-asian": { en: "East Asian", cn: "东亚面孔" },
  european: { en: "European", cn: "欧洲面孔" },
  african: { en: "African", cn: "非洲面孔" }
};

function renderModelBook() {
  if (!modelGrid || !modelData.length) return;

  modelGrid.innerHTML = modelData
    .map((model) => `
      <a class="model-card" href="model.html?id=${encodeURIComponent(model.id)}" data-category="${model.category}" data-face="${model.face}" aria-label="View ${model.name}">
        <span class="model-card-image model-card-image--${model.coverPosition || "center"}">
          <img src="${model.images[0]}" alt="${model.name} headshot" loading="lazy">
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
updateModelBookFilters();

modelFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeModelFilter = button.dataset.modelFilter;
    activeFaceFilter = "all";
    modelFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    faceFilterButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.faceFilter === "all"));
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

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePreview();
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

function setActiveMember(member) {
  memberPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.memberPanel === member);
  });
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

    setActiveMember(member);
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
