
var slot1 = ["http://ladyharleyrecipes.com/recipefiles/Cherries.ico", "http://iconshow.me/media/images/Business/finance-icons/png/256/coins.png", "https://cdn2.iconfinder.com/data/icons/casino-cartoon/512/sim4329-256.png"]
var slot2 = ["http://ladyharleyrecipes.com/recipefiles/Cherries.ico", "http://iconshow.me/media/images/Business/finance-icons/png/256/coins.png", "https://cdn2.iconfinder.com/data/icons/casino-cartoon/512/sim4329-256.png"]
var slot3 = ["http://ladyharleyrecipes.com/recipefiles/Cherries.ico", "http://iconshow.me/media/images/Business/finance-icons/png/256/coins.png", "https://cdn2.iconfinder.com/data/icons/casino-cartoon/512/sim4329-256.png"]
var total = 25;
var newTotal = 0;
var current = 0;
var slotRandom1, slotRandom2, slotRandom3;
function slots(){
   slotRandom1 = Math.round(Math.random()* slot1.length -1 )
  $("#first").attr("src", slot1[slotRandom1]);
   slotRandom2 = Math.round(Math.random()* slot2.length -1 )
  $("#second").attr("src", slot2[slotRandom2]);
   slotRandom3 = Math.round(Math.random()* slot3.length -1 )
  $("#third").attr("src", slot3[slotRandom3]);
}

$(document).ready(function(){
  $("#min").on("click",function(){
    total -= 1;
    newTotal = total;
    $("#total").text("You have : "+newTotal+" !");
    $("#spin").on("click",function(){
      slots();
      if( slotRandom1 === slotRandom2 && slotRandom1 === slotRandom3 && slotRandom2 === slotRandom3){
        $("#winLose").text("Winner!");
        newTotal += 2;
        $("#total").text("You have : "+newTotal+" !");
      }
       else if(slotRandom1 != slotRandom2 || slotRandom1 != slotRandom3 || slotRandom2 != slotRandom3){
        $("#winLose").text("Try Again");
        newTotal -= 2;
        $("#total").text("You have : "+newTotal+" !");

   }
   if(total <= 0 || newTotal <= 0){
     alert("Looks like you're out of money, pal!")
   }
    });
  });


  $("#max").on("click",function(){
    total -= 5;
    newTotal = total;
    current = newTotal;
    $("#total").text("You have : "+newTotal+" !");
    $("#spin").on("click",function(){
      slots();
      if( slotRandom1 === slotRandom2 && slotRandom1 === slotRandom3){
        $("#winLose").text("Winner!");
        newTotal += 10;
        $("#total").text("You have : "+newTotal+" !");
      }
       else if(slotRandom1 != slotRandom2 || slotRandom1 != slotRandom3 || slotRandom2 != slotRandom3){
        $("#winLose").text("Try Again!");
        newTotal -= 5;
        $("#total").text("You have : "+newTotal+" !");
      }
      if (newTotal <= 0 || total <= 0){
        alert("Looks like you're out of money, pal!")
      }
    });

  });

})
