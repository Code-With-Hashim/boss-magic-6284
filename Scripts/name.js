let sinak = JSON.parse(localStorage.getItem("userdetails")) || undefined

//hashim.khan48184@gmail.com
//Hashim124

// setTimeout(()=> {
//   localStorage.setItem('userdetails' , JSON.stringify('Sign in'))
//   window.location.reload(true)
// },3000)


console.log(sinak)

let {name} = sinak

console.log(sinak.innerText)



let signin = document.getElementById('signintext')

let display = document.getElementById('mySignin')

signin.innerText = name

if (signin.innerText == 'Sign In') {
  
} else {
  display.style.display = 'none'
} 



//display.style.display = 'none'

