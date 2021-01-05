var p = 0;
function myfun(count) {
    var val = (document.getElementById("myid2").value = count);
    if (val == null) {
        document.getElementById("Error101").style.display = "block";
    } else {
        document.getElementById("myid2").style.display = "block";
        p = 1;
    }
    setTimeout(function () {
        document.getElementById("Error101").style.display = "none";
    }, 3000);
}
function Next() {
    if (p == 1) {
        window.location = href = "Order2/Order2.html";
        document.getElementById("Succes101").style.display = "block";
    } else {
        document.getElementById("Error101").style.display = "block";
    }
    setTimeout(function () {
        document.getElementById("Error101").style.display = "none";
        document.getElementById("Succes101").style.display = "none";
    }, 3000);
}

var btncoon = document.getElementById("MyBrands");
var btn = btncoon.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
