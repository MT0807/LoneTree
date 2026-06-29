const serviceTreeStage = document.querySelector("[data-service-tree]");

if (serviceTreeStage) {
  const colorTree = serviceTreeStage.querySelector(".service-tree-image-color");
  const revealMin = 0;
  const revealMax = 150;

  function setReveal(event) {
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

    serviceTreeStage.style.setProperty("--tree-image-x", `${imageX}px`);
    serviceTreeStage.style.setProperty("--tree-image-y", `${imageY}px`);
    serviceTreeStage.style.setProperty("--tree-reveal-x", `${x}px`);
    serviceTreeStage.style.setProperty("--tree-reveal-y", `${y}px`);
    serviceTreeStage.style.setProperty("--tree-reveal-size", `${revealSize}px`);
    serviceTreeStage.classList.toggle("is-active", revealSize > 18);
  }

  serviceTreeStage.addEventListener("pointermove", setReveal);

  serviceTreeStage.addEventListener("pointerleave", () => {
    serviceTreeStage.classList.remove("is-active");
    serviceTreeStage.style.setProperty("--tree-reveal-size", "0px");
  });

  if (colorTree.complete) {
    serviceTreeStage.classList.add("is-loaded");
  } else {
    colorTree.addEventListener("load", () => {
      serviceTreeStage.classList.add("is-loaded");
    }, { once: true });
  }
}
