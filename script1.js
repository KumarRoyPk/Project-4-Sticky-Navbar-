window.addEventListener('scroll',function(){
    let nav = document.getElementById('navbar');
    if(window.pageYOffset>=200)
    {
       nav.classList.add("sticky");
    }
    else
    {
        nav.classList.remove("sticky");  
    }
})