function validateform(){
var username=$("#name").val();
var email=$("#email").val();
var password=$("#password").val();
 var cpassword=$("#cpassword").val();
var validname=/^[A-Za-z]+$/g;
var validpass=/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$/g;
var vemail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
if(username=="")
{
alert("Please enter your Username");
return false;
}
if(!username.match(validname))
{
alert("Invalid Username");
return false;
}
if(email=="")
{
alert("Please enter your Email");
return false;
}
if(!email.match(vemail))
{
alert("Invalid Email");
return false;
}
if(password=="")
{
alert("Please enter your password");
return false;
}
if(!password.match(validpass))
{
alert("Set a Stronger password      EXPECTED:min 8 characters,1 Uppercase,1 digit,1 special character");
return false;
}
if(!cpassword.match(pass))
{
alert("PASSWORDS DO NOT MATCH!");
return false;
}
}