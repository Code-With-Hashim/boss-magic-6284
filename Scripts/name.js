let sinak = JSON.parse(localStorage.getItem("userdetails")) || {};

//hashim.khan48184@gmail.com
//Hashim124

setTimeout(()=> {
  localStorage.setItem('userdetails', '' )
  window.location.reload(true)
},300000)

let {name} = sinak



let signin = document.getElementById('signintext')

let display = document.getElementById('mySignin')

signin.innerText = name

if (signin.innerText == 'Sign In') {
  
} else if(sinak.innerText == undefined) {
  signin.innerText = 'Sign In' 
  
} else {
  display.style.display = 'none'
}

//display.style.display = 'none'

