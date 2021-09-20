/* Opens Nav bar when someone clicks on span element
makes span element display none when active*/
const mQuery = window.matchMedia('(max-width: 999px)');

function openNav(e){
      document.getElementById('main-nav').style.width="100%";
      if(document.getElementById('main-nav').style.width="100%"){
         document.getElementById('nav-btn').style.display="none";
      }
   }


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