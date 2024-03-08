<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- custom css file link  -->
    <link rel="stylesheet" href="css/checkout.css">

</head>
<body>

<div class="container">

 
    <form action="checkoutserver.php" method="post">

        <div class="row">

            <div class="col">
                
                <h3 class="title">billing address</h3>
      
                <div class="inputBox">
                   
                    <input type="text" name="name" placeholder="john deo">
                </div>
                <div class="inputBox">
                    
                    <input type="email" name="email" placeholder="example@example.com">
                </div>
                <div class="inputBox">
                    
                    <input type="text" name="address" placeholder="room - street - locality">
                </div>
                <div class="inputBox">
                    
                    <input type="text" name="city" placeholder="mumbai">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        
                        <input type="text" name="state" placeholder="india">
                    </div>
                    <div class="inputBox">
                        
                        <input type="text" name="zip" placeholder="123 456">
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    
                    <img src="images/card_img.png" alt="">
                </div>
                <div class="inputBox">
                    
                    <input type="text" name="cname" placeholder="mr. john deo">
                </div>
                <div class="inputBox">
                    
                    <input type="number" name="cno" placeholder="1111-2222-3333-4444">
                </div>
                <div class="inputBox">
                    
                    <input type="text" name="expmonth" placeholder="january">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        
                        <input type="number" name="cyear" placeholder="2022">
                    </div>
                    <div class="inputBox">
                        
                        <input type="text" name="CVV" placeholder="1234">
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" class="submit-btn">

    </form>
   
</div>    
    
</body>
</html>