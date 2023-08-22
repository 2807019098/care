//模态窗方法
function Elastic(e,msg,duration){
	duration=isNaN(duration)?3000:duration;  
	var m = document.createElement('div');  
	var cs=m.className += e;
	m.innerHTML = msg;  
	m.classList.add(cs); 
	document.body.appendChild(m);  
	setTimeout(function() {  
		var d = 0.5;  
		m.style.webkitTransition = '-webkit-transform ' + d + 's ease, opacity ' + d + 's ease';  
		m.style.opacity = '0';  
		setTimeout(function() { 
			document.body.removeChild(m) 
		}, d * 1000);
	}, duration);											
}

//透明遮罩层
function loading(show, bgColor, Color) {
	if(show){
		$(`<div id="loadingTips" style="background-color: ${bgColor};position: fixed;top: 0;z-index: 99999;bottom: 0; width: 100%; height:100%;"></div>`).appendTo("body");
	    $(`<div id="alert" style="top: 50%;left: 50%;position: absolute;">
		    <div class="loading-bottom layout" style="background: transparent;">
			    <span class="center">
				    <div class="wraps">
					    <div class="spinner">
						    <div class="spinner-container container1">
							    <div class="circle1" style="background-color: ${Color}"></div>
							    <div class="circle2" style="background-color: ${Color}"></div>
							    <div class="circle3" style="background-color: ${Color}"></div>
							    <div class="circle4" style="background-color: ${Color}"></div>
						    </div>
						    <div class="spinner-container container2">
							    <div class="circle1" style="background-color: ${Color}"></div>
							    <div class="circle2" style="background-color: ${Color}"></div>
							    <div class="circle3" style="background-color: ${Color}"></div>
							    <div class="circle4" style="background-color: ${Color}"></div>
						    </div>
						    <div class="spinner-container container3">
							    <div class="circle1" style="background-color: ${Color}"></div>
							    <div class="circle2" style="background-color: ${Color}"></div>
							    <div class="circle3" style="background-color: ${Color}"></div>
							    <div class="circle4" style="background-color: ${Color}"></div>
						    </div>
					    </div>
				    </div>
			    </span>
		    </div>
		</div>`).appendTo("#loadingTips");
	}else{
		$('#loadingTips').remove();
	}
};

//获取浏览器参数
function getQueryString(url, name) {
	var urlParams = new URL(url);
	var queryString = urlParams.searchParams.get(name);
	if (!queryString) {
		var mainParts = urlParams.hash.split("?");
		if (1 == mainParts.length) return "";
		var paramParts = mainParts[1].split("&");

		for (var i = 0; i < paramParts.length; i++) {
			var tempParts = paramParts[i].split("=");
			if (tempParts[0] == name) {
				queryString = tempParts[1];
				break;
			}
		}
	}
	return queryString;
}

const ModalHelper = (function(bodyCls) {
  var scrollTop;
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop || document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls);
      document.scrollingElement.scrollTop = scrollTop;
      document.body.style.top = 0 + 'px';
    }
  };
})('modal-open');

//自定义跳转(全站)
$("body *").each(function () {
var url = $(this).attr('data-url');
if (url) {
    $(this).unbind('tap').on('click', function () {
      window.location.href = url
    });
}
});