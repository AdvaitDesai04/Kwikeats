<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="contact.css">
</head>
<body>
    <div class="contact-form">
        <h1>Contact forms</h1>
    </div>
    <div class="contact-us">
       <form action="process.php" method="post">
           <input type="text" name="fname"   class="form-control" placeholder="Enter Name"> <br>
           <input type="email" name="email"  class="form-control" placeholder="Enter Email"> <br>
           <input type="text" name="mobile"  class="form-control" placeholder="Enter Mobile Number"> <br>
           <input type="text" name="message"  class="form-control" placeholder="Enter the message"> <br>
           <input type="submit" class="form-control submit" value="submit" >
       </form>
    </div>
</body>

<style>
*{
    padding: 0px ;
    margin: 0px;
    font-family:sans-serif ;
}

body{
   background-image: url("images/image5.jpg");
    background-size: cover;
    text-align: center;
}

.contact-form{
    margin-top: 100px;
    color: #ff5722;
    text-transform: uppercase;
    transition: all 4s ease-in-out;
}

.contact-form h1{
    font-size: 32px;
}


form{
    margin-top: 50px;
    transition: all 4s ease-in-out ;
}

.form-control{
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
    color: #fff;
    font-size: 18px;
    margin-bottom: 18px;
}


input{
    height: 45px;
}

form .submit{
    background: #ff5722;
    border: transparent;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    height: 50px;
    margin-top: 20px;
}

form .submit:hover{
    background: #f44336;
    cursor: pointer;
}

    
    
    
</style>
</html>