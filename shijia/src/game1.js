var stage, stageWidth, stageHeight, canvas, images;
var gameState = 'stop';
var propArr = [], frequency = 45;
var interval, car, speed = 10;
var times = 30, tickNum = 0, score = 0;
var background_Container;
var background1, background2;
var scv = 10;
var url = 'http://dongxuec3xr.e-horse.cn/DataItf/C3xrLiberalITF.php/SaveUserInfo';

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
		{src:"images/z1.png", id:"z1"},
		{src:"images/z2.png", id:"z2"}
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
	stage = new createjs.Stage("gameMain");
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true;
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tickhandle);
	
	background_Container = new createjs.Container();
	stage.addChild(background_Container);
	
	background1 = new createjs.Bitmap("images/build.png");
	background2 = new createjs.Bitmap("images/build.png");
	background1.x = background2.y = 0;
	background2.x = 0;
	background2.y = -1080;
	background_Container.addChild(background1, background2);
	
	addImage('images/car1.png');//添加车
	new WxMoment.OrientationTip();//横屏提示
	
	$('.start .btn').click(function(){
		start();
		$('.start').fadeOut();
	});
	$('.fail_cont .btn1').click(function(){
		window.location.reload();
	});
}

function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

function start(){
	gameState = 'start';
	interval = setInterval(function(){
		if(times == 0){
			$('.form_cont').fadeIn();
			gameOver();
		}else{
			times --;
			score += scv;
		}
	}, 1000);
	
	addPro();
}

function tickhandle(){
	stage.update();
	
	if(gameState == 'start'){
		tickNum ++;
		if(tickNum % frequency == 0) addPro();
		checkgame();
		
		background1.y += 2;
		background2.y += 2;
		if(background1.y > stageHeight) background1.y = -1080;
		if(background2.y > stageHeight) background2.y = -1080;
	}
}

function addPro(){
	var data = [
		{img:'images/z1.png', type:1},
		{img:'images/z2.png', type:2}
	];
	
	var index = Math.floor(data.length * Math.random());
	var obj = data[index];	
	var prop = new createjs.Bitmap(obj.img);
	var xSpace = [230, 330];
	prop.type = obj.type;
	prop.x = xSpace[Math.floor(data.length * Math.random())];
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
}

function checkgame(){
	for(var i=0;i<propArr.length;i++)
	{
		var o = propArr[i];
		//var collision = false;
		var collision = ndgmr.checkPixelCollision(o, car, 0.75);
		if(collision){
			
			if(o.type == 1){
				//游戏失败
				$('.fail_cont').fadeIn();
				gameOver();
				return;
			}
			
			if(o.type == 2){
				scv += scv;
			}
			
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
	
	$('.wrapper .times').html(times + '"');
	$('.wrapper .score').html(score + '分');
}

function addImage(src){
	var image = new Image();
	image.src = src;
	image.onload = handleImageLoad;
}

function handleImageLoad(event) {
	var image = event.target;
	var bitmap = new createjs.Bitmap(image);
	bitmap.x = 270;
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
		if(newX < 210) newX = 210;
		if(newX > 330) newX = 330;
		o.x = newX;
		//o.y = evt.stageY + o.offset.y;
	});
	
	$('.loading').hide();
	//start();
}