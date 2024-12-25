// Toggle Class Active
const sidebar = document.querySelector('.navbar-nav');
// Hamburger Menu Diclick
document.querySelector('#hamburger-menu').onclick = () => {
    sidebar.classList.toggle('active')
};

// Kllik di luar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !sidebar.contains(e.target)){
        sidebar.classList.remove('active');
    }
});