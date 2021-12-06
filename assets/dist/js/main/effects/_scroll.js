window.onscroll = function(){
    /**
     * HEADER SCROLL
     */

    if(window.scrollY > 100){
        document.querySelector("header").classList.add("active")
    }else{
        document.querySelector("header").classList.remove("active")
    }

    /**
     * REMOVE SIDEBAR
     */
     let sdb = document.querySelector("sidebar")

    if(sdb.classList.contains("active-sidebar")){
        sdb.classList.remove("active-sidebar")
    }
}