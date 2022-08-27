let login = () => {
  let a = JSON.parse(localStorage.getItem("userdetails"));

  if (
    a.email == document.getElementById("email").value &&
    a.password == document.getElementById("password").value
  ) {
    location.href = "index.html";
  } else {
    alert("Invalid login Credentials");
  }
};
