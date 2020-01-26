 var url0 = 'index.html';


 document.querySelector(".modal-close-button2").addEventListener('click',function(){
   //    alert("hello!")
   window.open(url0, "_self");
    }
   );
   document.querySelector(".modal-close-button1").addEventListener('click',function(){
    //    alert("hello!")
    window.open(url0, "_self");
     }
    );



function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

