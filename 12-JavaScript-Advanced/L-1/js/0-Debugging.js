var u_name = document.myForm.u_name;
var u_password = document.myForm.u_password;

var userName = 'bikash';
var passWord = "123";

function runMe()
{
    if(u_name.value == userName && u_password.value == passWord)
    {
        console.log('Login Success');
    }else{
        console.log('Login Failed');
    }
}