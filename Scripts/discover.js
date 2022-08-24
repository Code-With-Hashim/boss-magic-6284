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
let hideandseek1 = document.getElementById('hideandsee1')
let hideandseek2 = document.getElementById('total-two-box')
let hideandseek3 = document.getElementById('second-div1')

let more = true
let view1 = document.getElementById('view1')
view1.addEventListener("click",()=> {

    if(flag) {
        hideandseek.style.display = ''
        // hideandseek1.style.display = ''
        // hideandseek2.style.display = ''
        // hideandseek3.style.display = ''
        // view.innerText = 'View Less'
        flag = false
    } else {
        hideandseek.style.display = 'none'
        // hideandseek1.style.display = 'none'
        // hideandseek2.style.display = 'none'
        // hideandseek3.style.display = 'none'
        // view.innerText = 'View More'
        flag = true
    }
    console.log(flag)

})





