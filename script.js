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
  // console.log(`sticky div: offset: ${navTop}`);
  // console.log(window.scrollY);

  if (window.scrollY >= navTop) {    
    stickyNav.classList.add('fixed');
  } else {
    stickyNav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);

let header = document.querySelector('.header');


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
