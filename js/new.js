function doFirst(){
	navigator.geolocation.getCurrentPosition(successCallback);
}

function successCallback(e){
	// let lati = e.coords.latitude;
	// let longi = e.coords.longitude;
	// let accuracy = Math.round(e.coords.accuracy);

	// 土地公廟
	let lati = 24.8035922;
	let longi = 120.9766832;

	let area = document.getElementById('map');
	// console.log(area);
	let position = new google.maps.LatLng(lati, longi);
	let options = {
		zoom: 14,
		center: position,
		mapTypeId: google.maps.MapTypeId.ROADMAP           // 平常街道圖  
	};
	// map: 全域變數
	map = new google.maps.Map(area, options);
	let marker = new google.maps.Marker({   // 同名 => ES6寫法, 可以省略之
		map,
		position,
		// title: '土地公廟...', // 在位子上時, 滑鼠會顯示的提示
	});
	marker.setTitle('目前位置：土地公廟'); 
	marker.setIcon('./smallicon/temple_32.png'); 
	const contentString =
    '<div id="content">' +
		'<h1 id="firstHeading" class="firstHeading">各位善男善女</h1>' +
		'<div id="bodyContent">' +
			"<p><b>恭喜發財</b>, 花園土地公廟 歡迎大家.</p>" +
		"</div>" +
    "</div>";
	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	  });
	marker.addListener("mouseover", () => {
		infowindow.open({
			anchor: marker,
			map,
			shouldFocus: false,
		});
	});	  
};

// shop變數, 指向button物件
function showInfo(shop){
	switch(shop.id){
		case 'starbucks':
			// 第一個參數來自data.js, 第二個參數是logo資料夾中的 "xxx.png", 第三個參數是滑鼠提示字
			getCoords(_starbucks, 'starbucks', 'Starbucks');
			break;
		case 'seven':
			getCoords(_seven, 'seven', '7-Eleven');
			break;
		case 'family':
			getCoords(_family, 'familymart', 'Family Mart');
			break;
		case 'hospital':
			getCoords(_hospital, 'hospital', 'Hospital');
			break;
		case 'mcdonalmds':
			getCoords(_mcdonalmds, 'mcdonalmds', 'Mcdonalmds');
			break;
		default:
			break;
	}
}

let markers = [];
function getCoords(coords,shopName , title){
		let j=0;
		for(let k in markers){
			// marker物件下, 有　visible屬性
			// console.log(markers[k].visible);		  // true
			markers[k].setVisible(false); 		      // 隱藏所有 marker
			
		};
		for(var i=0; i<coords.length; i++){
			// 字串切割成陣列
			let lati  = coords[i].split(',')[0] ; // 經度
			let longi = coords[i].split(',')[1] ; // 經度
			let name  = coords[i].split(',')[2] ; // 醫院名稱
			// console.log(`${lati} | ${longi}`);

			// 區域變數
			let position = new google.maps.LatLng(lati, longi);
			let marker = new google.maps.Marker({   
				map,
				position,
			});
			marker.setTitle(name); 
			marker.setIcon(`./smallicon/${shopName}.png`);

			markers[j] = marker;
			// markers.push(marker);            // ok
			j++;
			// markers[0] , markers[1] , markers[2] ...
		};	
}
window.addEventListener('load', doFirst);

