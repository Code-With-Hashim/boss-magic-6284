let create = async () => {
    let first_name = document.getElementById('f_name').value
    let last_name = document.getElementById('l_name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    let user_name = first_name + ' ' + last_name

    let send_data = {
        name : user_name,
        email : email,
        password : password,
        username : email,
        mobile : email,
        description : 'Welcome'
 
    }

    //hashim.khan481545@gmail.com
    //hashim0000

    //kashim457@gmail.com
    //kasim123

    
    //     let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
    //     method : 'POST',

    //     body : JSON.stringify(send_data),

    //     headers : {
    //         'Content-Type' : 'application/json'
    //     }
        
    // }) 

    // let data = await res.json()
    // // let {error} = data
    // // let {message} = data

    // // console.log(message)
    // console.log(data)

    // // if(error) {
    // //     alert(message)
    // // } else {
    // //     alert(message)
    // //     window.location.href = 'login.html'
    

    // let register_data = {
    //     name: document.getElementById('name').value,
    //     email: document.getElementById('email').value,
    //     password: document.getElementById('password').value,
    //     username: document.getElementById('username').value,
    //     mobile: document.getElementById('mobile').value,
    //     description: document.getElementById('description').value,
    // }

    const res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method: "POST",

        body: JSON.stringify(send_data),

        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json()
    console.log(data)



   

}