
	var musicobj = document.getElementsByClassName("music")[0]
	var music = document.getElementById("music")
    var off = true

	musicobj.onclick=function(){
    	if(off){
    		music.pause()
    		musicobj.classList.add("stop")
    		musicobj.classList.remove("start")
    		off =false
    	}else{
    		music.play()
    		musicobj.classList.add("start")
    		musicobj.classList.remove("stop")
    		off =true
    	}
    }

