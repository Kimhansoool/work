document.addEventListener("scroll",(e)=>{
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const windowTop = window.scrollY;
    console.log(windowTop);
    

    if(windowTop >= headerHeight){
        header.classList.add('on');
    }
    else{
        header.classList.remove('on');
    }
});

document.addEventListener("click", (e) =>{
    const btn = document.querySelector('.btn_menu');
    // console.log(btn);
    const moMenu = document.querySelector('.toggle_menu');
    console.log(moMenu);

    if(moMenu.style.display === "block"){
        moMenu.style.display = "none";
    } else{
        moMenu.style.display = "block";
    }
    

});
