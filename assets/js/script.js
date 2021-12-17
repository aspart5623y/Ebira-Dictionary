/* ========================  P R E L O A D E R  ======================= */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('preloader').classList.add('loaded');
        ready()
    });
} else {
    ready()
}


function ready() {  
    
  
}


function showMenu() {
    document.querySelector('.navbar-collapse').classList.add('active');
    document.querySelector('.sidebar-overlay').classList.add('active');
}




function closeMenu() {
    document.querySelector('.navbar-collapse').classList.remove('active');
    document.querySelector('.sidebar-overlay').classList.remove('active');

}