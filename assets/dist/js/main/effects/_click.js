const Click = function(){

    this.showVideo = ()=>{
        let btn = document.querySelectorAll(".video-btn");

        for(let item of btn){
            item.onclick = function(){
                let box = item.closest(".inspira_development-video-img")
                let video = item.closest(".inspira_development-video")
                let iframe = video.querySelector("iframe");
                let src = iframe.src.split("?");

                video.querySelector("iframe").src = src+"?autoplay=1&amp;loop=1&amp;mute=1&amp;playlist="+iframe.dataset.playlist;
                box.style.opacity = "0";

                setTimeout(() => {
                    box.remove();
                }, 1000);
            }
        }
    }

    this.showSidebar = ()=>{
        let btn = document.querySelector(".js-btn-sidebar")
        let close = document.querySelector(".js-btn-close")
        let sdb = document.querySelector("sidebar")

        btn.onclick = function(){
            sdb.classList.add("active-sidebar")
        }

        close.onclick = function(){
            sdb.classList.remove("active-sidebar");
        }

    }

    this.removeItem = ($info)=>{
        let itens = document.querySelectorAll($info)

        for(let item of itens){
            item.onclick = function(){
                item.remove();
            }
        }
    }
}

let cmd = new Click();

cmd.showVideo();

cmd.showSidebar();

cmd.removeItem(".js-filter-click")