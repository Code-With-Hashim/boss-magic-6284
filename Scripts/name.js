let sinak = JSON.parse(localStorage.getItem("userdetails")) || {};
console.log(sinak);
if (sinak.name != null) {
  console.log(sinak.name);
  console.log(document.getElementById("color_white").innerText);
  document.getElementById("color_white").innerText = "akhil";
}
