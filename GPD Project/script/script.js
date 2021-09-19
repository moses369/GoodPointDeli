/* Opens Nav bar when someone clicks on span element
 makes span element display none when active*/

function openNav(){
   document.getElementById('main-nav').style.width="100%";
   if(document.getElementById('main-nav').style.width="100%"){
      document.getElementById('nav-btn').style.display="none";
   }
}

// close when someone clicks on 'x' symbolinside overlay
function closeNav(){
   document.getElementById('main-nav').style.width = "0%";
   if( document.getElementById('main-nav').style.width = "0%"){
      document.getElementById('nav-btn').style.display="block";
   }
}

// /* Sticky Navbar*/


// // get navbar
// const topNav = document.querySelector('#header');

// // Get the offset position of the navbar
// let sticky = topNav.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNav() {
//    if (window.scrollY >= sticky) {
//       topNav.classList.add('sticky');
//    } else {
//       topNav.classList.remove('sticky');
//    }
// }
// // when user scrolls execute function
// window.addEventListener('scroll',stickyNav);
