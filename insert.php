<?php
$host="localhost";
$user="root";
$password="";
$connect=mysqli_connect($host,$user,$password,"users");

$email=$_POST["email"];
$password=$_POST["password"];
$sql="INSERT INTO guvi(email,password) VALUES (`$email`,`$password`)";
mysqli_close($connect)
?>