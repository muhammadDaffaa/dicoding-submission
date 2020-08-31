//Captain America
let c = [
  ["captain-america.jpg"]
];

let data1 = ` `;
for (let captain of c) {
  data1 += `
  <img src="assets/${captain[0]}">
  `;
}
//Iron-Man
let i = [
  ["iron-man.jpg"]
];
let data2 = ` `;
for (let iron of i) {
  data2 += `
  <img src="assets/${iron[0]}">
  `;
}
//Thor
let t = [
  ["thor.jpg"]
];
let data3 = ` `;
for (let tor of t) {
  data3 += `
  <img src="assets/${tor[0]}">
  `;
}
//SpiderMan
let s = [
  ["spider-man.jpg"]
];
let data4 = ` `;
for (let spider of s) {
  data4 += `
  <img src="assets/${spider[0]}">
  `;
}

document.querySelector(".captain-america").innerHTML = data1;
document.querySelector(".iron-man").innerHTML = data2;
document.querySelector(".thor").innerHTML = data3;
document.querySelector(".spider-man").innerHTML = data4;