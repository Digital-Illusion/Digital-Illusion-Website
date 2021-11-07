var up = this.document.getElementById('up');
window.addEventListener('scroll', function(){
  if(this.window.scrollY > 0)
  {
    up.style.visibility = "visible";
    up.style.bottom = "10%";
  }else
  {
    up.style.visibility = "hidden";
    up.style.bottom = "100%";
  }
})
up.addEventListener('click', function(){
  window.scrollTo(0, 0);
})
