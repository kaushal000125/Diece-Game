var rno1 = Math.floor(Math.random()*6)+1;
var rno2 = Math.floor(Math.random()*6)+1;
 var rimg1 = "dice" + rno1 +".png";
 var rimg2 = "dice" + rno2 + ".png";
 //var  rimg1src = "images/" + rimg1;
  //var  rimg2src = "images/" + rimg2;
document.querySelectorAll("img")[0].setAttribute("src", rimg1);
document.querySelectorAll("img")[1].setAttribute("src", rimg2);
if(rno1>rno2)
{
  document.querySelector("h1").textContent="🎖 Player 1 Wins!";
}
else if(rno1<rno2)
{
  document.querySelector("h1").textContent="🎖 Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Game Draw";
}
