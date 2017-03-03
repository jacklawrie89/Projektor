<?php

$con=mysqli_connect("127.0.0.1","root","password","dbtest");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Perform queries
$email = ($_POST['email']);
$password = ($_POST['password']); 
mysqli_query($con,"INSERT INTO user ('$email','$password',NULL);");


?>