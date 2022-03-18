Vue.config.productionTip = false;
// 天氣溫度轉換的變數
const KELVIN = 273;
const APP = new Vue({
	el:'#app',
	data:{
		time:'',
		api: 'http://api.openweathermap.org/data/2.5/weather?lat=24.7959016&lon=120.9592073&appid=9330855207a39c908a80e44cc811b8b4',
		// 顯示 天氣雲圖
		imgIcon: './images/index/weather-icons/unknown.png',
		WEATHER: {
			temperature:''
		},
	},
	methods:{
	},
	mounted(){
		let self = this;
		axios.get(this.api).then(function(res){
			console.log(res);
			self.WEATHER.temperature = Math.floor(res.data.main.temp - KELVIN);
            self.WEATHER.description = res.data.weather[0].description;
			self.imgIcon = `./images/index/weather-icons/${res.data.weather[0].icon}.png`;
            self.WEATHER.city = res.data.name;
            self.WEATHER.country = res.data.sys.country;

			let now = new Date();
			let date = ('0'+ (now.getMonth()+1)).slice(-2) + "月" 
			+ ('0'+ now.getDate()).slice(-2) + '日' 
			+ ' ' + ('0'+ now.getHours()).slice(-2) + ':'
			+ ('0'+ now.getMinutes()).slice(-2);
			
			self.time = date;
	
		},function(err){
			console.log(err);
		});

	}
}) 