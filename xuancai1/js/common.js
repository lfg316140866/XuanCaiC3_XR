var stage, stageWidth, stageHeight, canvas, images;
var gameState = 'stop';
var propArr = [], frequency = 25;
var interval, car, speed = 15;
var times = 20, tickNum = 0, score = 0;
var getNum = 0;


$(document).ready(function(e) {
	stageWidth = $(window).width();
	stageHeight = $(window).height();
	$('.wrapper').height(stageHeight);
	init();
});


function init() {
	canvas = document.getElementById("gameMain");
	canvas.width = stageWidth;
	canvas.height = stageHeight;
	images = images||{};
	
	var manifest = [
		{src:"sounds/eat.mp3", id:"eat"},
		{src:"images/z1.png", id:"z1"},
		{src:"images/z2.png", id:"z2"},
		{src:"images/z3.png", id:"z3"},
		{src:"images/z4.png", id:"z4"}
	]
	
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", handleFileProgress);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleFileProgress(event) {
	var v = parseInt(event.loaded / event.total * 100);
	$('.progressNum').html(v + "%");
}

function handleComplete() {
	//stage = new createjs.Stage(canvas);
	//stage.update();
	
	stage = new createjs.Stage("gameMain");
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true;
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tickhandle);
	
	addImage('images/car.png');//添加车
	new WxMoment.OrientationTip();//横屏提示
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

function start(){
	gameState = 'start';
	interval = setInterval(function(){
		if(times == 0){
			gameOver();
		}else{
			times --;
		}
		
		if(speed < 25) speed ++;
		if(frequency > 10) frequency --;
	}, 1000);
	
	addPro();
}

function tickhandle(){
	stage.update();
	
	if(gameState == 'start'){
		tickNum ++;
		if(tickNum % frequency == 0) addPro();
		checkgame();
	}
}

function addPro(){
	var data = [
		{type:1, img:'images/z1.png', text:'1分'},
		{type:2, img:'images/z2.png', text:'3分'},
		{type:3, img:'images/z3.png', text:'延长时间5秒'},
		{type:4, img:'images/z4.png', text:'总分翻倍'}
	];
	
	var randomNum = Math.random();
	var index;
	
	if(randomNum < 0.01){
		if(Math.random() > 0.5) index = 4;
		else index = 3;
	}
	else{
		if(Math.random() > 0.5) index = 2;
		else index = 1;
	}
	
	var obj = data[index - 1];	
	var prop = new createjs.Bitmap(obj.img);
	prop.type = obj.type;
	prop.x = Math.floor(Math.random() * 550);
	prop.y = -200;
	stage.addChild(prop);
	propArr.push(prop);

	stage.setChildIndex(car, stage.getNumChildren() - 1);
}

function gameOver()
{
	gameState = 'gameOver';
	clearInterval(interval);
	createjs.Ticker.removeEventListener("tick", tickhandle);
	
	window.location.href = 'ending.html?getNum=' + getNum + '&score=' + score;
}

function checkgame(){
	for(var i=0;i<propArr.length;i++)
	{
		var o = propArr[i];
		var collision = ndgmr.checkPixelCollision(o, car, 0.75);
		if(collision){
			
			getNum ++;
			
			if(o.type == 1) score ++;//加1分
			if(o.type == 2) score += 3;//加3分
			if(o.type == 3) times +=5;//加5秒
			if(o.type == 4) score *= 2;//总分翻倍
			
			var tips = new createjs.Bitmap("images/s" + o.type + ".png");
			tips.x = car.x + 50;
			tips.y = car.y;
			TweenLite.to(tips, .8, {y:tips.y - 200, onComplete:function(){
				stage.removeChild(tips);
			}});
			stage.addChild(tips);
			playSound('eat');
			
			//移除
			stage.removeChild(propArr[i]);
			propArr.splice(i, 1);
			break;
		}else{
			o.y += speed;
			if(o.y > stageHeight){
				stage.removeChild(propArr[i]);
				propArr.splice(i, 1);
				break;
			}
		}
	}
	
	$('.wrapper .times').html('剩余：' + times + 's');
	$('.wrapper .score').html('粽子数：' + score);
}

function addImage(src){
	var image = new Image();
	image.src = src;
	image.onload = handleImageLoad;
}

function handleImageLoad(event) {
	var image = event.target;
	var bitmap = new createjs.Bitmap(image);
	bitmap.x = 150;
	bitmap.y = 800;
	car = bitmap;
	stage.addChild(bitmap);
	
	var hitArea = new createjs.Shape();
	hitArea.graphics.beginFill("#FFF").drawEllipse(-image.width*0.5, -image.height*0.5, image.width, image.height);
	hitArea.x = image.width / 2;
	hitArea.y = image.height / 2;
	
	bitmap.hitArea = hitArea;
	bitmap.addEventListener("mousedown", function (evt) {
		var o = evt.target;
		o.parent.addChild(o);
		o.offset = {x: o.x - evt.stageX, y: o.y - evt.stageY};
	});
	
	bitmap.addEventListener("pressmove", function (evt) {
		var o = evt.target;
		var newX = evt.stageX + o.offset.x;
		if(newX < 0) newX = 0;
		if(newX > 400) newX = 400;
		o.x = newX;
		//o.y = evt.stageY + o.offset.y;
	});
	
	$('.loading').hide();
	start();
}