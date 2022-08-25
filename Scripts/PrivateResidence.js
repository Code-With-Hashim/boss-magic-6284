// setting default attribute to diabled of minus button

document.querySelector(".minus-1").setAttribute("disabled", "disabled");

// taking value to increment decrement input value
let valueCount = 0;

// plus button
document.querySelector(".plus-1").addEventListener("click", addVal);
function addVal() {
  valueCount++;
  console.log("valueCount:", valueCount);

  if (valueCount > 0) {
    document.querySelector(".displyBed").innerText = valueCount + " bedrooms";
    document.querySelector(".minus-1").removeAttribute("disabled");
    document.querySelector(".minus-1").classList.remove("disabled");
  }
}

// minus button
document.querySelector(".minus-1").addEventListener("click", minusVal);

function minusVal() {
  valueCount--;
  console.log("valueCount:", valueCount);

  if (valueCount < 1) {
    document.querySelector(".displyBed").innerText = valueCount + " bedroom";
    document.querySelector(".minus-1").setAttribute("disabled", "disabled");
  } else {
    document.querySelector(".displyBed").innerText = valueCount + " bedrooms";
  }
}

// setting default attribute to diabled of minus button

document.querySelector(".minus-2").setAttribute("disabled", "disabled");

// taking value to increment decrement input value
let valueCount1 = 0;

// plus button
document.querySelector(".plus-2").addEventListener("click", addVal2);
function addVal2() {
  valueCount1++;
  console.log("valueCount:", valueCount1);

  if (valueCount1 > 0) {
    document.querySelector(".displybathroom").innerText = valueCount1 + " bathrooms";
    document.querySelector(".minus-2").removeAttribute("disabled");
    document.querySelector(".minus-2").classList.remove("disabled");
  }
}

// minus button
document.querySelector(".minus-2").addEventListener("click", minusVal2);

function minusVal2() {
  valueCount1--;
  console.log("valueCount:", valueCount1);

  if (valueCount1 < 1) {
    document.querySelector(".displybathroom").innerText = valueCount1 + " bathroom";
    document.querySelector(".minus-2").setAttribute("disabled", "disabled");
  } else {
    document.querySelector(".displybathroom").innerText = valueCount1 + " bathrooms";
  }
}

//* next button js to changing step 2

document.querySelector(".nextbtn").addEventListener("click", step2);

let section3 = document.querySelector(".section-3");
function step2() {
  section3.innerHTML = null;

  let card = document.createElement("div");
  card.classList.add("card-container");
  // card.innerHTML = `
  // <p class="steps">Step <span>2</span> of 3</p>
  // <h2>Where is your property located?</h2>
  // <div class="inputadd">
  //   <img src=".images/icons/location.png" alt="">
  //   <input class="citySearch" type="text" placeholder="Enter addrress">
  // </div>

  
  // <button class="nextbtn" onclick="nextfun">Next</button>

  // `;
  let p = document.createElement("p");
  p.setAttribute("class", "steps");
  p.innerText = "Step 2 of 3";
  let h2 = document.createElement("h2");
  h2.innerText = "Where is your property located?";
  let inputdiv = document.createElement("div");
  inputdiv.setAttribute("class", "inputadd");

  let img = document.createElement("img");
  img.src = "images/icons/location.png";
  let ip = document.createElement("input");
  ip.className = "citySearch";

  ip.placeholder = "Enter addrress";
  inputdiv.append(img, ip);
  let btn = document.createElement("button");
  btn.innerText = "Next";
  btn.className = "nextbtn"
  card.append(p,h2,inputdiv,btn);
  btn.addEventListener('click', backfn)

  // document.querySelector(".nextbtn").addEventListener("click", nextfun)
  section3.append(card);
}

function backfn() {
  console.log("nextfun:");

  location.replace("PrivateResidence.html");
}
