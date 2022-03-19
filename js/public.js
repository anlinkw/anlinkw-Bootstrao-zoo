// 返回頂部
let goBack = document.querySelector('.goBack');
let sponsor = document.querySelector('#sponsor');
// 頁面滾動 
// or document.addEventListener('scroll',...)
window.addEventListener('scroll', function() {
	  if (window.pageYOffset >= sponsor.offsetTop) {
			// console.log(sponsor.offsetTop);
			// console.log(window.pageYOffset);
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


// 側邊欄
let facebookbar =  document.querySelector(".icon-facebook > a") ;
let twitterbar =  document.querySelector(".icon-twitter > a") ;
let linebar =  document.querySelector(".icon-line > a") ;

linebar.addEventListener('click',function(){
	  // console.log(linebar);
	  this.href = 'https://access.line.me/oauth2/v2.1/login?loginState=xQ7UIKYaNq4YLOq100kaK0&loginChannelId=1446101138&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write%26response_type%3Dcode%26state%3D6765f039ce103c1d133e0dccddd58f%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Furl%25253Dhttps%2525253A%2525252F%2525252Fkkne.ws%2525252FeGWeaJ%26client_id%3D1446101138#/';
});
facebookbar.addEventListener('click',function(){
	  this.href="https://www.facebook.com/";
})
twitterbar.addEventListener('click',function(){
	  this.href="https://twitter.com/";
});


// Navbar show and hide   //  header.css
const header = document.querySelector('.navbar');

let lastScrollTop = 0;
window.addEventListener('scroll', ()=>{
	let NowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(NowScrollTop > lastScrollTop){
		header.classList.add('hide');   
	}else{
		header.classList.remove('hide');
	};
	lastScrollTop = NowScrollTop;
})



// Google Map Modal (彈窗)
let openMap = document.querySelector('.dirMap');
let closebtn = document.querySelector('#close-map');
let googleMap = document.querySelector('#google-map');

openMap.addEventListener('click', ()=>{
	googleMap.style.display = 'block';
})

closebtn.addEventListener('click', ()=>{
	googleMap.style.display = 'none';
})
