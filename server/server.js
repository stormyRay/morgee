var express = require('express')
var path = require('path')
var compression = require('compression')
var fs = require("fs")

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '../dist')))
app.get('/getThemes.json', function(req, res){
	const LIMIT = 4;
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
		const LIMIT = 4;
		for (var i = 1; i <= LIMIT; i ++){
			number = parseInt(theme) % 5 + i * 5 + page * 20;
			if(number > 151)
				break;
			imageList.push({
				id: number.toString(),
				src: "/images/" + (number<10?("00"+ number): (number<100?("0"+number):number)) + ".jpg",
				title: "占位",
				theme: "占"+theme,
				price: (0.1 * number ).toFixed(1)
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

app.get('/customize', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'customizeshirt.html'))
});



var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});

const themes = [{
	id: "1",
	src: "/images/128.jpg",
	title: "一般"
}, {
	id: "2",
	src: "/images/071.jpg",
	title: "草"
}, {
	id: "3",
	src: "/images/077.jpg",
	title: "火"
}, {
	id: "4",
	src: "/images/101.jpg",
	title: "电"
}, {
	id: "5",
	src: "/images/055.jpg",
	title: "水"
}, {
	id: "6",
	src: "/images/124.jpg",
	title: "冰"
}, {
	id: "7",
	src: "/images/080.jpg",
	title: "超能"
}, {
	id: "8",
	src: "/images/112.jpg",
	title: "地面"
}, {
	id: "9",
	src: "/images/092.jpg",
	title: "幽灵"
}, {
	id: "10",
	src: "/images/095.jpg",
	title: "岩石"
}, {
	id: "11",
	src: "/images/067.jpg",
	title: "格斗"
}, {
	id: "12",
	src: "/images/018.jpg",
	title: "飞行"
}, {
	id: "13",
	src: "/images/024.jpg",
	title: "毒"
}, {
	id: "14",
	src: "/images/012.jpg",
	title: "虫"
}, {
	id: "15",
	src: "/images/148.jpg",
	title: "龙"
}, {
	id: "16",
	src: "/images/082.jpg",
	title: "钢"
}, {
	id: "17",
	src: "/images/132.jpg",
	title: "恶"
}, {
	id: "18",
	src: "/images/035.jpg",
	title: "妖精"
}];

const hotImages = [{
	id: "094",
	src: "/images/094.jpg",
	title: "耿鬼",
	theme: "幽灵",
	price: 0.3
}, {
	id: "006",
	src: "/images/006.jpg",
	title: "喷火龙",
	theme: "火",
	price: 0.3
}, {
	id: "149",
	src: "/images/149.jpg",
	title: "快龙",
	theme: "龙",
	price: 0.3
}, {
	id: "025",
	src: "/images/025.jpg",
	title: "皮卡丘",
	theme: "电",
	price: 0.2
}, {
	id: "142",
	src: "/images/142.jpg",
	title: "化石翼龙",
	theme: "岩石",
	price: 0.1
}, {
	id: "130",
	src: "/images/130.jpg",
	title: "暴鲤龙",
	theme: "水",
	price: 0.2
}, {
	id: "065",
	src: "/images/065.jpg",
	title: "胡地",
	theme: "超能",
	price: 0.3
}]