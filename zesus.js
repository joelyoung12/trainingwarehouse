// var nav= document.querySelector("nav").offsetTop;
// function stickyNav(){
//     if(window.addEventListener("scroll")>550);{
//         alert("hello")
//     }
// }
// window.addEventListener("scroll", stickyNav);

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

// window.addEventListener("scroll", function(){
//   var header = document.querySelector("nav");
//   header.classList.toggle("sticky", window.scrollY > 150);
// })


// var  firstName="jon";
// var lastName="james";
//  var text=`wellcome ${firstName}, ${lastName}`;


// var x= 3.14;
// var y= 3;


// $(document).ready( function(){
//   $(window).scroll( function(){
//     $(".yoo").css("position","fixed")
//     $(".yoo").css("top","10")
//   })
// })



// var fruit=["oranges","mango", "pawpaw"]
// fruit.reverse()
// document.getElementById("eye").innerHTML= fruit;

// var point=[,2,100,39,1,5,3,3];
// point.sort(function(a,b){return a-b});
// document.getElementById("eye").innerHTML=point;


// var numbers= [23,1,4,5,6,8];
// txt="";
// numbers.forEach(myfunction);
// function myFunction(value){
//   txt += value + "<br>"

// }

// window.addEventListener('scroll', ()=>{
//   var content= document.querySelector("#row-effect");
//   var contentPosition= content.getBoundingClientRect().top;
//   var screenPosition = window.innerHeight;
//   if(contentPosition < screenPosition){
//     content .classList.add("active");
//   }else{
//     content.classList.remove("active")
//   }
// })

// $(document).ready(function(){
//   $("#icon-menu").click(function(){
//     $("nav").toggleClass("slow");
//   })
// })

$("#icon-menu"). click(function(){
  var navs=$("nav"," nav.links li a");
  navs = show(). css("width","100%");
  navs = hide() .css("width" ,"100%");
  navs.css("width","100%") . toggle().fadeIn(slow);
})


// var navLinks = document.getElementById("holder-nav");
// function showMenu(){
//   navLinks .style.marginLeft="300"
// }


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



$(document).ready( function(){
  $(".vie").click( function(){
    $(".viewmoreinfo").slideDown()
  });
  $("#closeT").click( function(){
    $(".viewmoreinfo").hide()
    

  })
})






$("document").ready( function(){
  $("#arrow").click(function(){
    $("nav").fadeToggle()
  })
})