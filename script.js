// Responsive Tabs

const tabsItems = document.querySelectorAll('.resp-tabs-list li');
const tabsCont = document.querySelectorAll('.resp-tab-content');

tabsItems.forEach((item, i) => {
  // console.log(`Item ${i}: '${item.textContent}' with classes: ${item.className}`);
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(tabsItems);

    if(e.target.className !== 'resp-tab-item resp-tab-active') {
      
      tabsItems.forEach(item => item.classList = 'resp-tab-item');
      e.target.className = 'resp-tab-item resp-tab-active';
      // console.log(e.target);

      tabsCont.forEach(item => {
        item.classList.remove('resp-tab-content-active');
        item.style.display = "none";
      });

      tabsCont[i].classList.add('resp-tab-content-active');
      // console.log(tabsCont);
      setTimeout(() => {
        reloadTabsContent(i);
      }, 125)
    } 
  })
});

const reloadTabsContent = function(i) {
  tabsCont[i].style.display = "block";
};



// Label Opacity 0 on Input click

const footerInput = document.querySelector('#footer-contact-email');
const footerLabel = document.querySelector('#footer-contact-label');
const errorSpan = document.querySelector('.form-validation');

// Hide label
footerInput.addEventListener('click', (e) => {
  e.target.labels[0].classList.remove('rd-input-label-1');
  e.target.labels[0].classList.add('rd-input-label-0');
  footerInput.classList.add('clicked');
});


// Show label
document.addEventListener('click', (e) => {
  
  if(e.target.id !== "footer-contact-email" && footerInput.value == '') {
    footerLabel.classList.add('rd-input-label-1');
    footerLabel.classList.remove('rd-input-label-0');
  };

  if(e.target.classList.contains('footer-btn')) {
    e.preventDefault();
    footerLabel.classList.remove('rd-input-label-1');
  }
});


// To Top Btn

const toTop = document.getElementById('ui-to-top');

document.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
})

toTop.addEventListener('click', (e) => {
  e.preventDefault();

  $('html, body').animate({scrollTop:0}, '300');
});

// RD NAVBAR

$(document).ready(function() {

  // RD Navbar 
  o = $('.rd-navbar');
  o.RDNavbar({}); // Additional options

});

// Toggle navbar elements

const navItems = document.querySelectorAll('ul.navbar-nav li');

navItems.forEach((item, i) => {
  item.addEventListener('mouseenter', (e) => {
    if(e.target.classList.contains('navbar-has-dropdown')) {
      e.target.classList.add('focus');
    };
  });
  
  item.addEventListener('mouseleave', (e) => {
    if(e.target.classList.contains('navbar-has-dropdown')) {
      e.target.classList.remove('focus');
    };
  });
});

// Sticky header

const stickyNav = document.querySelector('.navbar-sticky');
let navTop = stickyNav.offsetTop;


function fixedNav() {
  console.log(`sticky div: offset: ${navTop}`);
  console.log(window.scrollY);

  if (window.scrollY >= navTop) {    
    stickyNav.classList.add('fixed');
  } else {
    stickyNav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);

let header = document.querySelector('.header');
