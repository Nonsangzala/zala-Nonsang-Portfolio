document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });
});
