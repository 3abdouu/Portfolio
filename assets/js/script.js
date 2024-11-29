'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/*clarity*/
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "p65rllr1wz");

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting the normal way

//   emailjs.sendForm('service_w2cpkrs', 'template_w6x8chi', this)
//       .then(function() {
//           alert('Email sent successfully!');
//           window.location.reload(); 
//       }, function(error) {
//           alert('Failed to send email, please try again later.');
//           console.log('Failed...', error);
//       });
// });
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  emailjs.sendForm('service_w2cpkrs', 'template_w6x8chi', this)
  .then(function() {
      // Show SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Your message has been sent successfully.',
        confirmButtonText: 'OK',
        width: '40%', // Adjust this value as needed, default is '32rem'
        padding: '1.5rem', // Adjust padding if necessary
        customClass: {
            popup: 'swal2-custom', // Optional: if you want to define custom styles
        }
    }).then(() => {
        window.location.reload();
    });
    
  }, function(error) {
      // Show SweetAlert error message
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
          confirmButtonText: 'OK'
      });
  });
});
