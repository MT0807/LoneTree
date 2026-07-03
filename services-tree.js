const serviceTreeStage = document.querySelector("[data-service-tree]");

if (serviceTreeStage) {
  const colorTree = serviceTreeStage.querySelector(".service-tree-image-color");
  const languageToggle = serviceTreeStage.querySelector("[data-service-language-toggle]");
  const markers = Array.from(serviceTreeStage.querySelectorAll("[data-service-marker]"));
  const details = Array.from(serviceTreeStage.querySelectorAll("[data-service-detail]"));
  const revealMin = 0;
  const revealMax = 150;
  let activeService = "trunk";
  let activeLanguage = "cn";
  let detailDragStartX = null;
  const mobileServices = window.matchMedia("(max-width: 991px)");

  function getServiceFromPoint(xRatio, yRatio) {
    if (yRatio < 0.43 && xRatio > 0.18 && xRatio < 0.82) return "leaves";
    if (xRatio < 0.36 || xRatio > 0.64 || yRatio < 0.67) return "branches";
    return "trunk";
  }

  function syncLanguage(detail) {
    const cn = detail.querySelector(".service-tree-language-cn");
    const en = detail.querySelector(".service-tree-language-en");
    if (!cn || !en) return;
    cn.hidden = activeLanguage !== "cn";
    en.hidden = activeLanguage !== "en";
  }

  function openMobileDetail() {
    serviceTreeStage.classList.add("has-service-focus", "is-mobile-detail-open");
  }

  function closeMobileDetail() {
    serviceTreeStage.classList.remove("is-mobile-detail-open");
  }

  function setActiveService(service, revealLabels = false) {
    activeService = service;
    if (revealLabels) serviceTreeStage.classList.add("has-service-focus");

    markers.forEach((marker) => {
      marker.classList.toggle("is-active", marker.dataset.serviceMarker === service);
    });

    details.forEach((detail) => {
      const isActive = detail.dataset.serviceDetail === service;
      detail.hidden = !isActive;
      detail.classList.toggle("is-active", isActive);
      if (isActive) syncLanguage(detail);
    });
  }

  function setReveal(event) {
    if (event.target.closest(".service-tree-detail, .service-tree-marker")) return;

    const rect = serviceTreeStage.getBoundingClientRect();
    const imageRect = colorTree.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const imageX = event.clientX - imageRect.left;
    const imageY = event.clientY - imageRect.top;
    const centerX = imageRect.left + imageRect.width / 2;
    const centerY = imageRect.top + imageRect.height / 2;
    const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
    const activeDistance = Math.min(imageRect.width, imageRect.height) * 0.72;
    const strength = Math.max(0, 1 - distance / activeDistance);
    const revealSize = revealMin + revealMax * strength;
    const xRatio = imageX / imageRect.width;
    const yRatio = imageY / imageRect.height;

    serviceTreeStage.style.setProperty("--tree-image-x", `${imageX}px`);
    serviceTreeStage.style.setProperty("--tree-image-y", `${imageY}px`);
    serviceTreeStage.style.setProperty("--tree-reveal-x", `${x}px`);
    serviceTreeStage.style.setProperty("--tree-reveal-y", `${y}px`);
    serviceTreeStage.style.setProperty("--tree-reveal-size", `${revealSize}px`);
    serviceTreeStage.classList.toggle("is-active", revealSize > 18);
    const service = getServiceFromPoint(xRatio, yRatio);
    const shouldRevealLabels = !(mobileServices.matches && event.pointerType === "touch");
    setActiveService(service, shouldRevealLabels);
    if (mobileServices.matches && event.pointerType === "touch") closeMobileDetail();
  }

  serviceTreeStage.addEventListener("pointermove", setReveal);

  markers.forEach((marker) => {
    marker.addEventListener("pointerenter", () => {
      if (mobileServices.matches) return;
      setActiveService(marker.dataset.serviceMarker, true);
    });
    marker.addEventListener("click", () => {
      setActiveService(marker.dataset.serviceMarker, true);
      if (mobileServices.matches) openMobileDetail();
    });
    marker.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setActiveService(marker.dataset.serviceMarker, true);
      if (mobileServices.matches) openMobileDetail();
    });
  });

  const detailCard = serviceTreeStage.querySelector(".service-tree-detail");
  if (detailCard) {
    detailCard.addEventListener("pointerdown", (event) => {
      if (!mobileServices.matches) return;
      detailDragStartX = event.clientX;
    });

    detailCard.addEventListener("pointerup", (event) => {
      if (!mobileServices.matches || detailDragStartX === null) return;
      const movedX = event.clientX - detailDragStartX;
      detailDragStartX = null;
      if (movedX > 60) closeMobileDetail();
    });

    detailCard.addEventListener("click", (event) => {
      if (!mobileServices.matches) return;
      if (event.target.closest("[data-service-language-toggle]")) return;
      if (event.target.closest(".service-tree-detail-content")) return;
      closeMobileDetail();
    });
  }

  serviceTreeStage.addEventListener("pointerleave", () => {
    serviceTreeStage.classList.remove("is-active");
    serviceTreeStage.style.setProperty("--tree-reveal-size", "0px");
  });

  serviceTreeStage.addEventListener("pointerdown", (event) => {
    if (!mobileServices.matches || event.target.closest(".service-tree-marker, .service-tree-detail")) return;
    setReveal(event);
  });

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      activeLanguage = activeLanguage === "cn" ? "en" : "cn";
      const activeDetail = details.find((detail) => detail.dataset.serviceDetail === activeService);
      if (activeDetail) syncLanguage(activeDetail);
      languageToggle.textContent = activeLanguage === "cn" ? "English" : "中文";
    });
  }

  setActiveService(activeService);

  if (colorTree.complete) {
    serviceTreeStage.classList.add("is-loaded");
  } else {
    colorTree.addEventListener("load", () => {
      serviceTreeStage.classList.add("is-loaded");
    }, { once: true });
  }
}
