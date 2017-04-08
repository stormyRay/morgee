var express = require('express')
var path = require('path')
var compression = require('compression')
var fs = require("fs")

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '../dist')))
app.get('/getThemes.json', function(req, res){
	const LIMIT = 9;
	var start = req.query.page * LIMIT;
	var results = themes.slice(start, start + LIMIT);
	setTimeout(function(){
		res.status(200).send(JSON.stringify({
			success: true,
			message: "Successfully get themes",
			themes: {
				themeList: results,
				hasMore: start + LIMIT < themes.length,
				page: parseInt(req.query.page) + 1
			}
		}));
	}, 1500);
	
})

app.get('/getHotImages.json', function(req, res){
	res.status(200).send(JSON.stringify({
		success: true,
		message: "Successfully get hot images",
		hotImages: hotImages
	}));
	
});

app.get('/getImages.json', function(req, res){
	var page = parseInt(req.query.page);
	var theme = req.query.theme;
	if(theme == "hot"){
		res.status(200).send(JSON.stringify({
			success: true,
			message: "Successfully get themes",
			images: {
				imageList: hotImages,
				hasMore: false,
				page: 1,
				theme: "热门图片"
			}
		}));
	} else {
		var imageList = [];
		var index = parseInt(theme);
		var number = 0;
		const LIMIT = 10;
		for (var i = 1; i <= LIMIT; i ++){
			number = parseInt(theme) % 5 + i * 5 + page * 20;
			if(number > 151)
				break;
			imageList.push({
				id: (number < 10 ? "00" + number : (number <100 ? "0" + number : number.toString())),
				src: "/images/" + (number<10?("00"+ number): (number<100?("0"+number):number)) + ".jpg",
				title: "占位",
				theme: "占"+theme,
				price: (0.1 * number ).toFixed(1),
				background: (i % 2 == 1) ? "black" : "white"
			});
		}
		res.status(200).send(JSON.stringify({
			success: true,
			message: "Successfully get themes",
			images: {
				imageList: imageList,
				hasMore: number < 151,
				page: parseInt(page) + 1,
				theme: "主题ID" + theme
			}
		}));
	}
	
});

app.get('/getSrc/image', function(req, res){
	var imageId = req.query.imageId;

	res.status(200).send(JSON.stringify({
		success: true,
		message: "Successfully get hot images",
		src: "/images/" + imageId + ".jpg"
	}));
	
});

app.get('/getSrc/text', function(req, res){
	res.status(200).send(JSON.stringify({
		success: true,
		message: "Successfully get hot images",
		src: "/images/001.jpg"
	}));
	
});

app.get('/getOrderInfo', function(req, res){
	var imageId = req.query.imageId;
	var clothType = req.query.clothType;
	var clothColor = req.query.clothColor;
	var clothSize = req.query.clothSize;
	var description = "尺码" + clothSize + 
	", 颜色" + ((clothColor == "black")?"炭黑色":(clothColor == "white" ? "纯白色" : "灰黑色")) + 
	"，材料：纯棉26支纱"
	res.status(200).send(JSON.stringify({
		success: true,
		message: "Successfully get order info",
		info: {
			imageTitle: "WHAEVER" + imageId,
			imagePrice: 20 + parseFloat(Math.random().toFixed(2)),
			clothPrice: 60 + parseFloat(2 * Math.random().toFixed(2)),
			clothDescription: description,
			printPrice: 10 + parseFloat(Math.random().toFixed(2))
		}
	}));
	
});

app.post('/confirm',function(req, res){
	res.status(200).send(JSON.stringify({
		success: true,
		message: "Successfully confirm"
	}));
	
});

// send all requests to index.html so browserHistory works
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'pickimage.html'))
});
app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'pickimage.html'))
});
app.get('/hot', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'pickimage.html'))
});
app.get('/theme/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'pickimage.html'))
});

app.get('/customize/image/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'customizeshirt.html'))
});
app.get('/order/image/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'customizeshirt.html'))
});
app.get('/order/success', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'customizeshirt.html'))
});


var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});

const themes = [{
	id: "1",
	src: "/images/128.jpg",
	title: "一般",
	background: "black"
}, {
	id: "2",
	src: "/images/071.jpg",
	title: "草",
	background: "white"
}, {
	id: "3",
	src: "/images/077.jpg",
	title: "火",
	background: "white"
}, {
	id: "4",
	src: "/images/101.jpg",
	title: "电",
	background: "white"
}, {
	id: "5",
	src: "/images/055.jpg",
	title: "水",
	background: "white"
}, {
	id: "6",
	src: "/images/124.jpg",
	title: "冰",
	background: "white"
}, {
	id: "7",
	src: "/images/080.jpg",
	title: "超能",
	background: "white"
}, {
	id: "8",
	src: "/images/112.jpg",
	title: "地面",
	background: "black"
}, {
	id: "9",
	src: "/images/092.jpg",
	title: "幽灵",
	background: "black"
}, {
	id: "10",
	src: "/images/095.jpg",
	title: "岩石",
	background: "black"
}, {
	id: "11",
	src: "/images/067.jpg",
	title: "格斗",
	background: "black"
}, {
	id: "12",
	src: "/images/018.jpg",
	title: "飞行",
	background: "black"
}, {
	id: "13",
	src: "/images/024.jpg",
	title: "毒",
	background: "white"
}, {
	id: "14",
	src: "/images/012.jpg",
	title: "虫",
	background: "black"
}, {
	id: "15",
	src: "/images/148.jpg",
	title: "龙",
	background: "black"
}, {
	id: "16",
	src: "/images/082.jpg",
	title: "钢",
	background: "black"
}, {
	id: "17",
	src: "/images/132.jpg",
	title: "恶",
	background: "black"
}, {
	id: "18",
	src: "/images/035.jpg",
	title: "妖精",
	background: "white"
}];

const hotImages = [{
	id: "094",
	src: "/images/094.jpg",
	title: "耿鬼",
	theme: "幽灵",
	price: 0.3,
	background: "white"
}, {
	id: "006",
	src: "/images/006.jpg",
	title: "喷火龙",
	theme: "火",
	price: 0.3,
	background: "white"
}, {
	id: "149",
	src: "/images/149.jpg",
	title: "快龙",
	theme: "龙",
	price: 0.3,
	background: "black"
}, {
	id: "025",
	src: "/images/025.jpg",
	title: "皮卡丘",
	theme: "电",
	price: 0.2,
	background: "black"
}, {
	id: "142",
	src: "/images/142.jpg",
	title: "化石翼龙",
	theme: "岩石",
	price: 0.1,
	background: "white"
}, {
	id: "130",
	src: "/images/130.jpg",
	title: "暴鲤龙",
	theme: "水",
	price: 0.2,
	background: "white"
}, {
	id: "065",
	src: "/images/065.jpg",
	title: "胡地",
	theme: "超能",
	price: 0.3,
	background: "black"
}]