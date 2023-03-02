const nav = document.querySelector(".nav");
        const togglemenu = document.querySelector(".toggle__menu");

        togglemenu.addEventListener("click", ()=>{
            togglemenu.classList.toggle("open");
            nav.classList.toggle("open");
        })