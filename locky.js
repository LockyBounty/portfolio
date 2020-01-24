const URL1 = "projet1.html"

let menu = document.querySelector('.nav-toggle');

document.querySelector('#nav-check1').addEventListener('click',function(){
   menu.checked = false
});
document.querySelector('#nav-check2').addEventListener('click',function(){
   menu.checked = false
});
document.querySelector('#nav-check3').addEventListener('click',function(){
   menu.checked = false
});
document.querySelector('#nav-check4').addEventListener('click',function(){
   menu.checked = false
});






document.getElementById('projet1').addEventListener('mouseover',function(){
        console.log("hello!")
        
     }
    );
document.getElementById('projet1').addEventListener('click',function(){
//    alert("hello!")
// window.open(URL1, '_blank');
window.open(URL1, '_self');
 }
);

// document.querySelector('.content2').addEventListener('click',function(){
//     console.log("hello!")
//  }
//  );

 document.querySelector('.slider-txt').addEventListener('click',function(){
    console.log("hello!")
 }
 );





// $('#manual-ajax').click(function(event) {
//    event.preventDefault();
//    this.blur(); // Manually remove focus from clicked link.
//    $.get(this.href, function(html) {
//      $(html).appendTo('body').modal();
//    });
//  });

//  $("#manual-ajax").modal({
//    escapeClose: false,
//    clickClose: false,
//    showClose: false
//  });

