let searchbtn = document.querySelector('#search');
let searchform = document.querySelector('.head .search-bar');

searchbtn.onclick = () => {
    searchform.classList.toggle('active');
    menu.classList.remove('active');
}
function lowercase(){
    const a =document.getElementById("Name").style.textTransform='lowercase';
    
}
function uppercase(){
    const a =document.getElementById("Email").style.textTransform='lowercase';
}
let menu = document.querySelector('.navbar');
document.querySelector('#bars').onclick = () => {
    menu.classList.toggle('active');
    searchform.classList.remove('active');

}
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 480) {
      document.querySelector('.navbar').classList.add('hidden');
    } else {
      document.querySelector('.navbar').classList.remove('hidden');
    }
  });
  
window.onscroll = () => {
    menu.classList.remove('active');
    searchform.classList.remove('active');
    {

        if (window.scrollY > 500) {
            document.querySelector('.header').classList.add('active');

        } else {


            document.querySelector('.header').classList.remove('active');
        }
    }
}

