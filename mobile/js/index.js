(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1039,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/canvas/bg1.jpg", id:"bg1"},
		{src:"images/canvas/bg2.jpg", id:"bg2"},
		{src:"images/canvas/bg3.jpg", id:"bg3"},
		{src:"images/canvas/bg4.jpg", id:"bg4"},
		{src:"images/canvas/c1.png", id:"c1"},
		{src:"images/canvas/c2.png", id:"c2"},
		{src:"images/canvas/c3.png", id:"c3"},
		{src:"images/canvas/c4.png", id:"c4"},
		{src:"images/canvas/cd1.png", id:"cd1"},
		{src:"images/canvas/cd2.png", id:"cd2"},
		{src:"images/canvas/cd3.png", id:"cd3"},
		{src:"images/canvas/cd4.png", id:"cd4"}
	]
};



// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1039);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1039);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1039);


(lib.bg4 = function() {
	this.initialize(img.bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1039);


(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,258);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,258);


(lib.c3 = function() {
	this.initialize(img.c3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,258);


(lib.c4 = function() {
	this.initialize(img.c4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,259);


(lib.cd1 = function() {
	this.initialize(img.cd1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,88);


(lib.cd2 = function() {
	this.initialize(img.cd2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,72);


(lib.cd3 = function() {
	this.initialize(img.cd3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,79);


(lib.cd4 = function() {
	this.initialize(img.cd4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,74);


(lib.cont = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.car_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.cd1();

	this.instance_1 = new lib.cd2();

	this.instance_2 = new lib.cd3();

	this.instance_3 = new lib.cd4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,88);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.c1();

	this.instance_1 = new lib.c2();

	this.instance_2 = new lib.c3();

	this.instance_3 = new lib.c4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,258);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.instance = new lib.bg1();

	this.instance_1 = new lib.bg2();

	this.instance_2 = new lib.bg3();

	this.instance_3 = new lib.bg4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1039);


// stage content:
(lib.index = function() {
	this.initialize();

	// maskmc (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EARdAwZIkngMIkygGIkJgMIkTgGIj9AAIjkgSItWglIgfjeIhajTIhmiEIjfhmIkIgSIiXAAIi1AqIhaBUIhaByIg9B+IgdBbIhzgMIi1hCIgqgfIAYkaIBhhsIAej9IAAgBIHVAAIAtgEIAtgUIAfg3IgjhWIg3g8ImnAXIAagaQBAgaBSgXQCigxBTAIQBSAHDKgCQBkgCBVgDICWBzIBCBBIEzASMAnYAC5QAsADAnAAQB7gCAXgpQAWgphFhEQgWgVgcgWIgYgRIBygkIDfB5IBagHILeBhIGgB/IAeAMQAkARAgASQBiA9AIA8QAEAfgGgDQgSgQgXgRQh0hPijgDQilgEAjANQAkANgdAFIBmA8IBgByIDTAkICLA8IAADNIgND3IiigHIg2AfIjBgfIgSi6Ig8iLIhCh4IhahUIiXhCIijgeIiugMIjGAeIiXBaIhhCFIhTC0IgrCRIgXCcgEABkAjGIBtgQIgtgnIh3gGIhigKIhkAGIAKAtIAdAOIBqgEIBsAKgEgU7AhsIBugQIgtgnIh3gGIhkgKIhkAGIAKAtIAdAOIBqgEIBtAKg");
	mask.setTransform(314,310.4);

	// cont
	this.cont = new lib.cont();
	this.cont.setTransform(12.5,482.2,1,1,0,0,0,-0.5,1.2);

	this.cont.mask = mask;

	// car_top
	this.car_top = new lib.car_top();
	this.car_top.setTransform(320,474,1,1,0,0,0,320,44);

	// car
	this.car_top_1 = new lib.car_top();
	this.car_top_1.setTransform(320,474,1,1,0,0,0,320,44);

	this.car = new lib.car();
	this.car.setTransform(347.5,560,1,1,0,0,0,347.5,130);

	// background
	this.bg = new lib.background();
	this.bg.setTransform(320,519.5,1,1,0,0,0,320,519.5);

	this.addChild(this.bg,this.car,this.car_top_1,this.car_top,this.cont);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320,519.5,640,1039);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;