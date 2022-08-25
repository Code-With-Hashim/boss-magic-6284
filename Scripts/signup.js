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
        mobile : '#',
        description : 'Welcome'
 
    }

    //kashim457@gmail.com
    //kasim123

    try {
        let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method : 'POST',

        body : JSON.stringify(send_data),

        headers : {
            'Content-Type' : 'application/json'
        }
        
    }) 

    let data = await res.json()
    let {error} = data
    let {message} = data

    console.log(message)

    if(error) {
        alert(message)
    } else {
        alert(message)
        window.location.href = 'login.html'
    }


    }
    catch(error) {
        alert
    }
    

}