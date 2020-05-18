function checkuser() {
    un = document.getElementById('i1');
    pass = document.getElementById('i2');
    rpass = document.getElementById('i4');
    if (un.value && pass.value && rpass.value) {
        if (un.value == localStorage.getItem("user") && pass.value == rpass.value) {
            localStorage.removeItem("pass");
            localStorage.setItem("pass", pass.value);
            alert("success");
            return true;
        }
        else {
            alert('error!')
            return false;
        }
    }
    else {
        alert('error!')
        return false;
    }
}

function check()
{
    var un = document.getElementById("i1");
    var pa = document.getElementById("i2");
    var rpa = document.getElementById("i4");
    var userdetails = JSON.parse(localStorage.getItem("userDetails"));

    if (un.value != "" && pa.value != "" && rpa.value != "") 
    {
        if (pa.value == rpa.value)
        {
            if(userdetails == "")
            {
                userdetails = [];
            }
            else
            {
                for(var i = 0; i < userdetails.length; i++)
                {
                    if(userdetails[i].userid == un.value)
                    {
                        alert("User is already exit.");
                        return false;
                    }
                }
            }
            userdetails.push({"userid":un.value, "pass":pa.value});
            window.localStorage.setItem("userdetails", JSON.stringify(userdetails));
            alert('You have successfully registered!')            
            return true;
        }
        else
        {
            alert('error!')
            return false;
        }
    }
    else
    {
        alert('error!')
        return false;
    }
}