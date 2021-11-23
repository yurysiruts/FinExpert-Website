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

// Toggle navbar elements & Drop down the submenu

const navItems = document.querySelectorAll('ul.navbar-nav li.navbar-has-dropdown');
console.log(navItems)

navItems.forEach((item, i) => {
  // toggling rotating shevron
  item.addEventListener('mouseover', (e) => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('focus');
    }
    item.classList.add('focus');
  });
  
  // document.addEventListener('mousemove', (e) => {
  //   console.log(e.target);
  //   if(!e.target.classList.contains('navbar-has-dropdown') && e.target !== item.children[0] && e.target !== item.children[1] && e.target !== item.children[2] && !e.target.classList.contains('fas') && e.target !== item.children[2] && !e.target.classList.contains('navbar-nav-wrap-inner') && !e.target.classList.contains('navbar-nav-wrap') && !e.target.classList.contains('navbar-submenu') && !e.target.classList.contains('navbar-submenu-li') && !e.target.classList.contains('navbar-submenu-li-link')) {
  //     setTimeout(() => {
  //       item.classList.remove('focus');
  //     }, 800);
  //   }
  // });

  item.addEventListener('mouseleave', (e) => {
    setTimeout(() => {
      item.classList.remove('focus');
    }, 800);
  });
  
  // submenu popup/hide
  item.children[1].addEventListener('click', (e) => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('opened');
    }
    item.classList.add('opened');
  });

  document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('fa-chevron-down')) {
      item.classList.remove('opened');
    }
  });
});

// Sticky header

const stickyNav = document.querySelector('.navbar-sticky');
let navTop = stickyNav.offsetTop;


function fixedNav() {
  console.log(`sticky div: offset: ${navTop}`);
  console.log(window.scrollY);
  
  if(window.innerWidth >= 992) {
    if (window.scrollY >= navTop) {    
      stickyNav.classList.add('fixed');
    } else {
      stickyNav.classList.remove('fixed');    
    }
  }
}

window.addEventListener('scroll', fixedNav);

// let header = document.querySelector('.header');


// Search field toggle

const toggleBtn = document.querySelector('.rd-search-toggle');
const searchField = document.querySelector('.rd-search');
const searchBtn = document.querySelector('.rd-search-toggle i.fa-search');
const closeBtn = document.querySelector('.rd-search-toggle i.fa-times-circle');

toggleBtn.addEventListener('click', (e) => {

  console.log(e.target);

  if(window.outerWidth >= 1200) {
    searchField.classList.add('active');
    searchBtn.classList.remove('active');
  };
  
  if(window.outerWidth < 1200) {
    searchField.classList.add('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.add('active');
  };
  if(e.target == closeBtn && window.outerWidth < 1200) {
    searchField.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.add('active');
    searchBtn.style.color = "#fff";
  };
});


// + Observing changes in sticky nav class, toggling search field

let prevClassState = stickyNav.classList.contains('fixed');

console.log(prevClassState);

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      if(mutation.attributeName == "class"){
          let currentClassState = mutation.target.classList.contains('fixed');

          if(prevClassState !== currentClassState) {
            prevClassState = currentClassState;
            if(currentClassState) {
              console.log("class added!");
              searchField.classList.remove('active');
              
              if(window.outerWidth >= 1200) {
                searchBtn.classList.add('active');
                closeBtn.classList.remove('active');
              } else {
                searchBtn.classList.add('active');
                closeBtn.classList.remove('active');
              }
            } else {
              console.log("class removed!");
              searchField.classList.remove('active');
              searchBtn.classList.add('active');
              if(window.outerWidth >= 1200) {
                searchBtn.classList.add('active');
                closeBtn.classList.remove('active');
              } else {
                searchBtn.classList.add('active');
                closeBtn.classList.remove('active');
              }
            }
          };
      }
  });
});
observer.observe(stickyNav, {attributes: true});


// Click search, toggle label

const rdInputField = document.getElementById('rd-search-form-input');
const rdLabel = document.querySelector('.rd-input-label');

rdInputField.addEventListener('click', () => {
  rdLabel.classList.add('focus');
});

document.addEventListener('click', (e) => {
  if(!e.target.classList.contains('form-control') && rdInputField.value === '') {
    rdLabel.classList.remove('focus');
  }
});


// Mobile version (Navbar particularly)

const navbar = document.querySelector('.navbar-inner');
const navbarInfo = document.querySelector('.navbar-info');
const navbarInfoBtn = document.querySelector('.nav-btn.open-btn');
const navbarInfoAside = document.querySelector('.navbar-aside');
const pcMenu = document.getElementById('navbar-nav-pc');
const mobileMenu = document.getElementById('navbar-nav-mobile');
const mainNavigation = document.querySelector('.navbar-sticky')

window.addEventListener('resize', resizingOccure);

function resizingOccure() {

  if(window.innerWidth <= 991) {
    // Hide first block of nav
    navbar.children[0].style.display = "none";
    // Hide navigation info aside component
    navbarInfoAside.style.display = "none";
    // Show Button
    navbarInfoBtn.style.display = "block";
    // Hide PC version of navbar menu
    pcMenu.style.display = "none";
    // Show Mobile version of navbar menu
    mobileMenu.style.display = "block";
    // Switch navbar to mobile version
    mainNavigation.classList.add('mobile');
    // Get rid of fixed navbar on mobile version
    mainNavigation.classList.remove('fixed');
  } else {
    // Hide Button
    navbarInfoBtn.style.display = "none";
    // Show first block of nav
    navbar.children[0].style.display = "block";
    // Show navigation info aside component
    navbarInfoAside.style.display = "block";
    // Show PC version of navbar menu
    pcMenu.style.display = "block";
    // Hide Mobile version of navbar menu
    mobileMenu.style.display = "none";
    // Hide navabr to mobile version
    mainNavigation.classList.remove('mobile');
  }
}

window.onload = function() {
  if(window.innerWidth >= 992) {
    // Hide Navbar fa-times Button
    navbarInfoBtn.style.display = "none";
    // Hide Mobile version of navbar menu
    mobileMenu.style.display = "none";
  } else if(window.innerWidth < 992) {
    navbarInfoBtn.style.display = "block";
    navbarInfoAside.style.display = "none";
    // Hide first block of nav
    navbar.children[0].style.display = "none";
    // Hide PC version of navbar menu
    pcMenu.style.display = "none";
    // Switch navbar to mobile version
    mainNavigation.classList.add('mobile');
    // Get rid of fixed navbar on mobile version
    mainNavigation.classList.remove('fixed');
  }
};

// const menuWrapper = document.querySelector(".menu-wrapper");
const hasCollapsible = document.querySelectorAll(".has-collapsible");
const toggleSideMenu = document.querySelector('button.open-btn');

// Sidenav Toggle
toggleSideMenu.addEventListener("click", () => {
  stickyNav.classList.toggle("visible");
  toggleSideMenu.children[0].classList.toggle("hide");
  toggleSideMenu.children[1].classList.toggle("hide");
});

// closeMenu.addEventListener("click", function () {
//   menuWrapper.classList.remove("offcanvas");
// });

// Collapsible Menu Item in Sidenav
hasCollapsible.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    collapsible.classList.toggle("active");

    // Close Other Collapsible
    hasCollapsible.forEach(function (otherCollapsible) {
      if (otherCollapsible !== collapsible) {
        otherCollapsible.classList.remove("active");
      }
    });
  });
});
