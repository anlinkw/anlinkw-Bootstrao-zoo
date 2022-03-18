// 返回頂部
let goBack = document.querySelector('.goBack');
let contentStar = document.querySelector('.content-star');
// 頁面滾動 
// or document.addEventListener('scroll',...)
window.addEventListener('scroll', function() {
	  if (window.pageYOffset >= contentStar.offsetTop) {
			goBack.style.display = 'block';
	  } else {
			goBack.style.display = 'none';
	  }
});
goBack.addEventListener('click', function() {
	  // 過渡效果; y座標:0
	  animate(window, 0);
});
function animate(obj, target) {
	  // 先清除以前的定時器，只保留當前的一個定時器執行
	  clearInterval(obj.timer);
	  obj.timer = setInterval(function() {
			// 取整数, 去除小數
			let step = (target - window.pageYOffset) / 10;
			// console.log(step, window.pageYOffset);
			
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			// console.log(step);

			if (window.pageYOffset == target) {
				  // 停止動畫(停止定時器)
				  clearInterval(obj.timer);
			}
			// 未到達 y座標:0, 則繼續滾動, 每次加1 , 公式：(目標值 - 當前的位置) / 10
			window.scroll(0, window.pageYOffset + step);
	  }, 30);
};
