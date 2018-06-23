window.onload=function(){
	var demo =document.getElementById('mydemo');
	var runPage,
		runPage2,
	    interval,
	    autoPlay;

	autoPlay = function(to) {
	
	    clearTimeout(interval);
	    interval = setTimeout(function() {
	        runPage.go(to);
	    }, 5000);
	
	}
	
	runPage = new FullPage({
	
		id : 'pageContain',                            // id of contain
		slideTime : 1000,                               // time of slide
	    effect : {                                     // slide effect
	        transform : {
	        	translate : 'X',					   // 'X'|'Y'|'XY'|'none'
	        	scale : [0, 1],					   // [scalefrom, scaleto]
	        	rotate : [60, 0]					   // [rotatefrom, rotateto]
	        },
	        opacity : [0, 1]                           // [opacityfrom, opacityto]
	    },                           
		mode : 'touch,nav:navBar',               // mode of fullpage
		easing : [0, .93, .39, .98],                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
	    callback : function(index, thisPage) {     // callback when pageChange
	
	        index = index + 1 > 3? 0 : index + 1;
	        autoPlay(index);
	    }
	});
	
	runSection = new FullPage({
	
		id : 'article',                            // id of contain  外层包裹 id（必须）
		slideTime : 800,                               // time of slide 每页切换时间，单位为毫秒
	    effect : {                                     // slide effect 切换效果
	        transform : {
	        	translate : 'Y',					   // 'X'|'Y'|'XY'|'none'
	        	scale : [0, 1],					   // [scalefrom, scaleto]
	        	rotate : [0, 0]					   // [rotatefrom, rotateto]
	        },
	        opacity : [0, 1]                           // [opacityfrom, opacityto]
	    },                           
		mode : 'touch,wheel',               // mode of fullpage
		easing : [0, .93, .39, .98],
		callback : function(index, thisPage) {     // callback when pageChange
	
	        if (index === 0) {
	        	autoPlay(runPage.thisPage() + 1);
	        } else {
	        	clearTimeout(interval);
	        }
	         if (index === 1) {
	//      	alert(index);
	        } else {
	        	
	        }
	        if(index===2){
	        	
//	        	demo.classList.add("foc");
	        }else{
				
	        }
	        if(index===3){
	        	
	        	
	        }else{
				
	        }
	    }
	});
	
	interval = setTimeout(function() {
	    runPage.go(runPage.thisPage() + 1);
	}, 5000);

}
