let slideIndex = 0;
showSlides();

function showSlides() {
  // let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//get to top
// Get the button:
let mybutton = document.getElementById("myButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//contactForm
function checkNameLastName(){
    var name = document.getElementById("tblName");
    var lname = document.getElementById("lName");
    var regExpName = /^[A-Z][a-z]{2,14}\s[A-Z][a-z]{2,21}$/;


    if (!regExpName.test(name.value)){
      document.getElementById("buttonn").disabled = true;
      lname.style.color="red";
      lname.innerHTML="Not ok";
    } else {
      document.getElementById("buttonn").disabled = false;
      lname.style.color="green";
      lname.innerHTML="ok!";
    }
  }
  function alert(){
    window.prompt("Hello\nHow are you?");
  }


  //email validation

  var mail1;

  function checkMyMailAddress() {
    var mail = document.getElementById("mailm");
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (!validate.test(mail.value)){
      document.getElementById("buttonm").disabled = true;
      lmail.style.color="red";
      lmail.innerHTML="Not ok";
    } else {
      document.getElementById("buttonm").disabled = false;
      lmail.style.color="green";
      lmail.innerHTML="ok!";
    } 
  }
  function myFunction() {
    window.prompt("How is it going")
  }

