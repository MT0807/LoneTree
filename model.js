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
  male: "Male / 男性",
  female: "Female / 女性",
  "east-asian": "East Asian / 东亚面孔",
  european: "European / 欧洲面孔",
  african: "African / 非洲面孔"
};

if (selectedModel && modelDetail && modelName && modelMeta && modelGallery) {
  document.title = `${selectedModel.name} | LoneTree Modle BOOK`;
  modelName.textContent = selectedModel.name;
  modelMeta.textContent = `${modelLabels[selectedModel.category]}  ·  ${modelLabels[selectedModel.face]}`;
  modelGallery.innerHTML = selectedModel.images
    .map((image, index) => `
      <figure class="model-detail-image ${index === 0 ? "is-cover" : ""}">
        <img src="${image}" alt="${selectedModel.name} ${index + 1}" ${index === 0 ? "" : "loading=\"lazy\""}>
      </figure>
    `)
    .join("");
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
