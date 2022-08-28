let sinak = JSON.parse(localStorage.getItem("userdetails")) || null;

let signin = document.getElementById("signintext");

//hashim.khan48184@gmail.com
//Hashim124

// setTimeout(()=> {
//   localStorage.setItem('userdetails', '' )
//   window.location.reload(true)
// },300000)

// let {name} = sinak

if (sinak == null) {
  signin.innerText = "Sign In";
} else {
  let { name } = sinak;
  signin.innerText = name;
}

let { name } = sinak;
signin.innerText = name;
console.log(name);

// let signin = document.getElementById('signintext')

let display = document.getElementById("mySignin");

signin.innerText = name;

if (signin.innerText == "Sign In") {
} else {
  display.style.display = "none";
}

//display.style.display = 'none'
