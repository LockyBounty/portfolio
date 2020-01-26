const URL1 = "projet1.html";
const URL2 = "projet2.html";
const URL3 = "projet3.html";
const URL4 = "projet4.html";
const URL5 = "projet5.html";
const URL6 = "projet6.html";
const URL7 = "projet7.html";
const URL8 = "projet8.html";


let menu = document.querySelector(".nav-toggle");

document.querySelector("#nav-check1").addEventListener("click", function() {
  menu.checked = false;
});
document.querySelector("#nav-check2").addEventListener("click", function() {
  menu.checked = false;
});
document.querySelector("#nav-check3").addEventListener("click", function() {
  menu.checked = false;
});
document.querySelector("#nav-check4").addEventListener("click", function() {
  menu.checked = false;
});

// document.getElementById('projet1').addEventListener('mouseover',function(){
//         console.log("hello!")

//      }
//     );

document.getElementById("projet1").addEventListener("click", function() {
  //    alert("hello!")
  // window.open(URL1, '_blank');
  window.open(URL1, "_self");
});
document.getElementById("projet2").addEventListener("click", function() {
  window.open(URL2, "_self");
});

document.getElementById("projet3").addEventListener("click", function() {
  window.open(URL3, "_self");
});

document.getElementById("projet4").addEventListener("click", function() {
  window.open(URL4, "_self");
});

document.getElementById("projet5").addEventListener("click", function() {
  window.open(URL5, "_self");
});

document.getElementById("projet6").addEventListener("click", function() {
  window.open(URL6, "_self");
});

document.getElementById("projet7").addEventListener("click", function() {
  window.open(URL7, "_self");
});


// document.querySelector('.content2').addEventListener('click',function(){
//     console.log("hello!")
//  }
//  );



