$(document).ready(function(e) {
	
	init();
	
	//删除按钮
    $('.clearIcon').click(function(){
		removeImage();
	});
	
	//添加按钮
	$('.addIcon').click(function(){
		//addImage('images/icon2.png', 300, 10);
	});
	
	//车顶颜色
	/*$('.car_top').click(function(){
		var f = Math.floor(Math.random() * 4) + 1;//1,2,3,4
		car_top(f);
	});
	
	//车身颜色
	$('.car').click(function(){
		var f = Math.floor(Math.random() * 4) + 1;//1,2,3,4
		car(f);
	});*/
	
	var h=$(window).height();
	$('.wrapper').height(h);
	
});





// createjs 引擎
var canvas, stage, exportRoot;
var currChooseObj, txt;

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	exportRoot = new lib.index();
	exportRoot.bg.visible = false
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true;

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	
	//默认添加两张图片
	//addImage('images/icon.png', 300, 10);
	//addImage('images/icon2.png', 300, 20);
	
	txt = new createjs.Text("", "60px Arial", "#F00");
	txt.x = 100;
	txt.y = 270;
	txt.visible = false;
	//txt.rotation = 20;
	//txt.outline = true;
	stage.addChild(txt);
}


function addImage(src,x,y){
	var image = new Image();
	image.src = src;
	image.onload = handleImageLoad;
	
	function handleImageLoad(event) {
		var image = event.target;
		var bitmap = new createjs.Bitmap(image);
		bitmap.x = x;
		bitmap.y = y;
		currChooseObj = bitmap;
		exportRoot.cont.addChild(bitmap);
		
		var hitArea = new createjs.Shape();
		hitArea.graphics.beginFill("#FFF").drawEllipse(-image.width*0.5, -image.height*0.5, image.width, image.height);
		hitArea.x = image.width / 2;
		hitArea.y = image.height / 2;
		
		bitmap.hitArea = hitArea;
		bitmap.addEventListener("mousedown", function (evt) {
			var o = evt.target;
			o.parent.addChild(o);
			o.offset = {x: o.x - evt.stageX, y: o.y - evt.stageY};
			currChooseObj = o;
		});
		
		bitmap.addEventListener("pressmove", function (evt) {
			if(hasmove){
				var o = evt.target;
				o.x = evt.stageX + o.offset.x;
				o.y = evt.stageY + o.offset.y;
			}
		});
	}
}

function removeImage(){
	if(currChooseObj != null){
		exportRoot.cont.removeChild(currChooseObj);
		currChooseObj = null;
	}
}

//车顶颜色选择
function car_top(frame){
	exportRoot.car_top.gotoAndStop(frame - 1);
}
//车身颜色选择
function car(frame){
	exportRoot.car.gotoAndStop(frame - 1);
}
//背景选择
function bg(frame){
	exportRoot.bg.visible = true
	exportRoot.bg.gotoAndStop(frame - 1);
	//txt.color = '#f00';
}

