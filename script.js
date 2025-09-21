const convertBtn = document.getElementById('btn-el');
const paragraphEl1 = document.getElementById('p-el-1');
const paragraphEl2 = document.getElementById('p-el-2');
const paragraphEl3 = document.getElementById('p-el-3');
const inputEl = document.getElementById('input-el');

convertBtn.addEventListener('click', function () {
  const raw = inputEl.value.trim();
  const number = parseFloat(raw);
  const n = isNaN(number) ? 0 : number;

  length(n);
  volume(n);
  mass(n);
});

function length(num) {
  paragraphEl1.textContent = `${num} meters = ${metersToFeet(num)} feet | ${num} feet = ${feetToMeters(num)} meters`;
}

function volume(num) {
  paragraphEl2.textContent = `${num} liters = ${litersToGallons(num)} gallons | ${num} gallons = ${gallonsToLiters(num)} liters`;
}

function mass(num) {
  paragraphEl3.textContent = `${num} kilos = ${kilosToPounds(num)} pounds | ${num} pounds = ${poundsToKilos(num)} kilos`;
}

function metersToFeet(m) {
  return (m * 3.28084).toFixed(3);
}

function feetToMeters(f) {
  return (f * 0.3048).toFixed(3);
}

function litersToGallons(l) {
  return (l * 0.264172).toFixed(3);
}

function gallonsToLiters(g) {
  return (g * 3.78541).toFixed(3);
}

function kilosToPounds(kg) {
  return (kg * 2.20462).toFixed(3);
}

function poundsToKilos(pounds) {
  return (pounds * 0.453592).toFixed(3);
}
