let create = () => {
  let first_name = document.getElementById("f_name").value;
  let last_name = document.getElementById("l_name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_name = first_name + " " + last_name;

  let send_data = {
    name: user_name,
    email: email,
    password: password,
    username: email,
    mobile: "#",
    description: "Welcome",
  };
  if (
    send_data.name == "" ||
    send_data.email == "" ||
    send_data.password == "" ||
    send_data.username == ""
  ) {
    alert("Please provide all required details for sign up");
    return;
  }
  localStorage.setItem("userdetails", JSON.stringify(send_data));
  location.href = "login.html";
}
