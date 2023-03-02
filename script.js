let titleone=document.querySelector(".title")
let header=document.querySelector("h1")
let storyopening=document.querySelector(".story-opening")
let buttonone=document.querySelector(".option-one")
let buttontwo=document.querySelector(".option-two")
let optiononescreen=document.querySelector(".option-one-screen")
let optiontwoscreen=document.querySelector(".option-two-screen")
let optiononeend=document.querySelector(".option-one-end")
let optiontwoend=document.querySelector(".option-two-end")
let buttonthree=document.querySelector(".option-three")
let buttonfour=document.querySelector(".option-four")
let buttonfive=document.querySelector(".option-five")
let buttonsix=document.querySelector(".option-six")
let winscreen=document.querySelector(".winscreen")
let losescreen=document.querySelector(".losescreen")

buttonone.onclick = function(){
 optiononescreen.style.display = "block";
 storyopening.style.display = "none";
 buttonone.style.display = "none";
 buttontwo.style.display = "none";
 buttonthree.style.display = "block";
 titleone.style.display = "none";
};

buttontwo.onclick=function(){
  optiontwoscreen.style.display = "block";
  storyopening.style.display = "none";
  buttonone.style.display = "none";
  buttontwo.style.display = "none";
  buttonfour.style.display = "block";
  titleone.style.display = "none";
};


buttonthree.onclick=function(){
 optiononeend.style.display = "block";
 optiononescreen.style.display = "none";
 buttonthree.style.display = "none";
 buttonfive.style.display = "block";
};

buttonfour.onclick=function(){
 optiontwoend.style.display = "block";
 optiontwoscreen.style.display = "none";
 buttonfour.style.display = "none";
 buttonsix.style.display = "block";
};

buttonfive.onclick=function(){
 winscreen.style.display = "block";
 optiononeend.style.display = "none";
 buttonfour.style.display = "none";
 buttonfive.style.display = "none";
}

buttonsix.onclick=function(){
 losescreen.style.display = "block";
 optiontwoend.style.display = "none";
 buttonsix.style.display = "none";
}
