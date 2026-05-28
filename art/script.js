"use strict";

const graph = document.getElementById("graph");

const dotGenerator = (x, y) => {
  const point = document.createElement("div");

  point.style.position = "absolute";
  point.style.width = "1px";
  point.style.height = "1px";
  point.style.backgroundColor = "black";

  point.style.bottom = `${y}px`;
  point.style.left = `${x + 200}px`;

  graph.appendChild(point);
};

const quadratic = (x) => {
  return (1 / 40) * (x * x);
};

const bibun = (x) => {
  return (1 / 20) * x;
};

const tangent = (x0, x) => {
  return bibun(x0) * (x - x0) + quadratic(x0);
};

const drawLine = (x0) => {
  for (let x = -200; x <= 200; x += 0.2) {
    const y = tangent(x0, x);

    dotGenerator(x, y);
  }
};

for (let i = -100; i <= 100; i += 0.1) {
  const y = quadratic(i);

  dotGenerator(i, y);

  // 接線を描く
  if (Math.trunc((i * 10) % 50) === 0 && i > 0) {
    drawLine(i);
  }
}
