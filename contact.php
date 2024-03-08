<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Contact us</title>
	<link rel="stylesheet" type="text/css" href="contact.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">

</head>
<body>
	<header>
		
	
	</header>

	<form method="post" action=".php">
  	<?php include('errors.php'); ?>
	<div class="container">
		<i class="bi-arrow-left-square-fill"></i>
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="White" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
    <a href="index.html"><path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" fill="white"></path> </a>
    </svg>
		<div class="contact-box" >
			<div class="left"></div>
			<div class="right">
				<h2>Contact Us</h2>
				
				<input type="text" class="field" placeholder="Your Name"  name="name" value="<?php echo $concname; ?>">
				<input type="text" class="field" placeholder="Your Email" name="email" value="<?php echo $concemail; ?>">
				<input type="text" class="field" placeholder="Phone" name="phone" value="<?php echo $concphone; ?>">
				<textarea placeholder="Message" class="field" name="message" value="<?php echo $conctext; ?>"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
	</div>
    
 
   
</body>
</html>