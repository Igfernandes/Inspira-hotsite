let Mapbox = function(){

    this.map = function(obj ,token ='pk.eyJ1IjoiaWdvcmludGVybml0IiwiYSI6ImNrbnEwNGNtcTA3ZG4ydm51a3dvdGIxbWEifQ.nykMbdMEe-PFT7iarVnsEQ'){
        mapboxgl.accessToken = token;
        var map = new mapboxgl.Map(obj);
    }
}

let cmd = new Mapbox();

if(document.querySelector('.map')){
    cmd.map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    })    
}

export{
    Mapbox
}