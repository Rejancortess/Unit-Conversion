const convertBTn = document.getElementById('btn-el');
const paragraphEl1 = document.getElementById('p-el-1');
const paragraphEl2 = document.getElementById('p-el-2');
const paragraphEl3 = document.getElementById('p-el-3');
const inputEl = document.getElementById('input-el');

convertBTn.addEventListener('click', function () {
  const number = inputEl.value;
  length(number, feetToMeter(number), meterToFeet(number));
  volume(number, litersToGallons(number), gallonsToLiters(number));
  mass(number, kiloToPounds(number), poundToKilo(number));
});

function length(num, feet, meter) {
  paragraphEl1.innerHTML = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`;
}

function volume(num, gallons, liters) {
  paragraphEl2.innerHTML = `${num} litters = ${gallons} gallons | ${num} gallons = ${liters}`;
}

function mass(num, pounds, kilo) {
  paragraphEl3.innerHTML = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilo} kilos`;
}

function feetToMeter(meter) {
  let round = meter * 3.28084;
  return round.toFixed(3);
}

function meterToFeet(feet) {
  let round = feet / 0.3048;
  return round.toFixed(3);
}

function litersToGallons(liters) {
  let round = liters * 0.264172;
  return round.toFixed(3);
}

function gallonsToLiters(gallons) {
  let round = gallons * 3.78541;
  return round.toFixed(3);
}

function kiloToPounds(kg) {
  let round = kg * 2.20462;
  return round.toFixed(3);
}

function poundToKilo(pounds) {
  let round = pounds * 0.453592;
  return round.toFixed(3);
}
