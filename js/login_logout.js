function login_logout()
{
    if(localStorage.Name!=null && localStorage.Password)
    {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        alert('You are Logged Off!');
        location.href='login.html';
    }
    else
    {
        alert('You must login First..!');
        location.href='login.html';
    }
}
