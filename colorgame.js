var colors=generaterandomcolor(numsquare);
var numsquare=6;
var h= document.querySelector("h1")
var message=document.querySelector("#message")
var squares=document.querySelectorAll(".squares");
var pickedcolor=pickcolor();
var displaycolor=document.getElementById('displaycolor')
var reset = document.querySelector("#reset")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")

displaycolor.textContent=pickedcolor;
 for (var i = 0; i < squares.length; i++) {
 	squares[i].style.background= colors[i];
    squares[i].addEventListener("click",function(){
    	var clickedcolor=this.style.background;
  	 if (pickedcolor===clickedcolor) {
  	 	message.textContent="Correct!"
  	 	changecolor(clickedcolor);
  	 	h.style.background=clickedcolor;
  	 	reset.textContent="Play Again?"

  	 }
  	 else{
  	 	this.style.background="#232323";
  	 	message.textContent="Try Again";
  	 }
  });


 }
 function changecolor(color) {
 	for(i=0; i<squares.length; i++){
 		squares[i].style.background=color;
 	}
 }
 function pickcolor() {
  	var num=Math.floor(Math.random()*colors.length)
  	return colors[num];
  } 

  function generaterandomcolor(no){
  	var arr = []
  	for(i =0 ; i< no ; i++){
      arr.push(randomcolor());
  	}
  	return arr;
  }

  function randomcolor(){
  	var r = Math.floor(Math.random()*256);
  	var g = Math.floor(Math.random()*256);
  	var b = Math.floor(Math.random()*256);
     return "rgb(" + r +  ", " + g + ", "   + b + ")"
  }
     reset.addEventListener("click",function(){
	colors = generaterandomcolor(numsquare);
	pickedcolor=pickcolor();
	displaycolor.textContent=pickedcolor;
	this.textContent="New Color";
	 message.textContent="";
	for(i = 0; i < squares.length ; i++){
		squares[i].style.background=colors[i];
	}
	h.style.background="steelblue";
})
     easy.addEventListener("click",function(){
     	hard.classList.remove("selected")
     	easy.classList.add("selected")
     	numsquare=3;
     	colors=generaterandomcolor(numsquare);
     	pickedcolor=pickcolor();
     	displaycolor.textContent=pickedcolor;
     	for(i=0; i<squares.length;i++){
         if (colors[i]){
         	squares[i].style.background=colors[i];
         }else{
         	squares[i].style.display="none";
         }
     	}

     })
     
hard.addEventListener("click",function(){
easy.classList.remove("selected")
hard.classList.add("selected")
numsquare=6;
 colors=generaterandomcolor(numsquare);
     	pickedcolor=pickcolor();
     	displaycolor.textContent=pickedcolor;
     	for(i=0; i<squares.length;i++){
         
         	squares[i].style.background=colors[i];
         
         	squares[i].style.display="block";
       }
     	
})

   


  
 

  