window.onload=function(){
			var one=document.getElementsByClassName("one")[0];
			window.onscroll=function(){
				var st=document.documentElement.scrollTop||document.body.scrollTop;
				if(st>180){
					one.style.position="fixed"
				}else{
					one.style.position="static"
				}
			}
		}