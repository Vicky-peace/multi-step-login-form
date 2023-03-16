let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");

let Next1 = document.getElementById("Next1");
let Next2 = document.getElementById("Next2");
let Previous1 = document.getElementById("Previous1");
let Previous2 = document.getElementById("Previous2");

Next1.onclick = function () {
  step1.style.top = "-450px";
  step2.style.top = "100px";
  progress.style.width = "240px";
};
getElementById;
Previous1.onclick = function () {
  step1.style.top = "100px";
  step2.style.top = "450px";
  progress.style.width = "120px";
};
Next2.onclick = function () {
  step2.style.top = "-450px";
  step3.style.top = "100px";
  progress.style.width = "360px";
};
Previous2.onclick = function () {
  step2.style.top = "100px";
  step3.style.top = "450px";
  progress.style.width = "240px";
};
