const sideBar = document.getElementById('navSide');
const openBtn = document.getElementById('opn_toggle');
const closeBtn = document.getElementById('cls_toggle');

// window.onload = function() {
//   openBtn.style.display = 'block';  
//   closeBtn.style.display = 'none'; 
// }


function toggle_nav() {
  
  if ( openBtn.style.display == 'block' ) {

    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';

    // nav :
    sideBar.classList.add('openx');

  }else{

    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';

    // nav :
    sideBar.classList.remove('openx');
  }


}



