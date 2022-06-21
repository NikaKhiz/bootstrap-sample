const toggler = document.querySelector(".navbar-toggler");
let clicked = false;
toggler.addEventListener("click",function(){
    clicked = !clicked;
    if(clicked){
        this.classList.add("open")
    }else{
        this.classList.remove("open")
    }
});



