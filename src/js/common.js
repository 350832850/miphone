//操作cookie
function setCookie(name,value,iDay){
	if(iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie = name+'='+value+'; path=/; expires='+oDate;
	}else{
		document.cookie = name+'='+value+'; path=/';
	}
}
function getCookie(name){
	var str = document.cookie;
	var arr = str.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0] == name){
			return arr2[1];
		}
	}
	return '';
}
function removeCookie(name){
	setCookie(name,'',-1);
}

//事件绑定的封装
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else{
		obj.attachEvent('on'+type,fn)
	}
	//obj.addEventListener(type,fn,false) || obj.attachEvent('on' + type,fn);
}
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false);
	}else{
		obj.detachEvent('on'+type,fn);
	}
}

//封装ready
function addReady(fn) {
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded',fn,false);
	} else {
		document.attachEvent('onreadystatechange',function(){
		if (document.readyState == 'complete') {
				fn();
			}
		});
	}
}

//非行间样式
function getStyle(obj,name){
	return (obj.currentStyle||getComutedStyle(obj,false))[name];
}

//随机数
function rnd(n,m){
	//前包后不包：1-34只能取到1-33
	return Math.floor(Math.random()*(m-n)+n);
}

//求和
function sum(){
	var res = 0;
	for(var i=0;i<arguments.length;i++){
		res+=arguments[i];
	}
	return res;
}

//获取绝对位置
function getPos(obj){
	var l=0;
	var t=0;
	while(obj){
		l=l+obj.offsetLeft;
		t=t+obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
}

//css3样式的设置
function setStyle(obj,name,value){
	var str = name.charAt(0).toUpperCase()+name.substring(1);
	obj.style['Webkit'+str] = value;
	obj.style['Moz'+str] = value;
	obj.style['ms'+str] = value;
	obj.style['O'+str] = value;
	obj.style[name] = value;
}

//在数组里查找
function findInArr(n,arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == n){
			return true;
		}
	}
	return false;
}

//滚轮事件
function addWheel(obj,fn){
    if(navigator.userAgent.indexOf('Firefox')!=-1){
        obj.addEventListener('DOMMouseScroll',show,false);
    }else{
        obj.onmousewheel=show;
    }
    function show(ev){
        var bDown=true;
        var oEvent=ev||event;
        if(oEvent.detail){
            if(oEvent.detail>0){
                bDown=true;
            }else{
                bDown=false;
            }
        }else{
            if(oEvent.wheelDelta>0){
                bDown=false;
            }else{
                bDown=true;
            }
        }
        fn(bDown);
    }
}
// addWheel(obj,function(bDown){});

// $('').on("mousewheel DOMMouseScroll", function(e){
// 	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//chrome ie||firefox
// 	if(delta > 0){ // 向上滚
   		
// 	}else if(delta < 0){// 向下滚
    	
// 	}
// });

//角度变弧度
function d2a(n){
	return n*Math.PI/180;
}
