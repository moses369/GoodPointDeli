/* Opens Nav bar when someone clicks on span element
makes span element display none when active*/
function openNav(e){
      document.getElementById('main-nav').style.width="100%";
      if(document.getElementById('main-nav').style.width="100%"){
         document.getElementById('nav-btn').style.display="none";
      }
   }
/*mQuery function will only work if the screen width is true to the values */
   const mQuery = window.matchMedia('(max-width: 999px)');
// close when someone clicks on 'x' symbolinside overlay
if(mQuery.matches){
   function closeNav(e){ 
      document.getElementById('main-nav').style.width = "0%";
      if( document.getElementById('main-nav').style.width = "0%"){
         document.getElementById('nav-btn').style.display="block";
      }
   }
}
mQuery.addEventListener(closeNav);

// Opens form when pressing the send message button

function openForm(){
   document.querySelector('.popup-form').style.display="block";
   if(document.querySelector('.popup-form').style.display="block"){
      document.querySelector('#vf-btn').style.display = "none";
      document.querySelector('.cancel').style.display = "block";
   }
}
// closes for when pressed
function closeForm(){
   document.querySelector('.popup-form').style.display="none";
   if(document.querySelector('.popup-form').style.display="none"){
      document.querySelector('#vf-btn').style.display = "block";
      document.querySelector('.cancel').style.display = "none";
   }
}
