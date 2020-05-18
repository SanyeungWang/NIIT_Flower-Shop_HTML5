function loginCheck() {
    var un = document.getElementById('fullname');
    var pass = document.getElementById('password');
    if (un.value && pass.value) {
        if (un.value == localStorage.getItem("user") && pass.value == localStorage.getItem("pass")) {
            alert("Success");
            window.location.href = "home.html";
            return true;
        }
        else {
            alert('Error!')
            return false;
        }
    } else {
        alert('Please complete the form')
    }
}