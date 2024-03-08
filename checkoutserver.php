<?php

$fistname = $_POST["name"];
$Email = $_POST["email"];
$Address = $_POST["address"];
$City = $_POST["city"];
$state = $_POST["state"];
$Zip = $_POST["zip"];
$Cname = $_POST["cname"];
$Cno = $_POST["cno"];
$Expmonth = $_POST["expmonth"];
$Cyear = $_POST["cyear"];
$cvv = $_POST["CVV"];

$conn = mysqli_connect("localhost", "root", "", "loginpg") or die("connection failed");
$sql = "INSERT INTO checkout (name, email, address, city, state, zip, cname, cno, expmonth, cyear, cvv) VALUES ('{$fistname}','{$Email}','{$Address}','{$City}','{$state}','{$Zip}','{$Cname}','{$Cno}','{$Expmonth}','{$Cyear}','{$cvv}' )";
$result = mysqli_query($conn, $sql) or die("Query Failed!");

header("location: http://localhost/Kwikeats/checkout.php");
mysqli_close($conn);

?>