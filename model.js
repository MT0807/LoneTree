const modelPageLoader = document.querySelector(".loader");
const modelPageTransition = document.querySelector(".transition-overlay");
const modelDetail = document.querySelector("[data-model-detail]");
const modelName = document.querySelector("[data-model-detail-name]");
const modelMeta = document.querySelector("[data-model-detail-meta]");
const modelGallery = document.querySelector("[data-model-detail-gallery]");
const models = window.LONETREE_MODELS || [];
const modelId = new URLSearchParams(window.location.search).get("id");
const selectedModel = models.find((model) => model.id === modelId) || models[0];

const modelLabels = {
  male: { en: "Male", cn: "男性" },
  female: { en: "Female", cn: "女性" },
  "east-asian": { en: "East Asian", cn: "东亚面孔" },
  european: { en: "European", cn: "欧洲面孔" },
  african: { en: "African", cn: "非洲面孔" }
};

if (selectedModel && modelDetail && modelName && modelMeta && modelGallery) {
  document.title = `${selectedModel.name} | LoneTree Modle BOOK`;
  modelName.textContent = selectedModel.name;
  const genderHref = `insights.html?category=${encodeURIComponent(selectedModel.category)}`;
  const faceHref = `${genderHref}&face=${encodeURIComponent(selectedModel.face)}`;
  modelMeta.innerHTML = `
    <a class="model-meta-link" href="${genderHref}">${modelLabels[selectedModel.category].en} / ${modelLabels[selectedModel.category].cn}</a>
    <span aria-hidden="true">·</span>
    <a class="model-meta-link" href="${faceHref}">${modelLabels[selectedModel.face].en} / ${modelLabels[selectedModel.face].cn}</a>
  `;
  const galleryImages = selectedModel.cover
    ? [selectedModel.cover, ...selectedModel.images]
    : selectedModel.images;

  const renderImage = (image, index, className = "") => `
    <figure class="model-detail-image ${className}">
      <img src="${image}" alt="${selectedModel.name} ${index + 1}" ${index === 0 ? "" : "loading=\"lazy\""}>
    </figure>
  `;

  const [coverImage, ...supportingImages] = galleryImages;
  modelGallery.innerHTML = `
    ${renderImage(coverImage, 0, "is-cover")}
    ${supportingImages.length ? `
      <div class="model-detail-secondary">
        ${supportingImages.map((image, index) => renderImage(image, index + 1)).join("")}
      </div>
    ` : ""}
  `;
}

window.setTimeout(() => {
  modelPageLoader.classList.add("is-gone");
  document.body.classList.add("is-ready");
}, 420);

window.setTimeout(() => modelPageLoader.remove(), 1000);

document.querySelectorAll("a[href$='.html']").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.target || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    modelPageTransition.classList.add("is-active");
    window.setTimeout(() => {
      window.location.href = link.href;
    }, 360);
  });
});
