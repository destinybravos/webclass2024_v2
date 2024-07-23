

const toggleMobileNav = ()=>{
    const navMenu = document.getElementById("nav-menu");
   navMenu.style.left=='-320px'? navMenu.style.left='16px': navMenu.style.left="-320px"
}

const navBtn = document.getElementById("mobile-nav-icon");
navBtn.addEventListener("click", toggleMobileNav)