
//   The Code for Navbar Starts Here
function moreTravel() {
    document.getElementById("myDropdown").classList.toggle("navShow");

    window.onclick = function (event) {
        if (!event.target.matches('.navDropbtn')) {
            let dropdowns = document.getElementsByClassName("navDropdown_cont");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('navShow')) {
                    openDropdown.classList.remove('navShow');
                }
            }
        }
    }
}


function myFunction() {
    document.getElementById("mySignin").classList.toggle("signinShow");
    window.onclick = function (event) {
        if (!event.target.matches('.signinBtn')) {
            let Signins = document.getElementsByClassName("Signin-content");
            let i;
            for (i = 0; i < Signins.length; i++) {
                let openSignin = Signins[i];
                if (openSignin.classList.contains('signinShow')) {
                    openSignin.classList.remove('signinShow');
                }
            }
        }
    }
}

  function show(elementId) {
      document.getElementById("showHotel").style.display = "none";
      document.getElementById("showFlight").style.display = "none";
      document.getElementById("showCar").style.display = "none";
      document.getElementById("showPackage").style.display = "none";
      document.getElementById("showToDo").style.display = "none";
      document.getElementById("showCruise").style.display = "none";
      document.getElementById(elementId).style.display = "block";
      
      
    }
    
    function checkbox_CreateElement() {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    
      var pbtn = document.getElementById("getlinkbtnmain")
      function getappbtnclick(){ 
          let num = document.getElementById("phonenumber").value
          alert(`A link has been sent to ${num}`)
          document.getElementById("phonenumber").value = ""
      }
      pbtn.addEventListener("click",getappbtnclick)
      async function getcountrycode(){
          var req1 = fetch("https://restcountries.eu/rest/v2/all")
          var req2 = await req1;
          var req3 = await req2.json();
          for(var i = 0; i<req3.length ; i++){
              let a = document.createElement("option")
              a.value = "+" + req3[i].callingCodes[0] + " " + req3[i].alpha3Code
              a.textContent = "+" + req3[i].callingCodes[0] + "[" + req3[i].alpha3Code + "]"
              document.getElementById("countrycode").append(a)
            }
      }
      
      getcountrycode();


getcountrycode();
//   To Get the Data of the GauravDiv6 it ends here

var count = 1;
function plus() {
  var countEl = document.getElementById("count");
  count++;
  countEl.value = count;
}

function minus() {
  var countEl = document.getElementById("count");
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}

//Gaurav's JS
var coll = document.getElementsByClassName("Gaurav_collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
