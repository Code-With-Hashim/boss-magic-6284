//search functionality

let search = () => {
    let search_input = document.getElementById('search-input')
    let search_button = document.getElementById('search-button')
    search_input.style.display = 'block'
    search_button.style.position = 'relative'
    search_button.style.left = '0%'
}

let flag = true

let view = document.getElementById('view')
let second_div = document.getElementById('second-div')


view.addEventListener('click', () => {

    if (flag) {
        second_div.style.display = ''
        view.innerText = 'View Less'
        flag = false
    } else {
        second_div.style.display = 'none'
        view.innerText = 'View More'
        flag = true
    }
})

let hideandseek = document.getElementById('hideandseek')
let hideandseek1 = document.getElementById('hideandseek1')
let hideandseek2 = document.getElementById('total-two-box')
let hideandseek3 = document.getElementById('second-div1')

let more = true
let view1 = document.getElementById('view1')
view1.addEventListener("click",()=> {

    if(flag) {
        hideandseek.style.display = ''
        hideandseek1.style.display = ''
        hideandseek2.style.display = ''
        hideandseek3.style.display = ''
        view1.innerText = 'View Less'
        flag = false
    } else {
        hideandseek.style.display = 'none'
        hideandseek1.style.display = 'none'
        hideandseek2.style.display = 'none'
        hideandseek3.style.display = 'none'
        view1.innerText = 'View More'
        flag = true
    }
    console.log(flag)

})

let option_button = document.getElementById('main-option')
let option_navbar = document.getElementById('second-navbar')
let option = true
option_button.addEventListener('click',()=> {
    
    

    if(option) {
        option_navbar.style.display = 'block'
        option = false
    } else {
        option_navbar.style.display = 'none'
        option = true
    }
})
// media query search bar
let button = true
let search1 = () => {
    let search = document.getElementById('search')
    let directory = document.getElementById('directory')
    let search_input = document.getElementById('search-input1')
    let search_button = document.getElementById('search-button1')

   

    if(button) {
        search_input.style.display = 'block'
        search_button.style.position = 'relative'
        search_button.style.left = '0%'
        directory.style.display = 'none'
        search_button.style.display = 'width'
        search_button.style.width = '6%'
        button = false
    } else {
        search_input.style.display = 'none'
        search_button.style.position = 'relative'
        search_button.style.left = '94%'
        directory.style.display = ''
        search_button.style.width = '8%'
        button = true
    }
   
}

let view3 = document.getElementById('view3')
let display = document.getElementById('displayfnc')
let flag3 = true 
view3.addEventListener('click',()=> {

    if(flag3) {
        display.style.display = ''
        flag3 = false
        view3.innerText = 'View Less'
    } else {
        display.style.display = 'none'
        flag3 = true
        view3.innerText = 'View More'
    }
})



