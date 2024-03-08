//************* BUSINESS LOGIC *********//
function Food(food, quantity, price, totalPrice) {
  this.food = food;
  this.quantity = quantity;
  this.price = price;
  this.totalPrice = totalPrice;
}

//**************UI LOGIC *********//

$("document").ready(function() {
  $("#location").click(function() {
    var location = prompt("Enter your location");
    $("#success").show();
    $("#myLocation").text(location);
  });
  //get quantity value
  var quantity = parseInt($("#quantity").text());
  var quantity2 = parseInt($("#quantity2").text());
  var quantity3 = parseInt($("#quantity3").text());
  var quantity4 = parseInt($("#quantity4").text());
  var quantity5 = parseInt($("#quantity5").text());
  var quantity6 = parseInt($("#quantity6").text());
  var quantity7 = parseInt($("#quantity7").text());
  var quantity8 = parseInt($("#quantity8").text());
  var quantity9 = parseInt($("#quantity9").text());
  var quantity10 = parseInt($("#quantity10").text());
  var quantity11 = parseInt($("#quantity11").text());
  var quantity12 = parseInt($("#quantity12").text());
  var quantity13 = parseInt($("#quantity13").text());
  var quantity14 = parseInt($("#quantity14").text());
  var quantity15 = parseInt($("#quantity15").text());
  var quantity16 = parseInt($("#quantity16").text());
  var quantity17 = parseInt($("#quantity17").text());
  var quantity18 = parseInt($("#quantity18").text());
  var quantity19 = parseInt($("#quantity19").text());
  var quantity20 = parseInt($("#quantity20").text());
  var quantity21 = parseInt($("#quantity21").text());
  var quantity22 = parseInt($("#quantity22").text());
  var quantity23 = parseInt($("#quantity23").text());
  var quantity24 = parseInt($("#quantity24").text());
  var quantity25 = parseInt($("#quantity25").text());
  var quantity26 = parseInt($("#quantity26").text());
  var quantity27 = parseInt($("#quantity27").text());
  var quantity28 = parseInt($("#quantity28").text());
  var quantity29 = parseInt($("#quantity29").text());
  var quantity30 = parseInt($("#quantity30").text());
  var quantity31 = parseInt($("#quantity31").text());
  var quantity32 = parseInt($("#quantity32").text());
  var quantity33 = parseInt($("#quantity33").text());
  var quantity34 = parseInt($("#quantity34").text());
  var quantity35 = parseInt($("#quantity35").text());
  var quantity36 = parseInt($("#quantity36").text());



  

  //increment
  $("#add").click(function() {
    quantity += 1;
    $("#quantity").text(quantity);
    $("#finalOrder").text(quantity);
    $("#price").text(quantity * 200);
  });
  $("#add2").click(function() {
    quantity2 += 1;
    $("#quantity2").text(quantity2);
    $("#finalOrder").text(quantity2);
    $("#price2").text(quantity2 * 130);
  });
  $("#add3").click(function() {
    quantity3 += 1;
    $("#quantity3").text(quantity3);
    $("#finalOrder").text(quantity3);
    $("#price3").text(quantity3 * 160);
  });
  $("#add4").click(function() {
    quantity4 += 1;
    $("#quantity4").text(quantity4);
    $("#finalOrder").text(quantity4);
    $("#price4").text(quantity4 * 150);
  });
  $("#add5").click(function() {
    quantity5 += 1;
    $("#quantity5").text(quantity5);
    $("#finalOrder").text(quantity5);
    $("#price5").text(quantity5 * 150);
  });
  $("#add6").click(function() {
    quantity6 += 1;
    $("#quantity6").text(quantity6);
    $("#finalOrder").text(quantity6);
    $("#price6").text(quantity6 * 140);
  });
  $("#add7").click(function() {
    quantity7 += 1;
    $("#quantity7").text(quantity7);
    $("#finalOrder").text(quantity7);
    $("#price7").text(quantity7 * 280);
  });
  $("#add8").click(function() {
    quantity8 += 1;
    $("#quantity8").text(quantity8);
    $("#finalOrder").text(quantity8);
    $("#price8").text(quantity8 * 320);
  });
  $("#add9").click(function() {
    quantity9+= 1;
    $("#quantity9").text(quantity9);
    $("#finalOrder").text(quantity9);
    $("#price9").text(quantity9 * 240);
  });
  $("#add10").click(function() {
    quantity10 += 1;
    $("#quantity10").text(quantity10);
    $("#finalOrder10").text(quantity10);
    $("#price10").text(quantity10 * 300);
  });
  $("#add11").click(function() {
    quantity11 += 1;
    $("#quantity11").text(quantity11);
    $("#finalOrder").text(quantity11);
    $("#price11").text(quantity11 * 290);
  });
  $("#add12").click(function() {
    quantity12 += 1;
    $("#quantity12").text(quantity12);
    $("#finalOrder").text(quantity12);
    $("#price12").text(quantity12 * 500);
  });
  $("#add13").click(function() {
    quantity13 += 1;
    $("#quantity13").text(quantity13);
    $("#finalOrder").text(quantity13);
    $("#price13").text(quantity13 * 170);
  });
  $("#add14").click(function() {
    quantity14 += 1;
    $("#quantity14").text(quantity14);
    $("#finalOrder").text(quantity14);
    $("#price14").text(quantity14 * 220);
  });
  $("#add15").click(function() {
    quantity15 += 1;
    $("#quantity15").text(quantity15);
    $("#finalOrder").text(quantity15);
    $("#price15").text(quantity15 * 270);
  });
  $("#add16").click(function() {
    quantity16 += 1;
    $("#quantity16").text(quantity16);
    $("#finalOrder16").text(quantity16);
    $("#price16").text(quantity16 * 320);
  });
  $("#add17").click(function() {
    quantity17 += 1;
    $("#quantity17").text(quantity17);
    $("#finalOrder").text(quantity17);
    $("#price17").text(quantity17 * 160);
  });
  $("#add18").click(function() {
    quantity18 += 1;
    $("#quantity18").text(quantity18);
    $("#finalOrder").text(quantity18);
    $("#price18").text(quantity18 * 180);
  });
  $("#add19").click(function() {
    quantity19 += 1;
    $("#quantity19").text(quantity19);
    $("#finalOrder").text(quantity19);
    $("#price19").text(quantity19 * 120);
  });
  $("#add20").click(function() {
    quantity20 += 1;
    $("#quantity20").text(quantity20);
    $("#finalOrder").text(quantity20);
    $("#price20").text(quantity20 * 200);
  });
  $("#add21").click(function() {
    quantity21 += 1;
    $("#quantity21").text(quantity21);
    $("#finalOrder").text(quantity21);
    $("#price21").text(quantity21 * 120);
  });
  $("#add22").click(function() {
    quantity22 += 1;
    $("#quantity22").text(quantity22);
    $("#finalOrder").text(quantity22);
    $("#price22").text(quantity22 * 125);
  });
  $("#add23").click(function() {
    quantity23 += 1;
    $("#quantity23").text(quantity23);
    $("#finalOrder").text(quantity23);
    $("#price23").text(quantity23 * 150);
  });
  $("#add24").click(function() {
    quantity24 += 1;
    $("#quantity24").text(quantity24);
    $("#finalOrder").text(quantity24);
    $("#price24").text(quantity24 * 110);
  });
  $("#add25").click(function() {
    quantity25 += 1;
    $("#quantity25").text(quantity25);
    $("#finalOrder").text(quantity25);
    $("#price25").text(quantity25 * 120);
  });
  $("#add26").click(function() {
    quantity26 += 1;
    $("#quantity26").text(quantity26);
    $("#finalOrder").text(quantity26);
    $("#price26").text(quantity26 * 150);
  });
  $("#add27").click(function() {
    quantity27 += 1;
    $("#quantity27").text(quantity27);
    $("#finalOrder").text(quantity27);
    $("#price27").text(quantity27 * 170);
  });
  $("#add28").click(function() {
    quantity28 += 1;
    $("#quantity28").text(quantity28);
    $("#finalOrder").text(quantity28);
    $("#price28").text(quantity28 * 180);
  });
  $("#add29").click(function() {
    quantity29 += 1;
    $("#quantity29").text(quantity29);
    $("#finalOrder").text(quantity29);
    $("#price29").text(quantity29 * 125);
  });
  $("#add30").click(function() {
    quantity30 += 1;
    $("#quantity30").text(quantity30);
    $("#finalOrder").text(quantity30);
    $("#price30").text(quantity30 * 350);
  });
  $("#add31").click(function() {
    quantity31 += 1;
    $("#quantity31").text(quantity31);
    $("#finalOrder").text(quantity31);
    $("#price31").text(quantity31 * 150);
  });
  $("#add32").click(function() {
    quantity32 += 1;
    $("#quantity32").text(quantity32);
    $("#finalOrder").text(quantity32);
    $("#price32").text(quantity32 * 100);
  });
  $("#add33").click(function() {
    quantity33 += 1;
    $("#quantity33").text(quantity33);
    $("#finalOrder").text(quantity33);
    $("#price33").text(quantity33 * 115);
  });
  $("#add34").click(function() {
    quantity34 += 1;
    $("#quantity34").text(quantity34);
    $("#finalOrder").text(quantity34);
    $("#price34").text(quantity34 * 140);
  });
  $("#add35").click(function() {
    quantity35 += 1;
    $("#quantity35").text(quantity35);
    $("#finalOrder").text(quantity35);
    $("#price35").text(quantity35 * 70);
  });
  $("#add36").click(function() {
    quantity36 += 1;
    $("#quantity36").text(quantity36);
    $("#finalOrder").text(quantity36);
    $("#price36").text(quantity36 * 90);
  });



  //decrement
  $("#subtract").click(function() {
    quantity -= 1;
    if (quantity < 1) {
      return (quantity = 1);
    }
    $("#quantity").text(quantity);
    $("#finalOrder").text(quantity);
    $("#price").text(quantity * 200);
  });
  $("#subtract2").click(function() {
    quantity2 -= 1;
    if (quantity2 < 1) {
      return (quantity2 = 1);
    }
    $("#quantity2").text(quantity2);
    $("#finalOrder").text(quantity2);
    $("#price2").text(quantity2 * 130);
  });
  $("#subtract3").click(function() {
    quantity3 -= 1;
    if (quantity3 < 1) {
      return (quantity3 = 1);
    }
    $("#quantity3").text(quantity3);
    $("#finalOrder").text(quantity3);
    $("#price3").text(quantity3 * 160);
  });
  $("#subtract4").click(function() {
    quantity4 -= 1;
    if (quantity4 < 1) {
      return (quantity4 = 1);
    }
    $("#quantity4").text(quantity4);
    $("#finalOrder").text(quantity4);
    $("#price4").text(quantity4 * 150);
  });
  $("#subtract5").click(function() {
    quantity5 -= 1;
    if (quantity5 < 1) {
      return (quantity5 = 1);
    }
    $("#quantity5").text(quantity5);
    $("#finalOrder").text(quantity5);
    $("#price5").text(quantity5 * 150);
  });
  $("#subtract6").click(function() {
    quantity6 -= 1;
    if (quantity6 < 1) {
      return (quantity6 = 1);
    }
    $("#quantity6").text(quantity6);
    $("#finalOrder").text(quantity6);
    $("#price6").text(quantity6 * 160);
  });
  $("#subtract7").click(function() {
    quantity7 -= 1;
    if (quantity7 < 1) {
      return (quantity7 = 1);
    }
    $("#quantity7").text(quantity7);
    $("#finalOrder").text(quantity7);
    $("#price7").text(quantity7 * 280);
  });
  $("#subtract8").click(function() {
    quantity8 -= 1;
    if (quantity8 < 1) {
      return (quantity8 = 1);
    }
    $("#quantity8").text(quantity8);
    $("#finalOrder").text(quantity8);
    $("#price8").text(quantity8 * 320);
  });
  $("#subtract9").click(function() {
    quantity9 -= 1;
    if (quantity9 < 1) {
      return (quantity9 = 1);
    }
    $("#quantity9").text(quantity9);
    $("#finalOrder").text(quantity9);
    $("#price9").text(quantity9 * 240);
  });
  $("#subtract10").click(function() {
    quantity10 -= 1;
    if (quantity10 < 1) {
      return (quantity10 = 1);
    }
    $("#quantity10").text(quantity10);
    $("#finalOrder").text(quantity10);
    $("#price10").text(quantity10 * 300);
  });
  $("#subtract11").click(function() {
    quantity11 -= 1;
    if (quantity11 < 1) {
      return (quantity11 = 1);
    }
    $("#quantity11").text(quantity11);
    $("#finalOrder").text(quantity11);
    $("#price11").text(quantity11 * 290);
  });
  $("#subtract12").click(function() {
    quantity12 -= 1;
    if (quantity12 < 1) {
      return (quantity12 = 1);
    }
    $("#quantity12").text(quantity12);
    $("#finalOrder").text(quantity12);
    $("#price12").text(quantity12 * 500);
  });
  $("#subtract13").click(function() {
    quantity13 -= 1;
    if (quantity13 < 1) {
      return (quantity13 = 1);
    }
    $("#quantity13").text(quantity13);
    $("#finalOrder").text(quantity13);
    $("#price13").text(quantity13 * 170);
  });
  $("#subtract14").click(function() {
    quantity14 -= 1;
    if (quantity14 < 1) {
      return (quantity14 = 1);
    }
    $("#quantity14").text(quantity14);
    $("#finalOrder").text(quantity14);
    $("#price14").text(quantity14 * 220);
  });
  $("#subtract15").click(function() {
    quantity15 -= 1;
    if (quantity15 < 1) {
      return (quantity15 = 1);
    }
    $("#quantity15").text(quantity15);
    $("#finalOrder").text(quantity15);
    $("#price15").text(quantity15 * 270);
  });
  $("#subtract16").click(function() {
    quantity16 -= 1;
    if (quantity16 < 1) {
      return (quantity16 = 1);
    }
    $("#quantity16").text(quantity16);
    $("#finalOrder").text(quantity16);
    $("#price16").text(quantity16 * 320);
  });
  $("#subtract17").click(function() {
    quantity17 -= 1;
    if (quantity17 < 1) {
      return (quantity17 = 1);
    }
    $("#quantity17").text(quantity17);
    $("#finalOrder").text(quantity17);
    $("#price17").text(quantity17 * 160);
  });
  $("#subtract18").click(function() {
    quantity18 -= 1;
    if (quantity18 < 1) {
      return (quantity18 = 1);
    }
    $("#quantity18").text(quantity18);
    $("#finalOrder").text(quantity18);
    $("#price18").text(quantity18 * 180);
  });
  $("#subtract19").click(function() {
    quantity19 -= 1;
    if (quantity19 < 1) {
      return (quantity19 = 1);
    }
    $("#quantity19").text(quantity19);
    $("#finalOrder").text(quantity19);
    $("#price19").text(quantity19 * 120);
  });
  $("#subtract20").click(function() {
    quantity20 -= 1;
    if (quantity20 < 1) {
      return (quantity20 = 1);
    }
    $("#quantity20").text(quantity20);
    $("#finalOrder").text(quantity20);
    $("#price20").text(quantity20 * 200);
  });
  $("#subtract21").click(function() {
    quantity21 -= 1;
    if (quantity21 < 1) {
      return (quantity21 = 1);
    }
    $("#quantity21").text(quantity21);
    $("#finalOrder").text(quantity21);
    $("#price21").text(quantity21 * 120);
  });
  $("#subtract22").click(function() {
    quantity22 -= 1;
    if (quantity22 < 1) {
      return (quantity22 = 1);
    }
    $("#quantity22").text(quantity22);
    $("#finalOrder").text(quantity22);
    $("#price22").text(quantity22 *125);
  });
  $("#subtract23").click(function() {
    quantity23 -= 1;
    if (quantity23 < 1) {
      return (quantity23 = 1);
    }
    $("#quantity23").text(quantity23);
    $("#finalOrder").text(quantity23);
    $("#price23").text(quantity23 * 150);
  });
  $("#subtract24").click(function() {
    quantity24 -= 1;
    if (quantity24 < 1) {
      return (quantity24 = 1);
    }
    $("#quantity24").text(quantity24);
    $("#finalOrder").text(quantity24);
    $("#price24").text(quantity24 * 110);
  });
  $("#subtract25").click(function() {
    quantity25 -= 1;
    if (quantity25 < 1) {
      return (quantity25 = 1);
    }
    $("#quantity25").text(quantity25);
    $("#finalOrder").text(quantity25);
    $("#price25").text(quantity25 * 120);
  });
  $("#subtract26").click(function() {
    quantity26 -= 1;
    if (quantity26 < 1) {
      return (quantity26 = 1);
    }
    $("#quantity26").text(quantity26);
    $("#finalOrder").text(quantity26);
    $("#price26").text(quantity26 * 150);
  });
  $("#subtract27").click(function() {
    quantity27 -= 1;
    if (quantity27 < 1) {
      return (quantity27 = 1);
    }
    $("#quantity27").text(quantity27);
    $("#finalOrder").text(quantity27);
    $("#price27").text(quantity27 * 170);
  });
  $("#subtract28").click(function() {
    quantity28 -= 1;
    if (quantity28 < 1) {
      return (quantity28 = 1);
    }
    $("#quantity28").text(quantity28);
    $("#finalOrder").text(quantity28);
    $("#price28").text(quantity28 * 180);
  });
  $("#subtract29").click(function() {
    quantity29 -= 1;
    if (quantity29 < 1) {
      return (quantity29 = 1);
    }
    $("#quantity29").text(quantity29);
    $("#finalOrder").text(quantity29);
    $("#price29").text(quantity29 * 125 );
  });
  $("#subtract30").click(function() {
    quantity30 -= 1;
    if (quantity30 < 1) {
      return (quantity30 = 1);
    }
    $("#quantity30").text(quantity30);

    $("#finalOrder").text(quantity30);
    $("#price30").text(quantity30 * 350);
  });
  $("#subtract31").click(function() {
    quantity31 -= 1;
    if (quantity31 < 1) {
      return (quantity31 = 1);
    }
    $("#quantity31").text(quantity31);
    $("#finalOrder").text(quantity31);
    $("#price31").text(quantity31 * 150);
  });
  $("#subtract32").click(function() {
    quantity32 -= 1;
    if (quantity32 < 1) {
      return (quantity32 = 1);
    }
    $("#quantity32").text(quantity32);
    $("#finalOrder").text(quantity32);
    $("#price32").text(quantity32 * 100);
  });
  $("#subtract33").click(function() {
    quantity33 -= 1;
    if (quantity33 < 1) {
      return (quantity33 = 1);
    }
    $("#quantity33").text(quantity33);
    $("#finalOrder").text(quantity33);
    $("#price33").text(quantity33 * 115);
  });
  $("#subtract34").click(function() {
    quantity34 -= 1;
    if (quantity34 < 1) {
      return (quantity34 = 1);
    }
    $("#quantity34").text(quantity34);
    $("#finalOrder").text(quantity34);
    $("#price34").text(quantity34 * 140);
  });
  $("#subtract35").click(function() {
    quantity35 -= 1;
    if (quantity35 < 1) {
      return (quantity35 = 1);
    }
    $("#quantity35").text(quantity35);
    $("#finalOrder").text(quantity35);
    $("#price35").text(quantity35 * 70);
  });
  $("#subtract36").click(function() {
    quantity36 -= 1;
    if (quantity36 < 1) {
      return (quantity36 = 1);
    }
    $("#quantity36").text(quantity36);
    $("#finalOrder").text(quantity36);
    $("#price36").text(quantity36 * 90);
  });
  



  
  
  $("#orderbtn1").click(function() {
    //order 1
    var food1 = $("#food1ModalCenterTitle").text();
    var quantity = parseInt($("#finalOrder").text());
    var price1 = parseInt($("#price").text());
    ttl = quantity * price1;
    var foodOrder1 = new Food(food1, quantity, 200, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
//order2
 

$("#orderbtn2").click(function() {
  var food2 = $("#food2ModalCenterTitle").text();
  var quantity2 = parseInt($("#finalOrder").text());
  var price2 = parseInt($("#price2").text());
  ttl = quantity2 * price2;
  var foodOrder2 = new Food(food2, quantity2, 130, price2);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder2.food +
        "</td>" +
        "<td>" +
        foodOrder2.quantity +
        "</td>" +
        "<td>" +
        foodOrder2.price +
        "</td>" +
        "<td>" +
        foodOrder2.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
//order3
$("#orderbtn3").click(function() {
  var food3 = $("#food3ModalCenterTitle").text();
  var quantity3 = parseInt($("#finalOrder").text());
  var price3 = parseInt($("#price3").text());
  ttl = quantity3 * price3;
  var foodOrder3 = new Food(food3, quantity3, 160, price3);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder3.food +
        "</td>" +
        "<td>" +
        foodOrder3.quantity +
        "</td>" +
        "<td>" +
        foodOrder3.price +
        "</td>" +
        "<td>" +
        foodOrder3.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order4
  $("#orderbtn4").click(function() {
    var food4 = $("#food4ModalCenterTitle").text();
    var quantity4 = parseInt($("#finalOrder").text());
    var price4 = parseInt($("#price4").text());
    ttl = quantity4 * price4;
    var foodOrder4 = new Food(food4, quantity4, 150, price4);
    $("#tablehead").show();
    
      $(".myShoppingCart").hide();
      $("table").append(
        "<tr>" +
          "<td>" +
          foodOrder4.food +
          "</td>" +
          "<td>" +
          foodOrder4.quantity +
          "</td>" +
          "<td>" +
          foodOrder4.price +
          "</td>" +
          "<td>" +
          foodOrder4.totalPrice +
          "</td>" +
          "</tr>"
      );
      $("td").css("padding-left", "20px");
      $("th").css("padding-left", "20px");
    });
  //order5
  $("#orderbtn5").click(function() {
    var food5 = $("#food5ModalCenterTitle").text();
    var quantity5 = parseInt($("#finalOrder").text());
    var price5 = parseInt($("#price5").text());
    ttl = quantity5 * price5;
    var foodOrder5 = new Food(food5, quantity5, 150, price5);
    $("#tablehead").show();
    
      $(".myShoppingCart").hide();
      $("table").append(
        "<tr>" +
          "<td>" +
          foodOrder5.food +
          "</td>" +
          "<td>" +
          foodOrder5.quantity +
          "</td>" +
          "<td>" +
          foodOrder5.price +
          "</td>" +
          "<td>" +
          foodOrder5.totalPrice +
          "</td>" +
          "</tr>"
      );
      $("td").css("padding-left", "20px");
      $("th").css("padding-left", "20px");
    });
  //order6
  var food6 = $("#food6ModalCenterTitle").text();
  var quantity6 = parseInt($("#finalOrder").text());
  var price6 = parseInt($("#price6").text());
  ttl = quantity6 * price6;
  var foodOrder6 = new Food(food6, quantity6, 160, price6);
  $("#tablehead").show();
  $(".githe6").click(function() {
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder6.food +
        "</td>" +
        "<td>" +
        foodOrder6.quantity +
        "</td>" +
        "<td>" +
        foodOrder6.price +
        "</td>" +
        "<td>" +
        foodOrder6.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order7
$("#orderbtn7").click(function() {
  var food7 = $("#food7ModalCenterTitle").text();
  var quantity7 = parseInt($("#finalOrder").text());
  var price7 = parseInt($("#price7").text());
  ttl = quantity7 * price7;
  var foodOrder7 = new Food(food7, quantity7, 280, price7);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder7.food +
        "</td>" +
        "<td>" +
        foodOrder7.quantity +
        "</td>" +
        "<td>" +
        foodOrder7.price +
        "</td>" +
        "<td>" +
        foodOrder7.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order8
$("#orderbtn8").click(function() {
  var food8 = $("#food8ModalCenterTitle").text();
  var quantity8 = parseInt($("#finalOrder").text());
  var price8 = parseInt($("#price8").text());
  ttl = quantity8 * price8;
  var foodOrder8 = new Food(food8, quantity8, 320, price8);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder8.food +
        "</td>" +
        "<td>" +
        foodOrder8.quantity +
        "</td>" +
        "<td>" +
        foodOrder8.price +
        "</td>" +
        "<td>" +
        foodOrder8.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order9
$("#orderbtn9").click(function() {
  var food9 = $("#food9ModalCenterTitle").text();
  var quantity9 = parseInt($("#finalOrder").text());
  var price9 = parseInt($("#price9").text());
  ttl = quantity9 * price9;
  var foodOrder9 = new Food(food9, quantity9, 240, price9);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder9.food +
        "</td>" +
        "<td>" +
        foodOrder9.quantity +
        "</td>" +
        "<td>" +
        foodOrder9.price +
        "</td>" +
        "<td>" +
        foodOrder9.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order10
$("#orderbtn10").click(function() {
  var food10 = $("#food10ModalCenterTitle").text();
  var quantity10 = parseInt($("#finalOrder").text());
  var price10 = parseInt($("#price10").text());
  ttl = quantity10 * price10;
  var foodOrder10 = new Food(food10, quantity10, 300, price10);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder10.food +
        "</td>" +
        "<td>" +
        foodOrder10.quantity +
        "</td>" +
        "<td>" +
        foodOrder10.price +
        "</td>" +
        "<td>" +
        foodOrder10.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order11
$("#orderbtn11").click(function() {
  var food11 = $("#food11ModalCenterTitle").text();
  var quantity11 = parseInt($("#finalOrder").text());
  var price11 = parseInt($("#price11").text());
  ttl = quantity11 * price11;
  var foodOrder11 = new Food(food11, quantity11, 290, price11);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder11.food +
        "</td>" +
        "<td>" +
        foodOrder11.quantity +
        "</td>" +
        "<td>" +
        foodOrder11.price +
        "</td>" +
        "<td>" +
        foodOrder11.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order12
$("#orderbtn12").click(function() {
  var food12 = $("#food12ModalCenterTitle").text();
  var quantity12 = parseInt($("#finalOrder").text());
  var price12 = parseInt($("#price12").text());
  ttl = quantity12 * price12;
  var foodOrder12 = new Food(food12, quantity12, 500, price12);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder12.food +
        "</td>" +
        "<td>" +
        foodOrder12.quantity +
        "</td>" +
        "<td>" +
        foodOrder12.price +
        "</td>" +
        "<td>" +
        foodOrder12.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order13
$("#orderbtn13").click(function() {
  var food13 = $("#food13ModalCenterTitle").text();
  var quantity13 = parseInt($("#finalOrder").text());
  var price13 = parseInt($("#price13").text());
  ttl = quantity13 * price13;
  var foodOrder13 = new Food(food13, quantity13, 170, price13);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder13.food +
        "</td>" +
        "<td>" +
        foodOrder13.quantity +
        "</td>" +
        "<td>" +
        foodOrder13.price +
        "</td>" +
        "<td>" +
        foodOrder13.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order14
$("#orderbtn14").click(function() {
  var food14 = $("#food14ModalCenterTitle").text();
  var quantity14 = parseInt($("#finalOrder").text());
  var price14 = parseInt($("#price14").text());
  ttl = quantity14 * price14;
  var foodOrder14 = new Food(food14, quantity14, 220, price14);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder14.food +
        "</td>" +
        "<td>" +
        foodOrder14.quantity +
        "</td>" +
        "<td>" +
        foodOrder14.price +
        "</td>" +
        "<td>" +
        foodOrder14.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order15
$("#orderbtn15").click(function() {
  var food15 = $("#food15ModalCenterTitle").text();
  var quantity15 = parseInt($("#finalOrder").text());
  var price15 = parseInt($("#price15").text());
  ttl = quantity15 * price15;
  var foodOrder15 = new Food(food15, quantity15, 270, price15);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder15.food +
        "</td>" +
        "<td>" +
        foodOrder15.quantity +
        "</td>" +
        "<td>" +
        foodOrder15.price +
        "</td>" +
        "<td>" +
        foodOrder15.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order16
$("#orderbtn16").click(function() {
  var food16 = $("#food16ModalCenterTitle").text();
  var quantity16 = parseInt($("#finalOrder").text());
  var price16 = parseInt($("#price16").text());
  ttl = quantity16 * price16;
  var foodOrder16 = new Food(food16, quantity16, 320, price16);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder16.food +
        "</td>" +
        "<td>" +
        foodOrder16.quantity +
        "</td>" +
        "<td>" +
        foodOrder16.price +
        "</td>" +
        "<td>" +
        foodOrder16.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order17
$("#orderbtn17").click(function() {
  var food17 = $("#food17ModalCenterTitle").text();
  var quantity17 = parseInt($("#finalOrder").text());
  var price17 = parseInt($("#price17").text());
  ttl = quantity17 * price17;
  var foodOrder17 = new Food(food17, quantity17, 160, price17);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder17.food +
        "</td>" +
        "<td>" +
        foodOrder17.quantity +
        "</td>" +
        "<td>" +
        foodOrder17.price +
        "</td>" +
        "<td>" +
        foodOrder17.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order18
$("#orderbtn18").click(function() {
  var food18 = $("#food18ModalCenterTitle").text();
  var quantity18 = parseInt($("#finalOrder").text());
  var price18 = parseInt($("#price18").text());
  ttl = quantity18 * price18;
  var foodOrder18 = new Food(food18, quantity18, 180, price18);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder18.food +
        "</td>" +
        "<td>" +
        foodOrder18.quantity +
        "</td>" +
        "<td>" +
        foodOrder18.price +
        "</td>" +
        "<td>" +
        foodOrder18.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order19
$("#orderbtn19").click(function() {
  var food19 = $("#food19ModalCenterTitle").text();
  var quantity19 = parseInt($("#finalOrder").text());
  var price19 = parseInt($("#price19").text());
  ttl = quantity19 * price19;
  var foodOrder19 = new Food(food19, quantity19, 120, price19);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder19.food +
        "</td>" +
        "<td>" +
        foodOrder19.quantity +
        "</td>" +
        "<td>" +
        foodOrder19.price +
        "</td>" +
        "<td>" +
        foodOrder19.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order20
$("#orderbtn20").click(function() {
  var food20 = $("#food20ModalCenterTitle").text();
  var quantity20 = parseInt($("#finalOrder").text());
  var price20 = parseInt($("#price20").text());
  ttl = quantity20 * price20;
  var foodOrder20 = new Food(food20, quantity20, 200, price20);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder20.food +
        "</td>" +
        "<td>" +
        foodOrder20.quantity +
        "</td>" +
        "<td>" +
        foodOrder20.price +
        "</td>" +
        "<td>" +
        foodOrder20.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order21
$("#orderbtn21").click(function() {
  var food21 = $("#food21ModalCenterTitle").text();
  var quantity21 = parseInt($("#finalOrder").text());
  var price21 = parseInt($("#price21").text());
  ttl = quantity21 * price21;
  var foodOrder21 = new Food(food21, quantity21, 120, price21);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder21.food +
        "</td>" +
        "<td>" +
        foodOrder21.quantity +
        "</td>" +
        "<td>" +
        foodOrder21.price +
        "</td>" +
        "<td>" +
        foodOrder21.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order22
$("#orderbtn22").click(function() {
  var food22 = $("#food22ModalCenterTitle").text();
  var quantity22 = parseInt($("#finalOrder").text());
  var price22 = parseInt($("#price22").text());
  ttl = quantity22 * price22;
  var foodOrder22 = new Food(food22, quantity22, 125, price22);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder22.food +
        "</td>" +
        "<td>" +
        foodOrder22.quantity +
        "</td>" +
        "<td>" +
        foodOrder22.price +
        "</td>" +
        "<td>" +
        foodOrder22.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order23
$("#orderbtn23").click(function() {
  var food23 = $("#food23ModalCenterTitle").text();
  var quantity23 = parseInt($("#finalOrder").text());
  var price23 = parseInt($("#price23").text());
  ttl = quantity23 * price23;
  var foodOrder23 = new Food(food23, quantity23, 150, price23);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder23.food +
        "</td>" +
        "<td>" +
        foodOrder23.quantity +
        "</td>" +
        "<td>" +
        foodOrder23.price +
        "</td>" +
        "<td>" +
        foodOrder23.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order24
$("#orderbtn24").click(function() {
  var food24 = $("#food24ModalCenterTitle").text();
  var quantity24 = parseInt($("#finalOrder").text());
  var price24 = parseInt($("#price24").text());
  ttl = quantity24 * price24;
  var foodOrder24 = new Food(food24, quantity24, 110, price24);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder24.food +
        "</td>" +
        "<td>" +
        foodOrder24.quantity +
        "</td>" +
        "<td>" +
        foodOrder24.price +
        "</td>" +
        "<td>" +
        foodOrder24.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order25
$("#orderbtn25").click(function() {
  var food25 = $("#food25ModalCenterTitle").text();
  var quantity25 = parseInt($("#finalOrder").text());
  var price25 = parseInt($("#price25").text());
  ttl = quantity25 * price25;
  var foodOrder25 = new Food(food25, quantity25, 120, price25);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder25.food +
        "</td>" +
        "<td>" +
        foodOrder25.quantity +
        "</td>" +
        "<td>" +
        foodOrder25.price +
        "</td>" +
        "<td>" +
        foodOrder25.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order26
$("#orderbtn26").click(function() {
  var food26 = $("#food26ModalCenterTitle").text();
  var quantity26 = parseInt($("#finalOrder").text());
  var price26 = parseInt($("#price26").text());
  ttl = quantity26 * price26;
  var foodOrder26 = new Food(food26, quantity26, 150, price26);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder26.food +
        "</td>" +
        "<td>" +
        foodOrder26.quantity +
        "</td>" +
        "<td>" +
        foodOrder26.price +
        "</td>" +
        "<td>" +
        foodOrder26.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order27
$("#orderbtn27").click(function() {
  var food27 = $("#food27ModalCenterTitle").text();
  var quantity27 = parseInt($("#finalOrder").text());
  var price27 = parseInt($("#price27").text());
  ttl = quantity27 * price27;
  var foodOrder27 = new Food(food27, quantity27, 170, price27);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder27.food +
        "</td>" +
        "<td>" +
        foodOrder27.quantity +
        "</td>" +
        "<td>" +
        foodOrder27.price +
        "</td>" +
        "<td>" +
        foodOrder27.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order28
$("#orderbtn28").click(function() {
  var food28 = $("#food28ModalCenterTitle").text();
  var quantity28 = parseInt($("#finalOrder").text());
  var price28 = parseInt($("#price28").text());
  ttl = quantity28 * price28;
  var foodOrder28 = new Food(food28, quantity28, 180, price28);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder28.food +
        "</td>" +
        "<td>" +
        foodOrder28.quantity +
        "</td>" +
        "<td>" +
        foodOrder28.price +
        "</td>" +
        "<td>" +
        foodOrder28.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order29
$("#orderbtn29").click(function() {
  var food29 = $("#food29ModalCenterTitle").text();
  var quantity29 = parseInt($("#finalOrder").text());
  var price29 = parseInt($("#price29").text());
  ttl = quantity29 * price29;
  var foodOrder29 = new Food(food29, quantity29, 125, price29);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder29.food +
        "</td>" +
        "<td>" +
        foodOrder29.quantity +
        "</td>" +
        "<td>" +
        foodOrder29.price +
        "</td>" +
        "<td>" +
        foodOrder29.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order30
$("#orderbtn30").click(function() {
  var food30 = $("#food30ModalCenterTitle").text();
  var quantity30 = parseInt($("#finalOrder").text());
  var price30 = parseInt($("#price30").text());
  ttl = quantity30 * price30;
  var foodOrder30 = new Food(food30, quantity30, 350, price30);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder30.food +
        "</td>" +
        "<td>" +
        foodOrder30.quantity +
        "</td>" +
        "<td>" +
        foodOrder30.price +
        "</td>" +
        "<td>" +
        foodOrder30.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order31
$("#orderbtn31").click(function() {
  var food31 = $("#food31ModalCenterTitle").text();
  var quantity31 = parseInt($("#finalOrder").text());
  var price31 = parseInt($("#price31").text());
  ttl = quantity31 * price31;
  var foodOrder31 = new Food(food31, quantity31, 150, price31);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder31.food +
        "</td>" +
        "<td>" +
        foodOrder31.quantity +
        "</td>" +
        "<td>" +
        foodOrder31.price +
        "</td>" +
        "<td>" +
        foodOrder31.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order32
$("#orderbtn32").click(function() {
  var food32 = $("#food32ModalCenterTitle").text();
  var quantity32 = parseInt($("#finalOrder").text());
  var price32 = parseInt($("#price32").text());
  ttl = quantity32 * price32;
  var foodOrder32 = new Food(food32, quantity32, 100, price32);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder32.food +
        "</td>" +
        "<td>" +
        foodOrder32.quantity +
        "</td>" +
        "<td>" +
        foodOrder32.price +
        "</td>" +
        "<td>" +
        foodOrder32.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order33
$("#orderbtn33").click(function() {
  var food33 = $("#food33ModalCenterTitle").text();
  var quantity33 = parseInt($("#finalOrder").text());
  var price33 = parseInt($("#price33").text());
  ttl = quantity33 * price33;
  var foodOrder33 = new Food(food33, quantity33, 100, price33);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder33.food +
        "</td>" +
        "<td>" +
        foodOrder33.quantity +
        "</td>" +
        "<td>" +
        foodOrder33.price +
        "</td>" +
        "<td>" +
        foodOrder33.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order34
$("#orderbtn34").click(function() {
  var food34 = $("#food34ModalCenterTitle").text();
  var quantity34 = parseInt($("#finalOrder").text());
  var price34 = parseInt($("#price34").text());
  ttl = quantity34 * price34;
  var foodOrder34 = new Food(food34, quantity34, 140, price34);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder34.food +
        "</td>" +
        "<td>" +
        foodOrder34.quantity +
        "</td>" +
        "<td>" +
        foodOrder34.price +
        "</td>" +
        "<td>" +
        foodOrder34.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order35
$("#orderbtn35").click(function() {
  var food35 = $("#food35ModalCenterTitle").text();
  var quantity35 = parseInt($("#finalOrder").text());
  var price35 = parseInt($("#price35").text());
  ttl = quantity35 * price35;
  var foodOrder35 = new Food(food35, quantity35, 70, price35);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder35.food +
        "</td>" +
        "<td>" +
        foodOrder35.quantity +
        "</td>" +
        "<td>" +
        foodOrder35.price +
        "</td>" +
        "<td>" +
        foodOrder35.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  //order36
$("#orderbtn36").click(function() {
  var food36 = $("#food36ModalCenterTitle").text();
  var quantity36 = parseInt($("#finalOrder").text());
  var price36 = parseInt($("#price36").text());
  ttl = quantity36 * price36;
  var foodOrder36 = new Food(food36, quantity36, 90, price36);
  $("#tablehead").show();
  
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder36.food +
        "</td>" +
        "<td>" +
        foodOrder36.quantity +
        "</td>" +
        "<td>" +
        foodOrder36.price +
        "</td>" +
        "<td>" +
        foodOrder36.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  
  
  if (window.location.search.indexOf("hidemyShoppingCart=1") != -1) {
    $(".myShoppingCart").hide();
    $(".viewOrders").show();
  }

  //signup
  $("#signup-form").submit(function(event) {
    event.preventDefault();
    //user's data
    var username = document.getElementById("username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var existingUsers = JSON.parse(localStorage.getItem("allEntries"));
    if (existingUsers == null) existingUsers = [];
    var user = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    existingUsers.push(user);
    localStorage.setItem("allEntries", JSON.stringify(existingUsers));
    this.reset();
    window.location.replace("../login.html");
  });
  //sign in
  $("#login-form").submit(function(event) {
    event.preventDefault();
    var email = document.getElementById("my-email").value;
    var password = document.getElementById("my-password").value;
    var usersData = JSON.parse(localStorage.getItem("allEntries"));
    var emailArray = [];
    var passwordArray = [];
    usersData.forEach(function(user) {
      emailArray.push(user.email);
      passwordArray.push(user.password);
    });
    if (emailArray.includes(email) && passwordArray.includes(password)) {
      window.location.replace("../hotelsPage.html");
      // alert("Logged in successfull");
      $("#logout").show();
      $("#log").hide();
    } else {
      alert("Incorrect email or password");
    }

    this.reset();
  });
});
