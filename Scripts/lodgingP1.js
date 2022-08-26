

let ip = document.querySelector(".ip");
ip.addEventListener("input", serch);

function serch() {
  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "QjhKUHFMdk9HRUhOc0VNV295c1VwT1I5ZWVNT0h6REhHdHRBd0RqNw==");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch("https://api.countrystatecity.in/v1/countries/IN/cities", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
