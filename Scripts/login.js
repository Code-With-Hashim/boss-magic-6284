let login = async () => {
    let send_data = {
        password: document.getElementById('password').value,
        username: document.getElementById('email').value,
    }


    try {

        let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
            method: 'POST',

            body: JSON.stringify(send_data),

            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await res.json()

        let { username } = send_data
        let { token } = data

        getProfile(username, token)
    }
    catch (error) {
        alert("Invalid login creadentials")
    }


}

let getProfile = async (username, token) => {

    try {

        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }


        })
        let data = await res.json()
        let { name } = data
        alert(`Welcome to Travelocity ${name}`)
    }
    catch(error) {
        alert(error)
    }
    
   

}
