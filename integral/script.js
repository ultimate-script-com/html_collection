"use strict";
const f = (4 / 3) * Math.PI;

const integralGenerator = (n) => {
  let volume = 0;
  for (let i = 1 / n / 2; i < 1; i += 1 / n) {
    let r = i;
    const area = 4 * Math.PI * r ** 2;
    volume += area * (1 / n);
    //console.log(volume.toFixed(4));
  }
  return volume;
};

for (let i = 10; i < 10000; i *= 10) {
  const volume = integralGenerator(i);
  const error = f - volume;
  const result = `
    玉ねぎの皮　${i}　枚:　
    近似値${volume}
    誤差${(error / f) * 100}%
    `;
  console.log(result);
}

console.log(f);
