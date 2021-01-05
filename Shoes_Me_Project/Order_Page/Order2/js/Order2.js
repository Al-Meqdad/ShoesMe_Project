
var x = 0;
function vaildfunction() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if (name == "") {
        document.getElementById("Error101").style.display = "block";
    } else if (phone == "") {
        document.getElementById("Error101").style.display = "block";
    } else if (email == "") {
        document.getElementById("Error101").style.display = "block";
    } else {
        document.getElementById("Succes101").style.display = "block";
        x = 1;
    }
    setTimeout(function () {
        document.getElementById("Error101").style.display = "none";
        document.getElementById("Succes101").style.display = "none";
    }, 3000);
    if (x == 1) {
        window.location = href = "Thanks/thanks.html";
    } 
}

var btnContainer = document.getElementById("MyButtons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

