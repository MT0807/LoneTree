const serviceTreeStage = document.querySelector("[data-service-tree]");

if (serviceTreeStage) {
  const svg = serviceTreeStage.querySelector(".service-tree-svg");
  const nodeLayer = serviceTreeStage.querySelector("[data-service-nodes]");
  const cursor = serviceTreeStage.querySelector("[data-service-cursor]");
  const totalNodes = 102;

  const nodeClusters = [
    { x: 142, y: 408, rx: 96, ry: 58, count: 13 },
    { x: 218, y: 342, rx: 96, ry: 70, count: 14 },
    { x: 286, y: 256, rx: 84, ry: 66, count: 12 },
    { x: 454, y: 184, rx: 78, ry: 76, count: 12 },
    { x: 666, y: 176, rx: 88, ry: 80, count: 12 },
    { x: 798, y: 262, rx: 106, ry: 66, count: 15 },
    { x: 856, y: 442, rx: 98, ry: 58, count: 14 },
    { x: 706, y: 426, rx: 84, ry: 52, count: 10 }
  ];

  function seededNoise(value) {
    const x = Math.sin(value * 127.1 + 19.7) * 43758.5453;
    return x - Math.floor(x);
  }

  function nodeDistance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function clusterPoint(cluster, clusterIndex, localIndex, count, attempt) {
    const seed = clusterIndex * 97 + localIndex * 13 + attempt * 17;
    const angle = localIndex * 2.399963 + seededNoise(seed) * 0.9 + attempt * 0.37;
    const ring = Math.sqrt((localIndex + 0.62 + seededNoise(seed + 5) * 0.25) / count);
    const jitterX = (seededNoise(seed + 11) - 0.5) * 18;
    const jitterY = (seededNoise(seed + 19) - 0.5) * 14;

    return {
      x: cluster.x + Math.cos(angle) * cluster.rx * ring + jitterX,
      y: cluster.y + Math.sin(angle) * cluster.ry * ring + jitterY
    };
  }

  function placeNodes() {
    const placed = [];

    nodeClusters.forEach((cluster, clusterIndex) => {
      for (let localIndex = 0; localIndex < cluster.count; localIndex += 1) {
        let bestPoint = null;
        let bestDistance = -Infinity;

        for (let attempt = 0; attempt < 44; attempt += 1) {
          const point = clusterPoint(cluster, clusterIndex, localIndex, cluster.count, attempt);
          const nearest = placed.length
            ? Math.min(...placed.map((placedPoint) => nodeDistance(point, placedPoint)))
            : Infinity;

          if (nearest > bestDistance) {
            bestPoint = point;
            bestDistance = nearest;
          }

          if (nearest > 24) break;
        }

        placed.push(bestPoint);
      }
    });

    return placed.slice(0, totalNodes);
  }

  function makeNode(index, point) {
    const x = Math.round(point.x * 10) / 10;
    const y = Math.round(point.y * 10) / 10;
    const size = 6.2 + seededNoise(index + 23) * 3.4;
    const opacity = 0.25 + seededNoise(index + 29) * 0.65;
    const rotate = -12 + seededNoise(index + 31) * 24;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("service-node");
    group.dataset.x = x;
    group.dataset.y = y;
    group.style.setProperty("--node-size", `${size.toFixed(1)}px`);
    group.style.setProperty("--node-opacity", opacity.toFixed(2));
    group.style.setProperty("--node-rotate", `${rotate.toFixed(1)}deg`);

    const leaf = document.createElementNS("http://www.w3.org/2000/svg", "path");
    leaf.classList.add("node-leaf");
    leaf.setAttribute("d", `M${x - 5.6} ${y} C${x - 2.4} ${y - 7.2} ${x + 6.8} ${y - 6.4} ${x + 8.4} ${y - 0.4} C${x + 4.1} ${y + 6.6} ${x - 3.9} ${y + 5.5} ${x - 5.6} ${y}Z`);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "central");
    text.textContent = String(index).padStart(2, "0");

    group.append(leaf, text);
    nodeLayer.append(group);
    return group;
  }

  const nodes = placeNodes().map((point, index) => makeNode(index, point));

  function getSvgPoint(event) {
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
  }

  function distanceToInkTrunk(point) {
    const trunkGuide = [
      { x: 500, y: 675 },
      { x: 492, y: 610 },
      { x: 500, y: 535 },
      { x: 528, y: 460 },
      { x: 570, y: 380 },
      { x: 600, y: 285 }
    ];

    return Math.min(
      ...trunkGuide.map((guidePoint) => Math.hypot(point.x - guidePoint.x, point.y - guidePoint.y))
    );
  }

  function updateInteraction(point) {
    cursor.setAttribute("cx", point.x);
    cursor.setAttribute("cy", point.y);

    nodes.forEach((node) => {
      const dx = Number(node.dataset.x) - point.x;
      const dy = Number(node.dataset.y) - point.y;
      const distance = Math.hypot(dx, dy);
      node.classList.toggle("is-leaf", distance < 58);
    });

    const rootDistance = Math.hypot(point.x - 536, point.y - 708);

    serviceTreeStage.classList.toggle("is-trunk-near", distanceToInkTrunk(point) < 72);
    serviceTreeStage.classList.toggle("is-root-near", rootDistance < 210 || point.y > 626);
  }

  serviceTreeStage.addEventListener("pointermove", (event) => {
    serviceTreeStage.classList.add("is-active");
    updateInteraction(getSvgPoint(event));
  });

  serviceTreeStage.addEventListener("pointerleave", () => {
    serviceTreeStage.classList.remove("is-active", "is-trunk-near", "is-root-near");
    cursor.setAttribute("cx", -100);
    cursor.setAttribute("cy", -100);
    nodes.forEach((node) => node.classList.remove("is-leaf"));
  });
}
