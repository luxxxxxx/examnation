for (var i = 0; i < $$('.header-nav-slt').length; i++) {
	$$('.header-nav-slt')[i].onclick = function () {
		if (hasClass(this,'change')) {
			removeClass(this,'change')
		}else {
			addClass(this,'change');
		}
	}
}

$$('#side-nav div.back-top').onclick = function () {
	var pieceDistance = $$('body').scrollTop/25;
	$$('body').timer = setInterval(function(){
		if ($$('body').scrollTop <= pieceDistance ) {
			$$('body').scrollTop = 0;
			clearInterval($$('body').timer);
		}else {
			$$('body').scrollTop -= pieceDistance; 
		}
	},20);
}


function $$(ele) {
	var l = document.querySelectorAll(ele).length;
	if (l == 1) {
		return document.querySelector(ele);
	}else {
		return document.querySelectorAll(ele);
	}
}


function hasClass (ele,classN) {
	var reg = new RegExp('\\b' + classN + '\\b');
	var classText = ele.className;
	return reg.test( classText );  
};
function addClass (ele,classN) {
	if (!hasClass(ele,classN)) {
		var classArry = ele.className.split(' ');
		classArry.push(classN);
		var fixArray = [];  //清除class之间可能存在的多个空格
		for (var i = 0; i < classArry.length; i++) {
			if (classArry[i] != '') {
				fixArray.push(classArry[i])
			}
		}
		ele.className = fixArray.join(' ');
	}
}
function removeClass (ele,classN) {
	if(hasClass(ele,classN)) {
		var reg = new RegExp('\\b' + classN + '\\b');
		ele.className = ele.className.replace(reg,'')
	}
}
