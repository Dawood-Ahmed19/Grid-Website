window.addEventListener('scroll',()=>{
    const nav = document.querySelector('.nav--header');
    if(window.pageYOffset>0){
      nav.classList.add("add--shadow");
    }else{
      nav.classList.remove("add--shadow");
    }
  });