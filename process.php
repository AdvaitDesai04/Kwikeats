<?php

$fistname = $_POST["fname"];
$message = $_POST["message"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$conn = mysqli_connect("localhost", "root", "", "loginpg") or die("connection failed");
$sql = "INSERT INTO contact (name, message, email, phone) VALUES ('{$fistname}','{$message}','{$email}','{$mobile}' )";
$result = mysqli_query($conn, $sql) or die("Query Failed!");

header("location: http://localhost/Kwikeats/contact1.php");
mysqli_close($conn);

// if(empty($fistName) || empty($lastname) || empty($email) || empty($mobile))
//        {
//            header('location:contact1.php?error');
//        }
//        else
//        {
//            $to = "advaitdesai3511@gmail.com";

//            if(mail($to,$fistname,$Mobile,$email))
//            {
//                header("location:contact1.php?success");
//            }
//        }
    
//  else
//     {
//         header("location:contact1.php");
//     }   reference https://www.onlineittuts.com/contact-us-form-in-php-with-mail.html
?>