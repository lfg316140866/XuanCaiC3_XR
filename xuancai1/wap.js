(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1100,
	fps: 35,
	color: "#000000",
	manifest: [
		{src:"images/xuancai_img_000001.png", id:"xuancai_img_000001"},
		{src:"images/xuancai_img_000002.png", id:"xuancai_img_000002"},
		{src:"images/xuancai_img_000003.jpg", id:"xuancai_img_000003"},
		{src:"images/xuancai_img_000004.jpg", id:"xuancai_img_000004"},
		{src:"images/xuancai_img_000005.png", id:"xuancai_img_000005"},
		{src:"images/xuancai_img_000006.png", id:"xuancai_img_000006"},
		{src:"images/xuancai_img_000007.png", id:"xuancai_img_000007"},
		{src:"images/xuancai_img_000008.png", id:"xuancai_img_000008"},
		{src:"images/xuancai_img_000009.png", id:"xuancai_img_000009"},
		{src:"images/xuancai_img_000010.png", id:"xuancai_img_000010"},
		{src:"images/xuancai_img_000011.png", id:"xuancai_img_000011"},
		{src:"images/xuancai_img_000012.png", id:"xuancai_img_000012"},
		{src:"images/xuancai_img_000013.jpg", id:"xuancai_img_000013"},
		{src:"images/xuancai_img_000014.png", id:"xuancai_img_000014"},
		{src:"images/xuancai_img_000015.png", id:"xuancai_img_000015"},
		{src:"images/xuancai_img_000016.png", id:"xuancai_img_000016"},
		{src:"images/xuancai_img_000017.png", id:"xuancai_img_000017"},
		{src:"images/xuancai_img_000018.png", id:"xuancai_img_000018"},
		{src:"images/xuancai_img_000019.png", id:"xuancai_img_000019"},
		{src:"images/xuancai_img_000020.png", id:"xuancai_img_000020"},
		{src:"images/xuancai_img_000021.png", id:"xuancai_img_000021"},
		{src:"images/xuancai_img_000022.png", id:"xuancai_img_000022"},
		{src:"images/xuancai_img_000023.png", id:"xuancai_img_000023"},
		{src:"images/xuancai_img_000024.jpg", id:"xuancai_img_000024"},
		{src:"images/xuancai_img_000025.png", id:"xuancai_img_000025"},
		{src:"images/xuancai_img_000026.png", id:"xuancai_img_000026"},
		{src:"images/xuancai_img_000027.png", id:"xuancai_img_000027"},
		{src:"images/xuancai_img_000028.png", id:"xuancai_img_000028"},
		{src:"images/xuancai_img_000029.png", id:"xuancai_img_000029"},
		{src:"images/xuancai_img_000030.png", id:"xuancai_img_000030"},
		{src:"images/xuancai_img_000031.png", id:"xuancai_img_000031"},
		{src:"images/xuancai_img_000032.png", id:"xuancai_img_000032"},
		{src:"images/xuancai_img_000033.jpg", id:"xuancai_img_000033"},
		{src:"images/xuancai_img_000034.png", id:"xuancai_img_000034"},
		{src:"images/xuancai_img_000035.png", id:"xuancai_img_000035"},
		{src:"images/xuancai_img_000036.png", id:"xuancai_img_000036"},
		{src:"images/xuancai_img_000037.png", id:"xuancai_img_000037"},
		{src:"images/xuancai_img_000038.png", id:"xuancai_img_000038"},
		{src:"images/xuancai_img_000039.png", id:"xuancai_img_000039"},
		{src:"images/xuancai_img_000040.png", id:"xuancai_img_000040"},
		{src:"images/xuancai_img_000041.png", id:"xuancai_img_000041"},
		{src:"images/xuancai_img_000042.png", id:"xuancai_img_000042"},
		{src:"images/xuancai_img_000043.png", id:"xuancai_img_000043"},
		{src:"images/xuancai_img_000044.png", id:"xuancai_img_000044"},
		{src:"images/xuancai_img_000045.png", id:"xuancai_img_000045"},
		{src:"images/xuancai_img_000046.png", id:"xuancai_img_000046"},
		{src:"images/xuancai_img_000047.png", id:"xuancai_img_000047"},
		{src:"images/xuancai_img_000048.png", id:"xuancai_img_000048"},
		{src:"images/xuancai_img_000049.png", id:"xuancai_img_000049"},
		{src:"images/xuancai_img_000050.png", id:"xuancai_img_000050"},
		{src:"images/xuancai_img_000051.png", id:"xuancai_img_000051"},
		{src:"images/xuancai_img_000052.png", id:"xuancai_img_000052"},
		{src:"images/xuancai_img_000053.png", id:"xuancai_img_000053"},
		{src:"images/xuancai_img_000054.png", id:"xuancai_img_000054"},
		{src:"images/xuancai_img_000055.png", id:"xuancai_img_000055"},
		{src:"images/xuancai_img_000056.png", id:"xuancai_img_000056"},
		{src:"images/xuancai_img_000057.png", id:"xuancai_img_000057"},
		{src:"images/xuancai_img_000058.png", id:"xuancai_img_000058"},
		{src:"images/xuancai_img_000059.png", id:"xuancai_img_000059"},
		{src:"images/xuancai_img_000060.png", id:"xuancai_img_000060"},
		{src:"images/xuancai_img_000061.png", id:"xuancai_img_000061"},
		{src:"images/xuancai_img_000062.png", id:"xuancai_img_000062"},
		{src:"images/xuancai_img_000063.png", id:"xuancai_img_000063"},
		{src:"images/xuancai_img_000064.jpg", id:"xuancai_img_000064"},
		{src:"images/xuancai_img_000065.png", id:"xuancai_img_000065"},
		{src:"images/xuancai_img_000066.png", id:"xuancai_img_000066"},
		{src:"images/xuancai_img_000067.png", id:"xuancai_img_000067"},
		{src:"images/xuancai_img_000068.png", id:"xuancai_img_000068"},
		{src:"images/xuancai_img_000069.png", id:"xuancai_img_000069"},
		{src:"images/xuancai_img_000070.png", id:"xuancai_img_000070"},
		{src:"images/xuancai_img_000071.png", id:"xuancai_img_000071"},
		{src:"images/xuancai_img_000072.png", id:"xuancai_img_000072"},
		{src:"images/xuancai_img_000073.jpg", id:"xuancai_img_000073"},
		{src:"images/xuancai_img_000074.png", id:"xuancai_img_000074"},
		{src:"images/xuancai_img_000075.png", id:"xuancai_img_000075"},
		{src:"images/xuancai_img_000076.png", id:"xuancai_img_000076"},
		{src:"images/xuancai_img_000077.png", id:"xuancai_img_000077"},
		{src:"images/xuancai_img_000078.png", id:"xuancai_img_000078"},
		{src:"images/xuancai_img_000079.png", id:"xuancai_img_000079"},
		{src:"images/xuancai_img_000080.png", id:"xuancai_img_000080"},
		{src:"images/xuancai_img_000081.png", id:"xuancai_img_000081"},
		{src:"images/xuancai_img_000082.png", id:"xuancai_img_000082"},
		{src:"images/xuancai_img_000083.jpg", id:"xuancai_img_000083"},
		{src:"images/xuancai_img_000084.png", id:"xuancai_img_000084"},
		{src:"images/xuancai_img_000085.png", id:"xuancai_img_000085"},
		{src:"images/xuancai_img_000086.png", id:"xuancai_img_000086"},
		{src:"images/xuancai_img_000087.png", id:"xuancai_img_000087"},
		{src:"images/xuancai_img_000088.png", id:"xuancai_img_000088"},
		{src:"images/xuancai_img_000089.png", id:"xuancai_img_000089"},
		{src:"images/xuancai_img_000090.png", id:"xuancai_img_000090"},
		{src:"images/xuancai_img_000091.png", id:"xuancai_img_000091"},
		{src:"images/xuancai_img_000092.jpg", id:"xuancai_img_000092"},
		{src:"images/xuancai_img_000093.png", id:"xuancai_img_000093"},
		{src:"images/xuancai_img_000094.png", id:"xuancai_img_000094"},
		{src:"images/xuancai_img_000095.png", id:"xuancai_img_000095"},
		{src:"images/xuancai_img_000096.png", id:"xuancai_img_000096"},
		{src:"images/xuancai_img_000097.png", id:"xuancai_img_000097"},
		{src:"images/xuancai_img_000098.png", id:"xuancai_img_000098"},
		{src:"images/xuancai_img_000099.png", id:"xuancai_img_000099"},
		{src:"images/xuancai_img_000100.png", id:"xuancai_img_000100"},
		{src:"images/xuancai_img_000101.png", id:"xuancai_img_000101"},
		{src:"images/xuancai_img_000102.png", id:"xuancai_img_000102"},
		{src:"images/xuancai_img_000103.png", id:"xuancai_img_000103"},
		{src:"images/xuancai_img_000104.png", id:"xuancai_img_000104"},
		{src:"images/xuancai_img_000105.png", id:"xuancai_img_000105"},
		{src:"images/xuancai_img_000106.png", id:"xuancai_img_000106"},
		{src:"images/xuancai_img_000107.png", id:"xuancai_img_000107"},
		{src:"images/xuancai_img_000108.png", id:"xuancai_img_000108"},
		{src:"images/xuancai_img_000109.png", id:"xuancai_img_000109"},
		{src:"images/xuancai_img_000110.png", id:"xuancai_img_000110"},
		{src:"images/xuancai_img_000111.png", id:"xuancai_img_000111"},
		{src:"images/xuancai_img_000112.png", id:"xuancai_img_000112"},
		{src:"images/xuancai_img_000113.jpg", id:"xuancai_img_000113"},
		{src:"images/xuancai_img_000114.png", id:"xuancai_img_000114"},
		{src:"images/xuancai_img_000115.png", id:"xuancai_img_000115"},
		{src:"images/xuancai_img_000116.png", id:"xuancai_img_000116"},
		{src:"images/xuancai_img_000117.png", id:"xuancai_img_000117"},
		{src:"images/xuancai_img_000118.png", id:"xuancai_img_000118"},
		{src:"images/xuancai_img_000119.png", id:"xuancai_img_000119"},
		{src:"images/xuancai_img_000120.png", id:"xuancai_img_000120"},
		{src:"images/xuancai_img_000121.png", id:"xuancai_img_000121"},
		{src:"images/xuancai_img_000122.png", id:"xuancai_img_000122"},
		{src:"images/xuancai_img_000123.png", id:"xuancai_img_000123"},
		{src:"images/xuancai_img_000124.png", id:"xuancai_img_000124"},
		{src:"images/xuancai_img_000125.png", id:"xuancai_img_000125"},
		{src:"images/xuancai_img_000126.png", id:"xuancai_img_000126"},
		{src:"images/xuancai_img_000127.jpg", id:"xuancai_img_000127"},
		{src:"images/xuancai_img_000128.png", id:"xuancai_img_000128"},
		{src:"images/xuancai_img_000129.png", id:"xuancai_img_000129"},
		{src:"images/xuancai_img_000130.png", id:"xuancai_img_000130"},
		{src:"images/xuancai_img_000131.png", id:"xuancai_img_000131"},
		{src:"images/xuancai_img_000132.png", id:"xuancai_img_000132"},
		{src:"images/xuancai_img_000133.png", id:"xuancai_img_000133"},
		{src:"images/xuancai_img_000134.png", id:"xuancai_img_000134"},
		{src:"images/xuancai_img_000135.png", id:"xuancai_img_000135"},
		{src:"images/xuancai_img_000136.png", id:"xuancai_img_000136"},
		{src:"images/xuancai_img_000137.png", id:"xuancai_img_000137"},
		{src:"images/xuancai_img_000138.jpg", id:"xuancai_img_000138"},
		{src:"images/xuancai_img_000139.png", id:"xuancai_img_000139"},
		{src:"images/xuancai_img_000140.png", id:"xuancai_img_000140"},
		{src:"images/xuancai_img_000141.png", id:"xuancai_img_000141"},
		{src:"images/xuancai_img_000142.png", id:"xuancai_img_000142"},
		{src:"images/xuancai_img_000143.png", id:"xuancai_img_000143"},
		{src:"images/xuancai_img_000144.png", id:"xuancai_img_000144"},
		{src:"images/xuancai_img_000145.png", id:"xuancai_img_000145"},
		{src:"images/xuancai_img_000146.png", id:"xuancai_img_000146"},
		{src:"images/xuancai_img_000147.png", id:"xuancai_img_000147"},
		{src:"images/xuancai_img_000148.png", id:"xuancai_img_000148"},
		{src:"images/xuancai_img_000149.png", id:"xuancai_img_000149"},
		{src:"images/xuancai_img_000150.png", id:"xuancai_img_000150"},
		{src:"images/xuancai_img_000151.png", id:"xuancai_img_000151"},
		{src:"images/xuancai_img_000152.png", id:"xuancai_img_000152"},
		{src:"images/xuancai_img_000153.png", id:"xuancai_img_000153"},
		{src:"images/xuancai_img_000154.png", id:"xuancai_img_000154"},
		{src:"images/xuancai_img_000155.png", id:"xuancai_img_000155"},
		{src:"images/xuancai_img_000156.png", id:"xuancai_img_000156"},
		{src:"images/xuancai_img_000157.jpg", id:"xuancai_img_000157"},
		{src:"images/xuancai_img_000158.png", id:"xuancai_img_000158"},
		{src:"images/xuancai_img_000159.png", id:"xuancai_img_000159"},
		{src:"images/xuancai_img_000160.png", id:"xuancai_img_000160"},
		{src:"images/xuancai_img_000161.png", id:"xuancai_img_000161"},
		{src:"images/xuancai_img_000162.png", id:"xuancai_img_000162"},
		{src:"images/xuancai_img_000163.png", id:"xuancai_img_000163"},
		{src:"images/xuancai_img_000164.png", id:"xuancai_img_000164"},
		{src:"images/xuancai_img_000165.png", id:"xuancai_img_000165"},
		{src:"images/xuancai_img_000166.png", id:"xuancai_img_000166"},
		{src:"images/xuancai_img_000167.png", id:"xuancai_img_000167"},
		{src:"images/xuancai_img_000168.png", id:"xuancai_img_000168"},
		{src:"images/xuancai_img_000169.png", id:"xuancai_img_000169"},
		{src:"images/xuancai_img_000170.png", id:"xuancai_img_000170"},
		{src:"images/xuancai_img_000171.png", id:"xuancai_img_000171"},
		{src:"images/xuancai_img_000172.png", id:"xuancai_img_000172"},
		{src:"images/xuancai_img_000173.png", id:"xuancai_img_000173"},
		{src:"images/xuancai_img_000174.png", id:"xuancai_img_000174"},
		{src:"images/xuancai_img_000175.png", id:"xuancai_img_000175"},
		{src:"images/xuancai_img_000176.png", id:"xuancai_img_000176"},
		{src:"images/xuancai_img_000177.png", id:"xuancai_img_000177"},
		{src:"images/xuancai_img_000178.png", id:"xuancai_img_000178"},
		{src:"images/xuancai_img_000179.png", id:"xuancai_img_000179"},
		{src:"images/xuancai_img_000180.png", id:"xuancai_img_000180"},
		{src:"images/xuancai_img_000181.png", id:"xuancai_img_000181"},
		{src:"images/xuancai_img_000182.png", id:"xuancai_img_000182"},
		{src:"images/xuancai_img_000183.png", id:"xuancai_img_000183"},
		{src:"images/xuancai_img_000184.png", id:"xuancai_img_000184"},
		{src:"images/xuancai_img_000185.png", id:"xuancai_img_000185"},
		{src:"images/xuancai_img_000186.png", id:"xuancai_img_000186"},
		{src:"images/xuancai_img_000187.png", id:"xuancai_img_000187"},
		{src:"images/xuancai_img_000188.jpg", id:"xuancai_img_000188"},
		{src:"images/xuancai_img_000189.png", id:"xuancai_img_000189"},
		{src:"images/xuancai_img_000190.png", id:"xuancai_img_000190"},
		{src:"images/xuancai_img_000191.png", id:"xuancai_img_000191"},
		{src:"images/xuancai_img_000192.png", id:"xuancai_img_000192"},
		{src:"images/xuancai_img_000193.png", id:"xuancai_img_000193"},
		{src:"images/xuancai_img_000194.png", id:"xuancai_img_000194"},
		{src:"images/xuancai_img_000195.png", id:"xuancai_img_000195"},
		{src:"images/xuancai_img_000196.png", id:"xuancai_img_000196"},
		{src:"images/xuancai_img_000197.png", id:"xuancai_img_000197"},
		{src:"sounds/bg.mp3", id:"bg"}
	]
};



// symbols:



(lib.xuancai_img_000001 = function() {
	this.initialize(img.xuancai_img_000001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,754);


(lib.xuancai_img_000002 = function() {
	this.initialize(img.xuancai_img_000002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,189);


(lib.xuancai_img_000003 = function() {
	this.initialize(img.xuancai_img_000003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,65);


(lib.xuancai_img_000004 = function() {
	this.initialize(img.xuancai_img_000004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000005 = function() {
	this.initialize(img.xuancai_img_000005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,368);


(lib.xuancai_img_000006 = function() {
	this.initialize(img.xuancai_img_000006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,368);


(lib.xuancai_img_000007 = function() {
	this.initialize(img.xuancai_img_000007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_img_000008 = function() {
	this.initialize(img.xuancai_img_000008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_img_000009 = function() {
	this.initialize(img.xuancai_img_000009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,103);


(lib.xuancai_img_000010 = function() {
	this.initialize(img.xuancai_img_000010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,1035);


(lib.xuancai_img_000011 = function() {
	this.initialize(img.xuancai_img_000011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,113);


(lib.xuancai_img_000012 = function() {
	this.initialize(img.xuancai_img_000012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,112);


(lib.xuancai_img_000013 = function() {
	this.initialize(img.xuancai_img_000013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000014 = function() {
	this.initialize(img.xuancai_img_000014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,51);


(lib.xuancai_img_000015 = function() {
	this.initialize(img.xuancai_img_000015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,536,377);


(lib.xuancai_img_000016 = function() {
	this.initialize(img.xuancai_img_000016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,116);


(lib.xuancai_img_000017 = function() {
	this.initialize(img.xuancai_img_000017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,104);


(lib.xuancai_img_000018 = function() {
	this.initialize(img.xuancai_img_000018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_img_000019 = function() {
	this.initialize(img.xuancai_img_000019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,62);


(lib.xuancai_img_000020 = function() {
	this.initialize(img.xuancai_img_000020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_img_000021 = function() {
	this.initialize(img.xuancai_img_000021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,92);


(lib.xuancai_img_000022 = function() {
	this.initialize(img.xuancai_img_000022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,56);


(lib.xuancai_img_000023 = function() {
	this.initialize(img.xuancai_img_000023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_img_000024 = function() {
	this.initialize(img.xuancai_img_000024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000025 = function() {
	this.initialize(img.xuancai_img_000025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,37);


(lib.xuancai_img_000026 = function() {
	this.initialize(img.xuancai_img_000026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.xuancai_img_000027 = function() {
	this.initialize(img.xuancai_img_000027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,61);


(lib.xuancai_img_000028 = function() {
	this.initialize(img.xuancai_img_000028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,626);


(lib.xuancai_img_000029 = function() {
	this.initialize(img.xuancai_img_000029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,509);


(lib.xuancai_img_000030 = function() {
	this.initialize(img.xuancai_img_000030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,395);


(lib.xuancai_img_000031 = function() {
	this.initialize(img.xuancai_img_000031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,408);


(lib.xuancai_img_000032 = function() {
	this.initialize(img.xuancai_img_000032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_img_000033 = function() {
	this.initialize(img.xuancai_img_000033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000034 = function() {
	this.initialize(img.xuancai_img_000034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,373);


(lib.xuancai_img_000035 = function() {
	this.initialize(img.xuancai_img_000035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,285);


(lib.xuancai_img_000036 = function() {
	this.initialize(img.xuancai_img_000036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,265);


(lib.xuancai_img_000037 = function() {
	this.initialize(img.xuancai_img_000037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,30);


(lib.xuancai_img_000038 = function() {
	this.initialize(img.xuancai_img_000038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,40);


(lib.xuancai_img_000039 = function() {
	this.initialize(img.xuancai_img_000039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,30);


(lib.xuancai_img_000040 = function() {
	this.initialize(img.xuancai_img_000040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,19);


(lib.xuancai_img_000041 = function() {
	this.initialize(img.xuancai_img_000041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,70);


(lib.xuancai_img_000042 = function() {
	this.initialize(img.xuancai_img_000042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,70);


(lib.xuancai_img_000043 = function() {
	this.initialize(img.xuancai_img_000043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,41);


(lib.xuancai_img_000044 = function() {
	this.initialize(img.xuancai_img_000044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,102);


(lib.xuancai_img_000045 = function() {
	this.initialize(img.xuancai_img_000045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,135);


(lib.xuancai_img_000046 = function() {
	this.initialize(img.xuancai_img_000046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,86);


(lib.xuancai_img_000047 = function() {
	this.initialize(img.xuancai_img_000047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,29);


(lib.xuancai_img_000048 = function() {
	this.initialize(img.xuancai_img_000048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.xuancai_img_000049 = function() {
	this.initialize(img.xuancai_img_000049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.xuancai_img_000050 = function() {
	this.initialize(img.xuancai_img_000050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,120);


(lib.xuancai_img_000051 = function() {
	this.initialize(img.xuancai_img_000051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,14);


(lib.xuancai_img_000052 = function() {
	this.initialize(img.xuancai_img_000052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,12);


(lib.xuancai_img_000053 = function() {
	this.initialize(img.xuancai_img_000053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,12);


(lib.xuancai_img_000054 = function() {
	this.initialize(img.xuancai_img_000054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,31);


(lib.xuancai_img_000055 = function() {
	this.initialize(img.xuancai_img_000055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,64);


(lib.xuancai_img_000056 = function() {
	this.initialize(img.xuancai_img_000056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,160);


(lib.xuancai_img_000057 = function() {
	this.initialize(img.xuancai_img_000057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,106);


(lib.xuancai_img_000058 = function() {
	this.initialize(img.xuancai_img_000058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_img_000059 = function() {
	this.initialize(img.xuancai_img_000059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,321);


(lib.xuancai_img_000060 = function() {
	this.initialize(img.xuancai_img_000060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,844);


(lib.xuancai_img_000061 = function() {
	this.initialize(img.xuancai_img_000061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_img_000062 = function() {
	this.initialize(img.xuancai_img_000062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,20);


(lib.xuancai_img_000063 = function() {
	this.initialize(img.xuancai_img_000063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,565);


(lib.xuancai_img_000064 = function() {
	this.initialize(img.xuancai_img_000064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000065 = function() {
	this.initialize(img.xuancai_img_000065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_img_000066 = function() {
	this.initialize(img.xuancai_img_000066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,99);


(lib.xuancai_img_000067 = function() {
	this.initialize(img.xuancai_img_000067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_img_000068 = function() {
	this.initialize(img.xuancai_img_000068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,134);


(lib.xuancai_img_000069 = function() {
	this.initialize(img.xuancai_img_000069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,134);


(lib.xuancai_img_000070 = function() {
	this.initialize(img.xuancai_img_000070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,135);


(lib.xuancai_img_000071 = function() {
	this.initialize(img.xuancai_img_000071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,133);


(lib.xuancai_img_000072 = function() {
	this.initialize(img.xuancai_img_000072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,78);


(lib.xuancai_img_000073 = function() {
	this.initialize(img.xuancai_img_000073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000074 = function() {
	this.initialize(img.xuancai_img_000074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,225);


(lib.xuancai_img_000075 = function() {
	this.initialize(img.xuancai_img_000075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,98);


(lib.xuancai_img_000076 = function() {
	this.initialize(img.xuancai_img_000076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,814);


(lib.xuancai_img_000077 = function() {
	this.initialize(img.xuancai_img_000077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.xuancai_img_000078 = function() {
	this.initialize(img.xuancai_img_000078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,783);


(lib.xuancai_img_000079 = function() {
	this.initialize(img.xuancai_img_000079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_img_000080 = function() {
	this.initialize(img.xuancai_img_000080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,104);


(lib.xuancai_img_000081 = function() {
	this.initialize(img.xuancai_img_000081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,80);


(lib.xuancai_img_000082 = function() {
	this.initialize(img.xuancai_img_000082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_img_000083 = function() {
	this.initialize(img.xuancai_img_000083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000084 = function() {
	this.initialize(img.xuancai_img_000084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,324);


(lib.xuancai_img_000085 = function() {
	this.initialize(img.xuancai_img_000085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,508);


(lib.xuancai_img_000086 = function() {
	this.initialize(img.xuancai_img_000086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,23);


(lib.xuancai_img_000087 = function() {
	this.initialize(img.xuancai_img_000087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,113);


(lib.xuancai_img_000088 = function() {
	this.initialize(img.xuancai_img_000088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,76);


(lib.xuancai_img_000089 = function() {
	this.initialize(img.xuancai_img_000089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,1035);


(lib.xuancai_img_000090 = function() {
	this.initialize(img.xuancai_img_000090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,319);


(lib.xuancai_img_000091 = function() {
	this.initialize(img.xuancai_img_000091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,241);


(lib.xuancai_img_000092 = function() {
	this.initialize(img.xuancai_img_000092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000093 = function() {
	this.initialize(img.xuancai_img_000093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,185);


(lib.xuancai_img_000094 = function() {
	this.initialize(img.xuancai_img_000094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,100);


(lib.xuancai_img_000095 = function() {
	this.initialize(img.xuancai_img_000095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,31);


(lib.xuancai_img_000096 = function() {
	this.initialize(img.xuancai_img_000096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,610,936);


(lib.xuancai_img_000097 = function() {
	this.initialize(img.xuancai_img_000097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.xuancai_img_000098 = function() {
	this.initialize(img.xuancai_img_000098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.xuancai_img_000099 = function() {
	this.initialize(img.xuancai_img_000099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,117);


(lib.xuancai_img_000100 = function() {
	this.initialize(img.xuancai_img_000100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,161);


(lib.xuancai_img_000101 = function() {
	this.initialize(img.xuancai_img_000101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,88);


(lib.xuancai_img_000102 = function() {
	this.initialize(img.xuancai_img_000102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,117);


(lib.xuancai_img_000103 = function() {
	this.initialize(img.xuancai_img_000103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,123);


(lib.xuancai_img_000104 = function() {
	this.initialize(img.xuancai_img_000104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,101);


(lib.xuancai_img_000105 = function() {
	this.initialize(img.xuancai_img_000105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.xuancai_img_000106 = function() {
	this.initialize(img.xuancai_img_000106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,90);


(lib.xuancai_img_000107 = function() {
	this.initialize(img.xuancai_img_000107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.xuancai_img_000108 = function() {
	this.initialize(img.xuancai_img_000108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,113);


(lib.xuancai_img_000109 = function() {
	this.initialize(img.xuancai_img_000109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,158);


(lib.xuancai_img_000110 = function() {
	this.initialize(img.xuancai_img_000110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,67);


(lib.xuancai_img_000111 = function() {
	this.initialize(img.xuancai_img_000111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,18);


(lib.xuancai_img_000112 = function() {
	this.initialize(img.xuancai_img_000112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,23);


(lib.xuancai_img_000113 = function() {
	this.initialize(img.xuancai_img_000113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000114 = function() {
	this.initialize(img.xuancai_img_000114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,388,277);


(lib.xuancai_img_000115 = function() {
	this.initialize(img.xuancai_img_000115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,52);


(lib.xuancai_img_000116 = function() {
	this.initialize(img.xuancai_img_000116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.xuancai_img_000117 = function() {
	this.initialize(img.xuancai_img_000117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,48);


(lib.xuancai_img_000118 = function() {
	this.initialize(img.xuancai_img_000118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,37);


(lib.xuancai_img_000119 = function() {
	this.initialize(img.xuancai_img_000119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,67);


(lib.xuancai_img_000120 = function() {
	this.initialize(img.xuancai_img_000120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,52);


(lib.xuancai_img_000121 = function() {
	this.initialize(img.xuancai_img_000121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,106);


(lib.xuancai_img_000122 = function() {
	this.initialize(img.xuancai_img_000122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_img_000123 = function() {
	this.initialize(img.xuancai_img_000123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,101);


(lib.xuancai_img_000124 = function() {
	this.initialize(img.xuancai_img_000124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,89);


(lib.xuancai_img_000125 = function() {
	this.initialize(img.xuancai_img_000125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,145);


(lib.xuancai_img_000126 = function() {
	this.initialize(img.xuancai_img_000126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,149);


(lib.xuancai_img_000127 = function() {
	this.initialize(img.xuancai_img_000127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000128 = function() {
	this.initialize(img.xuancai_img_000128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,754);


(lib.xuancai_img_000129 = function() {
	this.initialize(img.xuancai_img_000129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,225);


(lib.xuancai_img_000130 = function() {
	this.initialize(img.xuancai_img_000130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,98);


(lib.xuancai_img_000131 = function() {
	this.initialize(img.xuancai_img_000131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.xuancai_img_000132 = function() {
	this.initialize(img.xuancai_img_000132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,107);


(lib.xuancai_img_000133 = function() {
	this.initialize(img.xuancai_img_000133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,66);


(lib.xuancai_img_000134 = function() {
	this.initialize(img.xuancai_img_000134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,810);


(lib.xuancai_img_000135 = function() {
	this.initialize(img.xuancai_img_000135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,177);


(lib.xuancai_img_000136 = function() {
	this.initialize(img.xuancai_img_000136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,65);


(lib.xuancai_img_000137 = function() {
	this.initialize(img.xuancai_img_000137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.xuancai_img_000138 = function() {
	this.initialize(img.xuancai_img_000138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000139 = function() {
	this.initialize(img.xuancai_img_000139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,596,269);


(lib.xuancai_img_000140 = function() {
	this.initialize(img.xuancai_img_000140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,81);


(lib.xuancai_img_000141 = function() {
	this.initialize(img.xuancai_img_000141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,187);


(lib.xuancai_img_000142 = function() {
	this.initialize(img.xuancai_img_000142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,45);


(lib.xuancai_img_000143 = function() {
	this.initialize(img.xuancai_img_000143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,42);


(lib.xuancai_img_000144 = function() {
	this.initialize(img.xuancai_img_000144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,56);


(lib.xuancai_img_000145 = function() {
	this.initialize(img.xuancai_img_000145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,46);


(lib.xuancai_img_000146 = function() {
	this.initialize(img.xuancai_img_000146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,91);


(lib.xuancai_img_000147 = function() {
	this.initialize(img.xuancai_img_000147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,65);


(lib.xuancai_img_000148 = function() {
	this.initialize(img.xuancai_img_000148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_img_000149 = function() {
	this.initialize(img.xuancai_img_000149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_img_000150 = function() {
	this.initialize(img.xuancai_img_000150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,103);


(lib.xuancai_img_000151 = function() {
	this.initialize(img.xuancai_img_000151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,981);


(lib.xuancai_img_000152 = function() {
	this.initialize(img.xuancai_img_000152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_img_000153 = function() {
	this.initialize(img.xuancai_img_000153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,21);


(lib.xuancai_img_000154 = function() {
	this.initialize(img.xuancai_img_000154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_img_000155 = function() {
	this.initialize(img.xuancai_img_000155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,20);


(lib.xuancai_img_000156 = function() {
	this.initialize(img.xuancai_img_000156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,327);


(lib.xuancai_img_000157 = function() {
	this.initialize(img.xuancai_img_000157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000158 = function() {
	this.initialize(img.xuancai_img_000158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.xuancai_img_000159 = function() {
	this.initialize(img.xuancai_img_000159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,94);


(lib.xuancai_img_000160 = function() {
	this.initialize(img.xuancai_img_000160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,26);


(lib.xuancai_img_000161 = function() {
	this.initialize(img.xuancai_img_000161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,19);


(lib.xuancai_img_000162 = function() {
	this.initialize(img.xuancai_img_000162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.xuancai_img_000163 = function() {
	this.initialize(img.xuancai_img_000163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.xuancai_img_000164 = function() {
	this.initialize(img.xuancai_img_000164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.xuancai_img_000165 = function() {
	this.initialize(img.xuancai_img_000165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,174);


(lib.xuancai_img_000166 = function() {
	this.initialize(img.xuancai_img_000166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.xuancai_img_000167 = function() {
	this.initialize(img.xuancai_img_000167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_img_000168 = function() {
	this.initialize(img.xuancai_img_000168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_img_000169 = function() {
	this.initialize(img.xuancai_img_000169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_img_000170 = function() {
	this.initialize(img.xuancai_img_000170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,35);


(lib.xuancai_img_000171 = function() {
	this.initialize(img.xuancai_img_000171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_img_000172 = function() {
	this.initialize(img.xuancai_img_000172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,125);


(lib.xuancai_img_000173 = function() {
	this.initialize(img.xuancai_img_000173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.xuancai_img_000174 = function() {
	this.initialize(img.xuancai_img_000174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.xuancai_img_000175 = function() {
	this.initialize(img.xuancai_img_000175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,67);


(lib.xuancai_img_000176 = function() {
	this.initialize(img.xuancai_img_000176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,21);


(lib.xuancai_img_000177 = function() {
	this.initialize(img.xuancai_img_000177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,13);


(lib.xuancai_img_000178 = function() {
	this.initialize(img.xuancai_img_000178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,13);


(lib.xuancai_img_000179 = function() {
	this.initialize(img.xuancai_img_000179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,9);


(lib.xuancai_img_000180 = function() {
	this.initialize(img.xuancai_img_000180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.xuancai_img_000181 = function() {
	this.initialize(img.xuancai_img_000181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,98);


(lib.xuancai_img_000182 = function() {
	this.initialize(img.xuancai_img_000182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,36);


(lib.xuancai_img_000183 = function() {
	this.initialize(img.xuancai_img_000183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,409);


(lib.xuancai_img_000184 = function() {
	this.initialize(img.xuancai_img_000184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,104);


(lib.xuancai_img_000185 = function() {
	this.initialize(img.xuancai_img_000185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_img_000186 = function() {
	this.initialize(img.xuancai_img_000186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,62);


(lib.xuancai_img_000187 = function() {
	this.initialize(img.xuancai_img_000187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_img_000188 = function() {
	this.initialize(img.xuancai_img_000188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_img_000189 = function() {
	this.initialize(img.xuancai_img_000189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_img_000190 = function() {
	this.initialize(img.xuancai_img_000190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,317);


(lib.xuancai_img_000191 = function() {
	this.initialize(img.xuancai_img_000191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,225);


(lib.xuancai_img_000192 = function() {
	this.initialize(img.xuancai_img_000192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_img_000193 = function() {
	this.initialize(img.xuancai_img_000193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,614,836);


(lib.xuancai_img_000194 = function() {
	this.initialize(img.xuancai_img_000194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,106);


(lib.xuancai_img_000195 = function() {
	this.initialize(img.xuancai_img_000195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,107);


(lib.xuancai_img_000196 = function() {
	this.initialize(img.xuancai_img_000196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,81);


(lib.xuancai_img_000197 = function() {
	this.initialize(img.xuancai_img_000197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000272 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000197();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000271 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000196();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332,81);


(lib.xuancai_mc_000270 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000195();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,107);


(lib.xuancai_mc_000269 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000194();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,106);


(lib.xuancai_mc_000268 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000193();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,614,836);


(lib.xuancai_mc_000266 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000191();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,173,225);


(lib.xuancai_mc_000265 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000190();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,270,317);


(lib.xuancai_mc_000264 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000189();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_mc_000263 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000188();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000262 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000187();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_mc_000261 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000186();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,62);


(lib.xuancai_mc_000260 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000185();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_mc_000259 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000184();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331,104);


(lib.xuancai_mc_000256 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000174();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.xuancai_mc_000254 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000172();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,125);


(lib.xuancai_mc_000253 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000171();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_mc_000252 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000169();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_mc_000251 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000168();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_mc_000250 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000167();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.xuancai_mc_000249 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000166();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.xuancai_mc_000248 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000165();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94,174);


(lib.xuancai_mc_000247 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000164();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.xuancai_mc_000246 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000163();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.xuancai_mc_000245 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000162();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.xuancai_mc_000244 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000161();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,19);


(lib.xuancai_mc_000241 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000181();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,98);


(lib.xuancai_mc_000239 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000179();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,9);


(lib.xuancai_mc_000238 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000178();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,13);


(lib.xuancai_mc_000237 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000177();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,13);


(lib.xuancai_mc_000236 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000176();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,21);


(lib.xuancai_mc_000234 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000159();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,94);


(lib.xuancai_mc_000232 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000157();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000231 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000156();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,607,327);


(lib.xuancai_mc_000226 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000151();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,628,981);


(lib.xuancai_mc_000225 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000150();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,103);


(lib.xuancai_mc_000224 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000149();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_mc_000223 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000148();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_mc_000220 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000141();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,187);


(lib.xuancai_mc_000219 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000139();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,596,269);


(lib.xuancai_mc_000214 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000143();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218,42);


(lib.xuancai_mc_000213 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000142();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,440,45);


(lib.xuancai_mc_000212 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000138();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000211 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000137();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.xuancai_mc_000208 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000134();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,627,810);


(lib.xuancai_mc_000207 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000133();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,442,66);


(lib.xuancai_mc_000206 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000132();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314,107);


(lib.xuancai_mc_000205 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000131();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.xuancai_mc_000204 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000130();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,98);


(lib.xuancai_mc_000203 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000129();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,225);


(lib.xuancai_mc_000201 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000127();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000200 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000126();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,149);


(lib.xuancai_mc_000199 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000125();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144,145);


(lib.xuancai_mc_000198 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000124();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,186,89);


(lib.xuancai_mc_000197 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000123();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313,101);


(lib.xuancai_mc_000196 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000122();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_mc_000195 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000121();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,106);


(lib.xuancai_mc_000194 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000120();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,52);


(lib.xuancai_mc_000193 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000119();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,67);


(lib.xuancai_mc_000192 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000118();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,37);


(lib.xuancai_mc_000191 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000117();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,48);


(lib.xuancai_mc_000190 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000116();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.xuancai_mc_000189 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000115();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,310,52);


(lib.xuancai_mc_000188 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000114();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,388,277);


(lib.xuancai_mc_000187 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000113();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000186 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000112();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,281,23);


(lib.xuancai_mc_000185 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000111();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,18);


(lib.xuancai_mc_000184 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000110();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,67);


(lib.xuancai_mc_000183 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000109();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331,158);


(lib.xuancai_mc_000170 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000096();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,610,936);


(lib.xuancai_mc_000169 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000095();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,31);


(lib.xuancai_mc_000168 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000094();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,100);


(lib.xuancai_mc_000167 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000093();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,185);


(lib.xuancai_mc_000166 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000092();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000163 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000089();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,632,1035);


(lib.xuancai_mc_000162 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000088();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,325,76);


(lib.xuancai_mc_000161 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000087();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,333,113);


(lib.xuancai_mc_000160 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000083();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000158 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000081();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,80);


(lib.xuancai_mc_000157 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000080();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331,104);


(lib.xuancai_mc_000156 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000079();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_mc_000155 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000078();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,604,783);


(lib.xuancai_mc_000152 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000084();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,324);


(lib.xuancai_mc_000151 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000077();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


(lib.xuancai_mc_000150 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000076();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,459,814);


(lib.xuancai_mc_000149 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000075();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,98);


(lib.xuancai_mc_000148 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000074();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,225);


(lib.xuancai_mc_000147 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000073();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000146 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000072();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,333,78);


(lib.xuancai_mc_000141 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000067();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_mc_000140 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000066();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288,99);


(lib.xuancai_mc_000139 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000065();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_mc_000138 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000064();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000137 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000063();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,334,565);


(lib.xuancai_mc_000136 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000062();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,20);


(lib.xuancai_mc_000135 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000061();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000134 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000060();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,552,844);


(lib.xuancai_mc_000132 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000058();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_mc_000130 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000035();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297,285);


(lib.xuancai_mc_000129 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000034();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,295,373);


(lib.xuancai_mc_000128 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000033();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000127 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000032();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_mc_000126 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000057();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,327,106);


(lib.xuancai_mc_000125 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000056();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,160);


(lib.xuancai_mc_000124 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000055();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,64);


(lib.xuancai_mc_000123 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000054();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,31);


(lib.xuancai_mc_000122 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000053();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13,12);


(lib.xuancai_mc_000121 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000052();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13,12);


(lib.xuancai_mc_000120 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000051();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,14);


(lib.xuancai_mc_000119 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000050();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,120);


(lib.xuancai_mc_000118 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000049();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.xuancai_mc_000117 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000048();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.xuancai_mc_000115 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000046();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,86);


(lib.xuancai_mc_000114 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000044();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,102);


(lib.xuancai_mc_000113 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000043();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,41);


(lib.xuancai_mc_000112 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000045();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,135);


(lib.xuancai_mc_000111 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000042();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,70);


(lib.xuancai_mc_000109 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000040();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,19);


(lib.xuancai_mc_000108 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000039();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35,30);


(lib.xuancai_mc_000105 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000031();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129,408);


(lib.xuancai_mc_000104 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000030();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,395);


(lib.xuancai_mc_000103 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000029();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234,509);


(lib.xuancai_mc_000102 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000028();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,266,626);


(lib.xuancai_mc_000098 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000024();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000097 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000023();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,54);


(lib.xuancai_mc_000094 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000020();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,628,996);


(lib.xuancai_mc_000093 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000019();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,62);


(lib.xuancai_mc_000092 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000018();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_mc_000091 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000017();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331,104);


(lib.xuancai_mc_000090 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000016();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,116);


(lib.xuancai_mc_000087 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000013();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1100);


(lib.xuancai_mc_000086 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000012();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,112);


(lib.xuancai_mc_000085 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000011();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,333,113);


(lib.xuancai_mc_000084 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000010();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,632,1035);


(lib.xuancai_mc_000083 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000009();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,103);


(lib.xuancai_mc_000082 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000008();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,158);


(lib.xuancai_mc_000081 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000007();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,77);


(lib.xuancai_mc_000078 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000192();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000077 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000158();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.xuancai_mc_000076 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000160();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,26);


(lib.xuancai_mc_000075 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000182();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,36);


(lib.xuancai_mc_000074 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000180();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.xuancai_mc_000073 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000170();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,35);


(lib.xuancai_mc_000072 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000173();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.xuancai_mc_000071 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000175();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,67);


(lib.xuancai_mc_000070 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000183();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,427,409);


(lib.xuancai_mc_000068 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000153();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,21);


(lib.xuancai_mc_000067 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000152();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000066 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000154();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000065 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000155();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,20);


(lib.xuancai_mc_000064 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000022();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,56);


(lib.xuancai_mc_000063 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000021();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,92);


(lib.xuancai_mc_000062 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000025();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,37);


(lib.xuancai_mc_000061 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000026();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.xuancai_mc_000060 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000027();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,61);


(lib.xuancai_mc_000059 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xuancai_img_000015();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,536,377);


(lib.xuancai_mc_000057 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000003();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,639,65);


(lib.xuancai_mc_000056 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000145();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,373,46);


(lib.xuancai_mc_000055 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000147();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,376,65);


(lib.xuancai_mc_000054 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000146();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,379,91);


(lib.xuancai_mc_000053 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000144();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,56);


(lib.xuancai_mc_000052 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000140();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,81);


(lib.xuancai_mc_000051 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000136();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,65);


(lib.xuancai_mc_000050 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000135();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,177);


(lib.xuancai_mc_000048 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000002();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,279,189);


(lib.xuancai_mc_000046 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000001();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,754,754);


(lib.xuancai_mc_000044 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000101();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,242,88);


(lib.xuancai_mc_000043 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000100();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211,161);


(lib.xuancai_mc_000042 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000098();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.xuancai_mc_000041 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000099();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,117);


(lib.xuancai_mc_000040 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000097();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.xuancai_mc_000039 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000102();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116,117);


(lib.xuancai_mc_000038 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000105();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.xuancai_mc_000037 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000106();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,90);


(lib.xuancai_mc_000036 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000103();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,123);


(lib.xuancai_mc_000035 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000104();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146,101);


(lib.xuancai_mc_000034 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000107();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.xuancai_mc_000033 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000108();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,112,113);


(lib.xuancai_mc_000032 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000090();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,326,319);


(lib.xuancai_mc_000031 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000091();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,611,241);


(lib.xuancai_mc_000030 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000086();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,281,23);


(lib.xuancai_mc_000029 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000082();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000028 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000085();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,525,508);


(lib.xuancai_mc_000027 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000069();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,134);


(lib.xuancai_mc_000026 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000070();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,135);


(lib.xuancai_mc_000025 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000068();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133,134);


(lib.xuancai_mc_000024 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000071();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133,133);


(lib.xuancai_mc_000023 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000059();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328,321);


(lib.xuancai_mc_000022 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000038();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,40);


(lib.xuancai_mc_000021 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000047();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,29);


(lib.xuancai_mc_000020 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000037();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35,30);


(lib.xuancai_mc_000019 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000041();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,70);


(lib.xuancai_mc_000018 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000036();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,522,265);


(lib.xuancai_mc_000017 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000005();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,368);


(lib.xuancai_mc_000001 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xuancai_img_000014();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,51);


(lib.xuancai_mc_000267 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000078();
	this.instance.setTransform(160.5,13,1,1,0,0,0,160.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162.5,y:11},4,cjs.Ease.get(1)).to({x:156.5,y:15},4,cjs.Ease.get(1)).to({x:160.5,y:13},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000257 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000071();
	this.instance.setTransform(35,33.5,1,1,0,0,0,35,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.5},11).to({y:33.5},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,67);


(lib.xuancai_mc_000255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000072();
	this.instance.setTransform(18,16,1,1,0,0,0,18,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.5},10).to({y:16},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.xuancai_mc_000243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000076();
	this.instance.setTransform(11.5,13,1,1,0,0,0,11.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16},10).to({y:13},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,26);


(lib.xuancai_mc_000242 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000075();
	this.instance.setTransform(20.5,18,1,1,0,0,0,20.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15},10,cjs.Ease.get(1)).to({y:18},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,36);


(lib.xuancai_mc_000240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000074();
	this.instance.setTransform(26,30,1,1,0,0,0,26,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27},10).to({y:30},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,60);


(lib.xuancai_mc_000235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000073();
	this.instance.setTransform(22,17.5,1,1,0,0,0,22,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16},12).to({y:17.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,35);


(lib.xuancai_mc_000233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000077();
	this.instance.setTransform(21,21,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:24},9,cjs.Ease.get(1)).to({y:21},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.xuancai_mc_000230 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000065();
	this.instance.setTransform(120,10,1,1,0,0,0,120,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:122,y:12},9,cjs.Ease.get(0.95)).to({x:116,y:6},7,cjs.Ease.get(0.95)).to({y:10},6,cjs.Ease.get(0.95)).to({x:120},8,cjs.Ease.get(0.95)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,20);


(lib.xuancai_mc_000229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000066();
	this.instance.setTransform(160.5,13,1,1,0,0,0,160.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:158.5,y:11},6,cjs.Ease.get(1)).to({x:160.5,y:15},5,cjs.Ease.get(1)).to({x:162.5,y:9},6,cjs.Ease.get(1)).to({x:160.5,y:13},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000068();
	this.instance.setTransform(128,10.5,1,1,0,0,0,128,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:130,y:6.5},8,cjs.Ease.get(1)).to({x:126,y:12.5},5,cjs.Ease.get(1)).to({x:124,y:8.5},3,cjs.Ease.get(1)).to({x:128,y:10.5},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,21);


(lib.xuancai_mc_000227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000067();
	this.instance.setTransform(160.5,13,1,1,0,0,0,160.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:158.5,y:15},6,cjs.Ease.get(1)).to({x:162.5,y:11},7,cjs.Ease.get(1)).to({x:158.5,y:13},7,cjs.Ease.get(1)).to({x:160.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000052();
	this.instance.setTransform(42,40.5,1,1,0,0,0,42,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:69.9},23).to({y:40.5},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,81);


(lib.xuancai_mc_000218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000055();
	this.instance.setTransform(188,32.5,1,1,0,0,0,188,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:163.5},35).to({x:188},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376,65);


(lib.xuancai_mc_000217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000054();
	this.instance.setTransform(189.5,45.5,1,1,0,0,0,189.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:214},13).to({x:189.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379,91);


(lib.xuancai_mc_000216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000056();
	this.instance.setTransform(186.5,23,1,1,0,0,0,186.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:211},50).to({x:186.5},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373,46);


(lib.xuancai_mc_000215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000053();
	this.instance.setTransform(130,28,1,1,0,0,0,130,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},9,cjs.Ease.get(0.99)).to({regX:130.1,regY:27.9,scaleX:0.91,scaleY:0.91,x:130.1,y:27.9},7,cjs.Ease.get(0.99)).to({regX:130,regY:28,scaleX:1,scaleY:1,x:130,y:28},4,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,56);


(lib.xuancai_mc_000210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000051();
	this.instance.setTransform(37,32.5,1,1,0,0,0,37,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.7},17,cjs.Ease.get(1)).to({y:32.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,65);


(lib.xuancai_mc_000209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000050();
	this.instance.setTransform(101,88.5,1,1,0,0,0,101,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:103.2},12,cjs.Ease.get(1)).to({y:88.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,177);


(lib.xuancai_mc_000182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000033();
	this.instance.setTransform(56,56.5,1,1,0,0,0,56,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:49.2},16,cjs.Ease.get(1)).to({y:56.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,113);


(lib.xuancai_mc_000181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000034();
	this.instance.setTransform(46,46,1,1,0,0,0,46,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.1},21,cjs.Ease.get(1)).to({y:46},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.xuancai_mc_000180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000037();
	this.instance.setTransform(45.5,45,1,1,0,0,0,45.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:52.4},19,cjs.Ease.get(0.99)).to({y:45},37,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,90);


(lib.xuancai_mc_000179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000038();
	this.instance.setTransform(53,53,1,1,0,0,0,53,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:45.7},32,cjs.Ease.get(1)).to({y:53},36,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,106);


(lib.xuancai_mc_000178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000035();
	this.instance.setTransform(73,50.5,1,1,0,0,0,73,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:55.4},24,cjs.Ease.get(0.99)).to({y:50.5},19,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,101);


(lib.xuancai_mc_000177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000036();
	this.instance.setTransform(62,61.5,1,1,0,0,0,62,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:73.8},31,cjs.Ease.get(1)).to({y:61.5},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,123);


(lib.xuancai_mc_000176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000039();
	this.instance.setTransform(58,58.5,1,1,0,0,0,58,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:65.9},24).to({y:58.5},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,117);


(lib.xuancai_mc_000175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000044();
	this.instance.setTransform(121,44,1,1,0,0,0,121,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:63.6},40,cjs.Ease.get(1)).to({y:44},44,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,88);


(lib.xuancai_mc_000174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000043();
	this.instance.setTransform(105.5,80.5,1,1,0,0,0,105.5,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90.3},44,cjs.Ease.get(0.4)).to({y:80.5},39,cjs.Ease.get(0.4)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211,161);


(lib.xuancai_mc_000173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000041();
	this.instance.setTransform(57.5,58.5,1,1,0,0,0,57.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:46.3},34).to({y:58.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,117);


(lib.xuancai_mc_000172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000042();
	this.instance.setTransform(55,55,1,1,0,0,0,55,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:69.7},24).to({y:55},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.xuancai_mc_000171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000040();
	this.instance.setTransform(51.5,51.5,1,1,0,0,0,51.5,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.7},34).to({y:51.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);


(lib.xuancai_mc_000165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000031();
	this.instance.setTransform(305.5,120.5,1,1,0,0,0,305.5,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:310.4},14).to({x:305.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,241);


(lib.xuancai_mc_000164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000032();
	this.instance.setTransform(163,159.5,1,1,0,0,0,163,159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326,319);


(lib.xuancai_mc_000159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000029();
	this.instance.setTransform(160.5,13,1,1,0,0,0,160.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:172.5},21).to({x:160.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321,26);


(lib.xuancai_mc_000154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000030();
	this.instance.setTransform(140.5,11.5,1,1,0,0,0,140.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:128.5},23,cjs.Ease.get(1)).to({x:140.5},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,23);


(lib.xuancai_mc_000153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000028();
	this.instance.setTransform(262.5,254,1,1,0,0,0,262.5,254);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},67).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,525,508);


(lib.xuancai_mc_000145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000024();
	this.instance.setTransform(66.5,66.5,1,1,0,0,0,66.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91},19,cjs.Ease.get(1)).to({x:66.5},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,133);


(lib.xuancai_mc_000144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000026();
	this.instance.setTransform(67.5,67.5,1,1,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92},36,cjs.Ease.get(1)).to({x:67.5},37,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,135);


(lib.xuancai_mc_000143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000027();
	this.instance.setTransform(67.5,67,1,1,0,0,0,67.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92},32,cjs.Ease.get(1)).to({x:67.5},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,134);


(lib.xuancai_mc_000142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000025();
	this.instance.setTransform(66.5,67,1,1,0,0,0,66.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91},26,cjs.Ease.get(1)).to({x:66.5},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,134);


(lib.xuancai_mc_000133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000023();
	this.instance.setTransform(164,160.5,1,1,0,0,0,164,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:166.4,y:156.9},4,cjs.Ease.get(1)).to({x:162.8,y:161.7},4,cjs.Ease.get(1)).to({y:159.3},3,cjs.Ease.get(1)).to({x:164,y:160.5},3,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328,321);


(lib.xuancai_mc_000131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000018();
	this.instance.setTransform(261,132.5,1,1,0,0,0,261,132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:256.2,y:131.3},23).to({x:261,y:132.5},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522,265);


(lib.xuancai_mc_000116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000021();
	this.instance.setTransform(22.5,14.5,1,1,0,0,0,22.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.9},7,cjs.Ease.get(1)).to({y:14.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,29);


(lib.xuancai_mc_000110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000019();
	this.instance.setTransform(39,35,1,1,0,0,0,39,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27.7},11,cjs.Ease.get(1)).to({y:35},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,70);


(lib.xuancai_mc_000107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000022();
	this.instance.setTransform(20.5,20,1,1,0,0,0,20.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.6},8,cjs.Ease.get(1)).to({y:20},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,40);


(lib.xuancai_mc_000106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000020();
	this.instance.setTransform(17.5,15,1,1,0,0,0,17.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10.1},7,cjs.Ease.get(1)).to({y:15},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,30);


(lib.xuancai_mc_000101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000060();
	this.instance.setTransform(36.5,30.5,1,1,0,0,0,36.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40.5,y:36.5},9,cjs.Ease.get(1)).to({x:36.5,y:30.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,61);


(lib.xuancai_mc_000100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000061();
	this.instance.setTransform(33.5,32.5,1,1,0,0,0,33.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:31.5,y:36.5},11,cjs.Ease.get(1)).to({x:33.5,y:32.5},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.xuancai_mc_000099 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000062();
	this.instance.setTransform(13.5,18.5,1,1,0,0,0,13.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.5,y:10.5},11,cjs.Ease.get(1)).to({x:13.5,y:18.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,37);


(lib.xuancai_mc_000096 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000064();
	this.instance.setTransform(24,28,1,1,0,0,0,24,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},93).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,56);


(lib.xuancai_mc_000095 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000063();
	this.instance.setTransform(40,46,1,1,0,0,0,40,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},155).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,92);


(lib.xuancai_mc_000088 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000001();
	this.instance.setTransform(52,25.5,1,1,0,0,0,52,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.5},9,cjs.Ease.get(1)).to({y:25.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,51);


(lib.xuancai_mc_000080 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000017();
	this.instance.setTransform(17.8,350.7,1,1,0,5,-175,238.5,350.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-4.2,skewY:-184.2},15,cjs.Ease.get(1)).to({skewX:5,skewY:-175},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-0.5,290.8,389.1);


(lib.xuancai_mc_000079 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000017();
	this.instance.setTransform(238.5,350.7,1,1,-5,0,0,238.5,350.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.2},15,cjs.Ease.get(1)).to({rotation:-5},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-0.5,290.8,389.1);


(lib.xuancai_mc_000069 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000070();
	this.instance.setTransform(213.5,204.5,1,1,0,0,0,213.5,204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:212.5,y:203.5},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,427,409);


(lib.xuancai_mc_000058 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000059();
	this.instance.setTransform(268,188.5,1,1,0,0,0,268,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:188.6,scaleY:0.99,y:191.1},4).to({regY:188.5,scaleY:1.01,y:186.5},3).to({scaleY:1,y:188.5},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,536,377);


(lib.xuancai_mc_000047 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000048();
	this.instance.setTransform(105.2,116.5,1,1,0,0,0,105.2,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.7},18).to({rotation:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279,189);


(lib.xuancai_mc_000045 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000046();
	this.instance.setTransform(377,383.1,1,1,0,0,0,377,383.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},110).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,754,754);


(lib.xuancai_mc_000016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 组 277
	this.instance = new lib.xuancai_mc_000205();
	this.instance.setTransform(516.9,301.6,1,1,0,0,0,25.5,25.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:558.4,y:379.9,alpha:1},45).to({x:944.8,y:321.2,alpha:0},29).wait(1));

	// 图层 1201
	this.instance_1 = new lib.xuancai_mc_000190();
	this.instance_1.setTransform(399.9,353.1,1,1,0,0,0,26.5,26);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:583.5,y:513,alpha:1},45).to({x:798.7,y:557,alpha:0},29).wait(1));

	// 图层 1202
	this.instance_2 = new lib.xuancai_mc_000191();
	this.instance_2.setTransform(185.3,117.8,1,1,0,0,0,25,24);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:41,y:108,alpha:1},45).to({x:-181.1,y:215.6,alpha:0},29).wait(1));

	// 图层 1203
	this.instance_3 = new lib.xuancai_mc_000192();
	this.instance_3.setTransform(279.6,345.6,1,1,0,0,0,26.5,18.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:68.5,y:501.5,alpha:1},45).to({x:9.9,y:632.5,alpha:0},29).wait(1));

	// 图层 1204
	this.instance_4 = new lib.xuancai_mc_000193();
	this.instance_4.setTransform(245.5,84.9,1,1,0,0,0,25,33.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:111,y:33.5,alpha:1},45).to({x:-131.1,alpha:0},29).wait(1));

	// 图层 1205
	this.instance_5 = new lib.xuancai_mc_000194();
	this.instance_5.setTransform(214.6,221.2,1,1,0,0,0,38.5,26);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:38.5,y:231,alpha:1},45).to({x:-194.6,y:461,alpha:0},29).wait(1));

	// 图层 1206
	this.instance_6 = new lib.xuancai_mc_000195();
	this.instance_6.setTransform(409.4,417.1,1,1,0,0,0,36,53);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:517,y:561,alpha:1},45).to({x:673.6,y:722.4,alpha:0},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.3,51.4,382.1,418.7);


(lib.xuancai_mc_000015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.xuancai_mc_000208();
	this.instance.setTransform(313.5,418,1,1,0,0,0,313.5,405);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102));

	// 图层 1214
	this.instance_1 = new lib.xuancai_mc_000207();
	this.instance_1.setTransform(-283.4,770,1,1,0,0,0,221,33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({x:347.5},7,cjs.Ease.get(1)).to({x:323},4,cjs.Ease.get(1)).wait(55));

	// 组 261
	this.instance_2 = new lib.xuancai_mc_000215();
	this.instance_2.setTransform(-390.4,942,1,1,0,0,0,130,28);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({x:240.5},7,cjs.Ease.get(1)).to({x:216},4,cjs.Ease.get(1)).wait(51));

	// 图层 1216
	this.instance_3 = new lib.xuancai_mc_000214();
	this.instance_3.setTransform(-392.4,886,1,1,0,0,0,109,21);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({x:238.5},7,cjs.Ease.get(1)).to({x:214},4,cjs.Ease.get(1)).wait(49));

	// 图层 1119
	this.instance_4 = new lib.xuancai_mc_000213();
	this.instance_4.setTransform(-280.4,831.5,1,1,0,0,0,220,22.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).to({x:350.5},7,cjs.Ease.get(1)).to({x:326},4,cjs.Ease.get(1)).wait(45));

	// 组 35 拷贝
	this.instance_5 = new lib.xuancai_mc_000220();
	this.instance_5.setTransform(633.5,990.5,0.047,1,0,0,0,138,93.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({scaleX:1,x:502,alpha:1},7,cjs.Ease.get(1)).wait(54));

	// 展现盛夏炫彩效应
	this.instance_6 = new lib.xuancai_mc_000216();
	this.instance_6.setTransform(-267.7,361,1,1,0,0,0,186.5,23);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:307},7,cjs.Ease.get(1)).to({x:282.5},4,cjs.Ease.get(1)).wait(73));

	// 我的自由之翼
	this.instance_7 = new lib.xuancai_mc_000218();
	this.instance_7.setTransform(-260.2,306.5,1,1,0,0,0,188,32.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({x:314.5},7,cjs.Ease.get(1)).to({x:290},4,cjs.Ease.get(1)).wait(66));

	// 我的
	this.instance_8 = new lib.xuancai_mc_000217();
	this.instance_8.setTransform(-267.7,228.5,1,1,0,0,0,189.5,45.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).to({x:307},7,cjs.Ease.get(1)).to({x:282.5},4,cjs.Ease.get(1)).wait(61));

	// line
	this.instance_9 = new lib.xuancai_mc_000219();
	this.instance_9.setTransform(-411.2,653.5,1,1,0,0,0,298,134.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({_off:false},0).to({x:354.3,y:605.1},7,cjs.Ease.get(1)).to({x:342,y:607.5},6,cjs.Ease.get(1)).wait(55));

	// 组 277
	this.instance_10 = new lib.xuancai_mc_000211();
	this.instance_10.setTransform(-79.6,773,1,1,0,0,0,36,36);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({_off:false},0).to({x:108.7,y:565.8},4,cjs.Ease.get(1)).to({x:94,y:578},4,cjs.Ease.get(1)).wait(51));

	// 组 270 拷贝 8
	this.instance_11 = new lib.xuancai_mc_000221();
	this.instance_11.setTransform(-252.1,205.1,1,1,0,0,0,42,40.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({_off:false},0).to({x:540.2,y:168.4},7,cjs.Ease.get(1)).to({x:506,y:163.5},4,cjs.Ease.get(1)).wait(52));

	// 组 270 拷贝 7
	this.instance_12 = new lib.xuancai_mc_000210();
	this.instance_12.setTransform(-419.1,180.1,1,1,0,0,0,37,32.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).to({x:373.2,y:143.4},7,cjs.Ease.get(1)).to({x:339,y:138.5},4,cjs.Ease.get(1)).wait(57));

	// 组 270 拷贝 2
	this.instance_13 = new lib.xuancai_mc_000209();
	this.instance_13.setTransform(-657.1,225.1,1,1,0,0,0,101,88.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(28).to({_off:false},0).to({x:135.2,y:188.4},7,cjs.Ease.get(1)).to({x:101,y:183.5},4,cjs.Ease.get(1)).wait(63));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApOkdQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpg");
	var mask_graphics_1 = new cjs.Graphics().p("AooGAQigigAAjgQAAjiCgigQCgigDiAAQDgAACgCgQCgCgAADiQAADgigCgQigCgjgAAQjiAAigigg");
	var mask_graphics_2 = new cjs.Graphics().p("AqXKYQkUkTAAmFQAAmEEUkTQETkUGEAAQGFAAETEUQEUETAAGEQAAGFkUETQkTEUmFAAQmEAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("AumOnQmDmEAAojQAAoiGDmEQGEmDIiAAQIjAAGEGDQGDGEAAIiQAAIjmDGEQmEGDojAAQoiAAmEmDg");
	var mask_graphics_4 = new cjs.Graphics().p("AysStQnwnwAAq9QAAq8HwnwQHwnwK8AAQK9AAHwHwQHwHwAAK8QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("A2pWqQpZpYAAtSQAAtRJZpYQJYpZNRAAQNSAAJYJZQJZJYAANRQAANSpZJYQpYJZtSAAQtRAApYpZg");
	var mask_graphics_6 = new cjs.Graphics().p("A6fagQq+q/AAvhQAAvgK+q/QK/q+PgAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_graphics_7 = new cjs.Graphics().p("A+MeNQshshAAxsQAAxrMhshQMhshRrAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxrAAshshg");
	var mask_graphics_8 = new cjs.Graphics().p("EghxAhyQt/uAAAzyQAAzxN/uAQOAt/TxAAQTyAAOAN/QN/OAAATxQAATyt/OAQuAN/zyAAQzxAAuAt/g");
	var mask_graphics_9 = new cjs.Graphics().p("EglNAlOQvbvbAA1zQAA1yPbvbQPbvbVyAAQVzAAPbPbQPbPbAAVyQAAVzvbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgohAoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgrtAruQyHyHAA5nQAA5mSHyHQSHyHZmAAQZnAASHSHQSHSHAAZmQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EguxAuyQzYzYAA7aQAA7ZTYzYQTYzYbZAAQbaAATYTYQTYTYAAbZQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-63.2,y:-52.6}).wait(1).to({graphics:mask_graphics_1,x:-71.4,y:-54.8}).wait(1).to({graphics:mask_graphics_2,x:-64.5,y:-19.7}).wait(1).to({graphics:mask_graphics_3,x:-41.5,y:14.4}).wait(1).to({graphics:mask_graphics_4,x:-19.3,y:47.5}).wait(1).to({graphics:mask_graphics_5,x:2.3,y:79.5}).wait(1).to({graphics:mask_graphics_6,x:23.1,y:110.5}).wait(1).to({graphics:mask_graphics_7,x:43.2,y:140.4}).wait(1).to({graphics:mask_graphics_8,x:62.6,y:169.3}).wait(1).to({graphics:mask_graphics_9,x:81.4,y:197.1}).wait(1).to({graphics:mask_graphics_10,x:99.4,y:223.9}).wait(1).to({graphics:mask_graphics_11,x:116.7,y:249.7}).wait(1).to({graphics:mask_graphics_12,x:133.3,y:274.3}).wait(1).to({graphics:mask_graphics_13,x:149.2,y:298}).wait(1).to({graphics:mask_graphics_14,x:164.3,y:320.5}).wait(1).to({graphics:mask_graphics_15,x:178.8,y:342.1}).wait(1).to({graphics:mask_graphics_16,x:192.6,y:362.6}).wait(1).to({graphics:mask_graphics_17,x:205.7,y:382}).wait(1).to({graphics:mask_graphics_18,x:218,y:400.4}).wait(1).to({graphics:mask_graphics_19,x:229.7,y:417.7}).wait(1).to({graphics:mask_graphics_20,x:240.6,y:434}).wait(1).to({graphics:mask_graphics_21,x:250.9,y:449.2}).wait(1).to({graphics:mask_graphics_22,x:260.4,y:463.4}).wait(1).to({graphics:mask_graphics_23,x:269.2,y:476.5}).wait(1).to({graphics:mask_graphics_24,x:277.3,y:488.6}).wait(1).to({graphics:mask_graphics_25,x:284.8,y:499.6}).wait(1).to({graphics:mask_graphics_26,x:291.5,y:509.6}).wait(1).to({graphics:mask_graphics_27,x:297.5,y:518.5}).wait(1).to({graphics:mask_graphics_28,x:302.8,y:526.4}).wait(1).to({graphics:mask_graphics_29,x:307.4,y:533.2}).wait(1).to({graphics:mask_graphics_30,x:311.2,y:539}).wait(1).to({graphics:mask_graphics_31,x:314.4,y:543.7}).wait(1).to({graphics:mask_graphics_32,x:316.9,y:547.4}).wait(1).to({graphics:mask_graphics_33,x:318.7,y:550}).wait(1).to({graphics:mask_graphics_34,x:319.7,y:551.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(67));

	// 组 264
	this.instance_14 = new lib.xuancai_mc_000212();
	this.instance_14.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,627,810);


(lib.xuancai_mc_000013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.xuancai_mc_000170();
	this.instance.setTransform(326,504,1,1,0,0,0,305,468);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102));

	// 图层 1100
	this.instance_1 = new lib.xuancai_mc_000182();
	this.instance_1.setTransform(277,1256,1,1,0,0,0,56,56.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({y:96.9},7,cjs.Ease.get(1)).to({y:116.5},4,cjs.Ease.get(1)).wait(56).to({y:945.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1099
	this.instance_2 = new lib.xuancai_mc_000181();
	this.instance_2.setTransform(407,1271.5,1,1,0,0,0,46,46);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:112.4},7,cjs.Ease.get(1)).to({y:132},4,cjs.Ease.get(1)).wait(54).to({y:961.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1096
	this.instance_3 = new lib.xuancai_mc_000178();
	this.instance_3.setTransform(346,1374,1,1,0,0,0,73,50.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({y:214.9},7,cjs.Ease.get(1)).to({y:234.5},4,cjs.Ease.get(1)).wait(52).to({y:1063.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1095
	this.instance_4 = new lib.xuancai_mc_000177();
	this.instance_4.setTransform(199,1406,1,1,0,0,0,62,61.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:246.9},7,cjs.Ease.get(1)).to({y:266.5},4,cjs.Ease.get(1)).wait(50).to({y:1095.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1098
	this.instance_5 = new lib.xuancai_mc_000180();
	this.instance_5.setTransform(305.5,1477.5,1,1,0,0,0,45.5,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({y:318.4},7,cjs.Ease.get(1)).to({y:338},4,cjs.Ease.get(1)).wait(48).to({y:1167.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1097
	this.instance_6 = new lib.xuancai_mc_000179();
	this.instance_6.setTransform(446,1471.5,1,1,0,0,0,53,53);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({y:312.4},7,cjs.Ease.get(1)).to({y:332},4,cjs.Ease.get(1)).wait(46).to({y:1161.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1196
	this.instance_7 = new lib.xuancai_mc_000183();
	this.instance_7.setTransform(332.5,1614.5,1,1,0,0,0,165.5,79);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).to({y:455.4},7,cjs.Ease.get(1)).to({y:475},4,cjs.Ease.get(1)).wait(43).to({y:1304.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1197
	this.instance_8 = new lib.xuancai_mc_000184();
	this.instance_8.setTransform(332,1736,1,1,0,0,0,164,33.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).to({y:576.9},7,cjs.Ease.get(1)).to({y:596.5},4,cjs.Ease.get(1)).wait(41).to({y:1425.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1199
	this.instance_9 = new lib.xuancai_mc_000186();
	this.instance_9.setTransform(324.5,1795,1,1,0,0,0,140.5,11.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({y:635.9},7,cjs.Ease.get(1)).to({y:655.5},4,cjs.Ease.get(1)).wait(39).to({y:1484.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1094
	this.instance_10 = new lib.xuancai_mc_000176();
	this.instance_10.setTransform(426,1845,1,1,0,0,0,58,58.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({_off:false},0).to({y:685.9},7,cjs.Ease.get(1)).to({y:705.5},4,cjs.Ease.get(1)).wait(36).to({y:1534.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1198
	this.instance_11 = new lib.xuancai_mc_000185();
	this.instance_11.setTransform(336,1826.5,1,1,0,0,0,110,9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35).to({_off:false},0).to({y:667.4},7,cjs.Ease.get(1)).to({y:687},4,cjs.Ease.get(1)).wait(34).to({y:1516.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1090
	this.instance_12 = new lib.xuancai_mc_000173();
	this.instance_12.setTransform(320.5,1902,1,1,0,0,0,57.5,58.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(38).to({_off:false},0).to({y:742.9},7,cjs.Ease.get(1)).to({y:762.5},4,cjs.Ease.get(1)).wait(31).to({y:1591.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1088
	this.instance_13 = new lib.xuancai_mc_000171();
	this.instance_13.setTransform(198.5,1879,1,1,0,0,0,51.5,51.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).to({y:719.9},7,cjs.Ease.get(1)).to({y:739.5},4,cjs.Ease.get(1)).wait(28).to({y:1568.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1089
	this.instance_14 = new lib.xuancai_mc_000172();
	this.instance_14.setTransform(238,1993.5,1,1,0,0,0,55,55);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).to({y:834.4},7,cjs.Ease.get(1)).to({y:854},4,cjs.Ease.get(1)).wait(24).to({y:1683.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1091
	this.instance_15 = new lib.xuancai_mc_000174();
	this.instance_15.setTransform(397.5,1997,1,1,0,0,0,105.5,80.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).to({y:837.9},7,cjs.Ease.get(1)).to({y:857.5},4,cjs.Ease.get(1)).wait(22).to({y:1686.6,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// 图层 1092
	this.instance_16 = new lib.xuancai_mc_000175();
	this.instance_16.setTransform(327,2124.5,1,1,0,0,0,121,44);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50).to({_off:false},0).to({y:965.4},7,cjs.Ease.get(1)).to({y:985},4,cjs.Ease.get(1)).wait(19).to({y:1814.1,alpha:0},12,cjs.Ease.get(1)).wait(10));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgBiBYqQgpgpAAg6QAAg6ApgpQAqgpA4AAQA5AAApApQAqApAAA6QAAA6gqApQgpApg5AAQg4AAgqgpg");
	var mask_graphics_1 = new cjs.Graphics().p("EgGBBXcQifigAAjiQAAjjCfifQCgigDhAAQDiAACgCgQCfCfAADjQAADiifCgQigCfjiAAQjhAAigifg");
	var mask_graphics_2 = new cjs.Graphics().p("EgKXBWPQkUkTAAmFQAAmGEUkTQETkTGEAAQGFAAETETQEUETAAGGQAAGFkUETQkTEUmFAAQmEAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOmBVGQmDmEAAokQAAojGDmEQGEmDIiAAQIjAAGEGDQGDGEAAIjQAAIkmDGEQmEGDojAAQoiAAmEmDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgSsBT+QnwnwAAq9QAAq+HwnvQHwnwK8AAQK9AAHwHwQHwHvAAK+QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("EgWpBS5QpZpZAAtSQAAtSJZpZQJYpZNRAAQNSAAJYJZQJZJZAANSQAANSpZJZQpYJZtSAAQtRAApYpZg");
	var mask_graphics_6 = new cjs.Graphics().p("EgafBR2Qq+q/AAviQAAviK+q+QK/q/PgAAQPhAAK/K/QK+K+AAPiQAAPiq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_graphics_7 = new cjs.Graphics().p("EgeMBQ1QshshAAxtQAAxsMhshQMhshRrAAQRsAAMhMhQMhMhAARsQAARtshMhQshMhxsAAQxrAAshshg");
	var mask_graphics_8 = new cjs.Graphics().p("EghxBP2Qt/t/AAzzQAAzzN/t/QOAt+TxAAQTyAAOAN+QN/N/AATzQAATzt/N/QuAOAzyAAQzxAAuAuAg");
	var mask_graphics_9 = new cjs.Graphics().p("EglNBO6QvbvbAA10QAA10PbvaQPbvZVyAAQVzAAPbPZQPbPaAAV0QAAV0vbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgohBOAQwzwzAA3wQAA3wQzwxQQywyXvAAQXwAAQyQyQQzQxAAXwQAAXwwzQzQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgrtBNIQyHyHAA5nQAA5oSHyFQSHyHZmAAQZnAASHSHQSHSFAAZoQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EguxBMTQzYzYAA7aQAA7aTYzWQTYzZbZAAQbaAATYTZQTYTWAAbaQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsBLgQ0m0mAA9IQAA9FUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdFQAAdI0mUmQ0mUl9HAAQ9GAA0m0lg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fBKvQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVw+wAAQ+vAA1w1wg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JBKAUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sBJUUgX5gX5AAAgh0UAAAghyAX5gX5UAX6gX6AhyAAAUAhzAAAAX6AX6UAX5AX5AAAAhyUAAAAh0gX5AX5UgX6AX6ghzAAAUghyAAAgX6gX6g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GBIqUgY5gY5AAAgjOUAAAgjMAY5gY5UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY5AAAAjMUAAAAjOgY5AY5UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XBICUgZ2gZ1AAAgkjUAAAgkhAZ2gZ2UAZ1gZ1AkiAAAUAkjAAAAZ1AZ1UAZ2AZ2AAAAkhUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBHdUgavgavAAAglzUAAAglyAavgauUAaugauAlyAAAUAlzAAAAauAauUAavAauAAAAlyUAAAAlzgavAavUgauAauglzAAAUglyAAAgaugaug");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBG6UgbkgbkAAAgm/UAAAgm9AbkgbkUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbkAAAAm9UAAAAm/gbkAbkUgbjAbjgm/AAAUgm+AAAgbjgbjg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBGZUgcWgcWAAAgoGUAAAgoEAcWgcVUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcVAAAAoEUAAAAoGgcWAcWUgcWAcVgoFAAAUgoEAAAgcWgcVg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:571.6}).wait(1).to({graphics:mask_graphics_1,x:18,y:575.6}).wait(1).to({graphics:mask_graphics_2,x:35.5,y:579.5}).wait(1).to({graphics:mask_graphics_3,x:52.5,y:583.3}).wait(1).to({graphics:mask_graphics_4,x:69,y:587}).wait(1).to({graphics:mask_graphics_5,x:84.9,y:590.6}).wait(1).to({graphics:mask_graphics_6,x:100.3,y:594.1}).wait(1).to({graphics:mask_graphics_7,x:115.2,y:597.4}).wait(1).to({graphics:mask_graphics_8,x:129.6,y:600.6}).wait(1).to({graphics:mask_graphics_9,x:143.4,y:603.7}).wait(1).to({graphics:mask_graphics_10,x:156.8,y:606.7}).wait(1).to({graphics:mask_graphics_11,x:169.6,y:609.6}).wait(1).to({graphics:mask_graphics_12,x:181.9,y:612.4}).wait(1).to({graphics:mask_graphics_13,x:193.6,y:615}).wait(1).to({graphics:mask_graphics_14,x:204.8,y:617.5}).wait(1).to({graphics:mask_graphics_15,x:215.6,y:619.9}).wait(1).to({graphics:mask_graphics_16,x:225.7,y:622.2}).wait(1).to({graphics:mask_graphics_17,x:235.4,y:624.4}).wait(1).to({graphics:mask_graphics_18,x:244.6,y:626.4}).wait(1).to({graphics:mask_graphics_19,x:253.2,y:628.4}).wait(1).to({graphics:mask_graphics_20,x:261.3,y:630.2}).wait(1).to({graphics:mask_graphics_21,x:268.9,y:631.9}).wait(1).to({graphics:mask_graphics_22,x:275.9,y:631.7}).wait(1).to({graphics:mask_graphics_23,x:282.4,y:619.9}).wait(1).to({graphics:mask_graphics_24,x:288.5,y:609.1}).wait(1).to({graphics:mask_graphics_25,x:293.9,y:599.2}).wait(1).to({graphics:mask_graphics_26,x:298.9,y:590.3}).wait(1).to({graphics:mask_graphics_27,x:303.3,y:582.3}).wait(1).to({graphics:mask_graphics_28,x:307.3,y:575.2}).wait(1).to({graphics:mask_graphics_29,x:310.7,y:569.1}).wait(1).to({graphics:mask_graphics_30,x:313.5,y:563.9}).wait(1).to({graphics:mask_graphics_31,x:315.9,y:559.7}).wait(1).to({graphics:mask_graphics_32,x:317.7,y:556.4}).wait(1).to({graphics:mask_graphics_33,x:319,y:554}).wait(1).to({graphics:mask_graphics_34,x:319.8,y:552.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(67));

	// 组 264
	this.instance_17 = new lib.xuancai_mc_000187();
	this.instance_17.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,36,610,936);


(lib.xuancai_mc_000012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1194
	this.instance = new lib.xuancai_mc_000163();
	this.instance.setTransform(317,577.5,1,1,0,0,0,316,517.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

	// 图层 1192
	this.instance_1 = new lib.xuancai_mc_000161();
	this.instance_1.setTransform(332.5,873.5,1,1,0,0,0,166.5,56.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(38).to({x:333.5,y:1346.1},10,cjs.Ease.get(1)).wait(28));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglPALqIAA3TMBKfAAAIAAXTg");
	mask.setTransform(333.8,734.9);

	// 图层 1193
	this.instance_2 = new lib.xuancai_mc_000162();
	this.instance_2.setTransform(330.5,872,1,1,0,0,0,162.5,38);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({y:762.7},7,cjs.Ease.get(1)).to({y:770},4,cjs.Ease.get(1)).wait(29).to({y:1235.6},10,cjs.Ease.get(1)).wait(28));

	// 潮流 拷贝
	this.instance_3 = new lib.xuancai_mc_000165();
	this.instance_3.setTransform(-348.1,623.5,1,1,0,0,0,305.5,120.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({x:326.9,y:632.5},7,cjs.Ease.get(1)).to({x:319.5},4,cjs.Ease.get(1)).wait(48).to({x:309.7},11,cjs.Ease.get(1)).to({x:971.2},6,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// 图层 1195
	this.instance_4 = new lib.xuancai_mc_000164();
	this.instance_4.setTransform(330,340.5,1,1,0,0,0,163,159.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({scaleX:1.95,scaleY:1.95,alpha:0},7,cjs.Ease.get(1)).wait(81));

	// 图层 1195
	this.instance_5 = new lib.xuancai_mc_000164();
	this.instance_5.setTransform(330,340.5,3.79,3.79,0,0,0,163,159.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,alpha:1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(47).to({scaleX:0.91,scaleY:0.91},6).to({scaleX:1.97,scaleY:1.97,alpha:0},4).wait(28));

	// 组 270 拷贝 4
	this.instance_6 = new lib.xuancai_mc_000169();
	this.instance_6.setTransform(780.7,122.4,1,1,0,0,0,18,15.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:497,y:518.5},7).wait(91));

	// 组 270 拷贝 3
	this.instance_7 = new lib.xuancai_mc_000168();
	this.instance_7.setTransform(926.2,759.4,1,1,96,0,0,41.5,50);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,rotation:0,x:591.2,y:522.2},7).to({scaleX:1,scaleY:1,x:598.5,y:531},4).wait(83));

	// 组 270 拷贝 2
	this.instance_8 = new lib.xuancai_mc_000167();
	this.instance_8.setTransform(-298.3,1109.9,1,1,-31,0,0,46.5,92.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,rotation:0,x:50.2,y:919.2},7).to({scaleX:1,scaleY:1,x:46.5,y:926.5},4).wait(94));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgBiBYqQgpgpAAg6QAAg6ApgpQAqgpA4AAQA5AAApApQAqApAAA6QAAA6gqApQgpApg5AAQg4AAgqgpg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgGBBXcQifigAAjiQAAjjCfifQCgigDhAAQDiAACgCgQCfCfAADjQAADiifCgQigCfjiAAQjhAAigifg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgKXBWPQkUkTAAmFQAAmGEUkTQETkTGEAAQGFAAETETQEUETAAGGQAAGFkUETQkTEUmFAAQmEAAkTkUg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgOmBVGQmDmEAAokQAAojGDmEQGEmDIiAAQIjAAGEGDQGDGEAAIjQAAIkmDGEQmEGDojAAQoiAAmEmDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgSsBT+QnwnwAAq9QAAq+HwnvQHwnwK8AAQK9AAHwHwQHwHvAAK+QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgWpBS5QpZpZAAtSQAAtSJZpZQJYpZNRAAQNSAAJYJZQJZJZAANSQAANSpZJZQpYJZtSAAQtRAApYpZg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgafBR2Qq+q/AAviQAAviK+q+QK/q/PgAAQPhAAK/K/QK+K+AAPiQAAPiq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgeMBQ1QshshAAxtQAAxsMhshQMhshRrAAQRsAAMhMhQMhMhAARsQAARtshMhQshMhxsAAQxrAAshshg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EghxBP2Qt/t/AAzzQAAzzN/t/QOAt+TxAAQTyAAOAN+QN/N/AATzQAATzt/N/QuAOAzyAAQzxAAuAuAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EglNBO6QvbvbAA10QAA10PbvaQPbvZVyAAQVzAAPbPZQPbPaAAV0QAAV0vbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgohBOAQwzwzAA3wQAA3wQzwxQQywyXvAAQXwAAQyQyQQzQxAAXwQAAXwwzQzQwyQz3wAAQ3vAAwywzg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgrtBNIQyHyHAA5nQAA5oSHyFQSHyHZmAAQZnAASHSHQSHSFAAZoQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EguxBMTQzYzYAA7aQAA7aTYzWQTYzZbZAAQbaAATYTZQTYTWAAbaQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgxsBLgQ0m0mAA9IQAA9FUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdFQAAdI0mUmQ0mUl9HAAQ9GAA0m0lg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Eg0fBKvQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVw+wAAQ+vAA1w1wg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Eg3JBKAUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_1_graphics_16 = new cjs.Graphics().p("Eg5sBJUUgX5gX5AAAgh0UAAAghyAX5gX5UAX6gX6AhyAAAUAhzAAAAX6AX6UAX5AX5AAAAhyUAAAAh0gX5AX5UgX6AX6ghzAAAUghyAAAgX6gX6g");
	var mask_1_graphics_17 = new cjs.Graphics().p("Eg8GBIqUgY5gY5AAAgjOUAAAgjMAY5gY5UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY5AAAAjMUAAAAjOgY5AY5UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_1_graphics_18 = new cjs.Graphics().p("Eg+XBICUgZ2gZ1AAAgkjUAAAgkhAZ2gZ2UAZ1gZ1AkiAAAUAkjAAAAZ1AZ1UAZ2AZ2AAAAkhUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_1_graphics_19 = new cjs.Graphics().p("EhAgBHdUgavgavAAAglzUAAAglyAavgauUAaugauAlyAAAUAlzAAAAauAauUAavAauAAAAlyUAAAAlzgavAavUgauAauglzAAAUglyAAAgaugaug");
	var mask_1_graphics_20 = new cjs.Graphics().p("EhChBG6UgbkgbkAAAgm/UAAAgm9AbkgbkUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbkAAAAm9UAAAAm/gbkAbkUgbjAbjgm/AAAUgm+AAAgbjgbjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EhEaBGZUgcWgcWAAAgoGUAAAgoEAcWgcVUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcVAAAAoEUAAAAoGgcWAcWUgcWAcVgoFAAAUgoEAAAgcWgcVg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_1_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_1_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_1_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:571.6}).wait(1).to({graphics:mask_1_graphics_1,x:18,y:575.6}).wait(1).to({graphics:mask_1_graphics_2,x:35.5,y:579.5}).wait(1).to({graphics:mask_1_graphics_3,x:52.5,y:583.3}).wait(1).to({graphics:mask_1_graphics_4,x:69,y:587}).wait(1).to({graphics:mask_1_graphics_5,x:84.9,y:590.6}).wait(1).to({graphics:mask_1_graphics_6,x:100.3,y:594.1}).wait(1).to({graphics:mask_1_graphics_7,x:115.2,y:597.4}).wait(1).to({graphics:mask_1_graphics_8,x:129.6,y:600.6}).wait(1).to({graphics:mask_1_graphics_9,x:143.4,y:603.7}).wait(1).to({graphics:mask_1_graphics_10,x:156.8,y:606.7}).wait(1).to({graphics:mask_1_graphics_11,x:169.6,y:609.6}).wait(1).to({graphics:mask_1_graphics_12,x:181.9,y:612.4}).wait(1).to({graphics:mask_1_graphics_13,x:193.6,y:615}).wait(1).to({graphics:mask_1_graphics_14,x:204.8,y:617.5}).wait(1).to({graphics:mask_1_graphics_15,x:215.6,y:619.9}).wait(1).to({graphics:mask_1_graphics_16,x:225.7,y:622.2}).wait(1).to({graphics:mask_1_graphics_17,x:235.4,y:624.4}).wait(1).to({graphics:mask_1_graphics_18,x:244.6,y:626.4}).wait(1).to({graphics:mask_1_graphics_19,x:253.2,y:628.4}).wait(1).to({graphics:mask_1_graphics_20,x:261.3,y:630.2}).wait(1).to({graphics:mask_1_graphics_21,x:268.9,y:631.9}).wait(1).to({graphics:mask_1_graphics_22,x:275.9,y:631.7}).wait(1).to({graphics:mask_1_graphics_23,x:282.4,y:619.9}).wait(1).to({graphics:mask_1_graphics_24,x:288.5,y:609.1}).wait(1).to({graphics:mask_1_graphics_25,x:293.9,y:599.2}).wait(1).to({graphics:mask_1_graphics_26,x:298.9,y:590.3}).wait(1).to({graphics:mask_1_graphics_27,x:303.3,y:582.3}).wait(1).to({graphics:mask_1_graphics_28,x:307.3,y:575.2}).wait(1).to({graphics:mask_1_graphics_29,x:310.7,y:569.1}).wait(1).to({graphics:mask_1_graphics_30,x:313.5,y:563.9}).wait(1).to({graphics:mask_1_graphics_31,x:315.9,y:559.7}).wait(1).to({graphics:mask_1_graphics_32,x:317.7,y:556.4}).wait(1).to({graphics:mask_1_graphics_33,x:319,y:554}).wait(1).to({graphics:mask_1_graphics_34,x:319.8,y:552.6}).wait(1).to({graphics:mask_1_graphics_35,x:320.1,y:552.1}).wait(87));

	// 组 264
	this.instance_9 = new lib.xuancai_mc_000166();
	this.instance_9.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,60,632,1035);


(lib.xuancai_mc_000011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.xuancai_mc_000155();
	this.instance.setTransform(327,511.5,1,1,0,0,0,302,391.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

	// 图层 1191
	this.instance_1 = new lib.xuancai_mc_000159();
	this.instance_1.setTransform(329.5,894.7,1,1,0,0,0,160.5,13);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({y:845.7},10,cjs.Ease.get(0.99)).to({y:831,alpha:1},4,cjs.Ease.get(0.99)).wait(37).to({y:990,alpha:0},8).wait(41));

	// 图层 1190
	this.instance_2 = new lib.xuancai_mc_000158();
	this.instance_2.setTransform(331,721.7,1,1,0,0,0,165,40);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({y:672.7},10,cjs.Ease.get(0.99)).to({y:658,alpha:1},4,cjs.Ease.get(0.99)).wait(35).to({y:817,alpha:0},8).wait(41));

	// 图层 1189
	this.instance_3 = new lib.xuancai_mc_000157();
	this.instance_3.setTransform(331.5,818.7,1,1,0,0,0,165.5,52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({y:769.7},10,cjs.Ease.get(0.99)).to({y:755,alpha:1},4,cjs.Ease.get(0.99)).wait(34).to({y:914,alpha:0},8).wait(41));

	// 图层 1188
	this.instance_4 = new lib.xuancai_mc_000156();
	this.instance_4.setTransform(332.5,639.2,1,1,0,0,0,164.5,38.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({y:590.2},10,cjs.Ease.get(0.99)).to({y:575.5,alpha:1},4,cjs.Ease.get(0.99)).wait(32).to({y:734.5,alpha:0},8).wait(41));

	// 图层 1187
	this.instance_5 = new lib.xuancai_mc_000154();
	this.instance_5.setTransform(328.5,922.2,1,1,0,0,0,140.5,11.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({y:873.2},10,cjs.Ease.get(0.99)).to({y:858.5,alpha:1},4,cjs.Ease.get(0.99)).wait(30).to({y:1017.5,alpha:0},8).wait(41));

	// 图层 1083
	this.instance_6 = new lib.xuancai_mc_000152();
	this.instance_6.setTransform(329,424.7,1,1,0,0,0,100,162);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({y:375.7},10,cjs.Ease.get(0.99)).to({y:361,alpha:1},4,cjs.Ease.get(0.99)).wait(27).to({y:520,alpha:0},8).wait(41));

	// 图层 1186
	this.instance_7 = new lib.xuancai_mc_000153();
	this.instance_7.setTransform(335.5,472.7,1,1,0,0,0,262.5,254);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({y:423.7},10,cjs.Ease.get(0.99)).to({y:409,alpha:1},4,cjs.Ease.get(0.99)).wait(25).to({y:568,alpha:0},8).wait(41));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgBiBYqQgpgpAAg6QAAg6ApgpQAqgpA4AAQA5AAApApQAqApAAA6QAAA6gqApQgpApg5AAQg4AAgqgpg");
	var mask_graphics_1 = new cjs.Graphics().p("EgGBBXcQifigAAjiQAAjjCfifQCgigDhAAQDiAACgCgQCfCfAADjQAADiifCgQigCfjiAAQjhAAigifg");
	var mask_graphics_2 = new cjs.Graphics().p("EgKXBWPQkUkTAAmFQAAmGEUkTQETkTGEAAQGFAAETETQEUETAAGGQAAGFkUETQkTEUmFAAQmEAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOmBVGQmDmEAAokQAAojGDmEQGEmDIiAAQIjAAGEGDQGDGEAAIjQAAIkmDGEQmEGDojAAQoiAAmEmDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgSsBT+QnwnwAAq9QAAq+HwnvQHwnwK8AAQK9AAHwHwQHwHvAAK+QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("EgWpBS5QpZpZAAtSQAAtSJZpZQJYpZNRAAQNSAAJYJZQJZJZAANSQAANSpZJZQpYJZtSAAQtRAApYpZg");
	var mask_graphics_6 = new cjs.Graphics().p("EgafBR2Qq+q/AAviQAAviK+q+QK/q/PgAAQPhAAK/K/QK+K+AAPiQAAPiq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_graphics_7 = new cjs.Graphics().p("EgeMBQ1QshshAAxtQAAxsMhshQMhshRrAAQRsAAMhMhQMhMhAARsQAARtshMhQshMhxsAAQxrAAshshg");
	var mask_graphics_8 = new cjs.Graphics().p("EghxBP2Qt/t/AAzzQAAzzN/t/QOAt+TxAAQTyAAOAN+QN/N/AATzQAATzt/N/QuAOAzyAAQzxAAuAuAg");
	var mask_graphics_9 = new cjs.Graphics().p("EglNBO6QvbvbAA10QAA10PbvaQPbvZVyAAQVzAAPbPZQPbPaAAV0QAAV0vbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgohBOAQwzwzAA3wQAA3wQzwxQQywyXvAAQXwAAQyQyQQzQxAAXwQAAXwwzQzQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgrtBNIQyHyHAA5nQAA5oSHyFQSHyHZmAAQZnAASHSHQSHSFAAZoQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EguxBMTQzYzYAA7aQAA7aTYzWQTYzZbZAAQbaAATYTZQTYTWAAbaQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsBLgQ0m0mAA9IQAA9FUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdFQAAdI0mUmQ0mUl9HAAQ9GAA0m0lg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fBKvQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVw+wAAQ+vAA1w1wg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JBKAUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sBJUUgX5gX5AAAgh0UAAAghyAX5gX5UAX6gX6AhyAAAUAhzAAAAX6AX6UAX5AX5AAAAhyUAAAAh0gX5AX5UgX6AX6ghzAAAUghyAAAgX6gX6g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GBIqUgY5gY5AAAgjOUAAAgjMAY5gY5UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY5AAAAjMUAAAAjOgY5AY5UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XBICUgZ2gZ1AAAgkjUAAAgkhAZ2gZ2UAZ1gZ1AkiAAAUAkjAAAAZ1AZ1UAZ2AZ2AAAAkhUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBHdUgavgavAAAglzUAAAglyAavgauUAaugauAlyAAAUAlzAAAAauAauUAavAauAAAAlyUAAAAlzgavAavUgauAauglzAAAUglyAAAgaugaug");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBG6UgbkgbkAAAgm/UAAAgm9AbkgbkUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbkAAAAm9UAAAAm/gbkAbkUgbjAbjgm/AAAUgm+AAAgbjgbjg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBGZUgcWgcWAAAgoGUAAAgoEAcWgcVUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcVAAAAoEUAAAAoGgcWAcWUgcWAcVgoFAAAUgoEAAAgcWgcVg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:571.6}).wait(1).to({graphics:mask_graphics_1,x:18,y:575.6}).wait(1).to({graphics:mask_graphics_2,x:35.5,y:579.5}).wait(1).to({graphics:mask_graphics_3,x:52.5,y:583.3}).wait(1).to({graphics:mask_graphics_4,x:69,y:587}).wait(1).to({graphics:mask_graphics_5,x:84.9,y:590.6}).wait(1).to({graphics:mask_graphics_6,x:100.3,y:594.1}).wait(1).to({graphics:mask_graphics_7,x:115.2,y:597.4}).wait(1).to({graphics:mask_graphics_8,x:129.6,y:600.6}).wait(1).to({graphics:mask_graphics_9,x:143.4,y:603.7}).wait(1).to({graphics:mask_graphics_10,x:156.8,y:606.7}).wait(1).to({graphics:mask_graphics_11,x:169.6,y:609.6}).wait(1).to({graphics:mask_graphics_12,x:181.9,y:612.4}).wait(1).to({graphics:mask_graphics_13,x:193.6,y:615}).wait(1).to({graphics:mask_graphics_14,x:204.8,y:617.5}).wait(1).to({graphics:mask_graphics_15,x:215.6,y:619.9}).wait(1).to({graphics:mask_graphics_16,x:225.7,y:622.2}).wait(1).to({graphics:mask_graphics_17,x:235.4,y:624.4}).wait(1).to({graphics:mask_graphics_18,x:244.6,y:626.4}).wait(1).to({graphics:mask_graphics_19,x:253.2,y:628.4}).wait(1).to({graphics:mask_graphics_20,x:261.3,y:630.2}).wait(1).to({graphics:mask_graphics_21,x:268.9,y:631.9}).wait(1).to({graphics:mask_graphics_22,x:275.9,y:631.7}).wait(1).to({graphics:mask_graphics_23,x:282.4,y:619.9}).wait(1).to({graphics:mask_graphics_24,x:288.5,y:609.1}).wait(1).to({graphics:mask_graphics_25,x:293.9,y:599.2}).wait(1).to({graphics:mask_graphics_26,x:298.9,y:590.3}).wait(1).to({graphics:mask_graphics_27,x:303.3,y:582.3}).wait(1).to({graphics:mask_graphics_28,x:307.3,y:575.2}).wait(1).to({graphics:mask_graphics_29,x:310.7,y:569.1}).wait(1).to({graphics:mask_graphics_30,x:313.5,y:563.9}).wait(1).to({graphics:mask_graphics_31,x:315.9,y:559.7}).wait(1).to({graphics:mask_graphics_32,x:317.7,y:556.4}).wait(1).to({graphics:mask_graphics_33,x:319,y:554}).wait(1).to({graphics:mask_graphics_34,x:319.8,y:552.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(87));

	// 组 264
	this.instance_8 = new lib.xuancai_mc_000160();
	this.instance_8.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,120,604,783);


(lib.xuancai_mc_000010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.xuancai_mc_000141();
	this.instance.setTransform(314,510,1,1,0,0,0,314,498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

	// 组 276
	this.instance_1 = new lib.xuancai_mc_000150();
	this.instance_1.setTransform(989.4,1141,1,1,0,0,0,229.5,407);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:233.7,y:539.7},9,cjs.Ease.get(0.99)).to({x:243.5,y:547},4,cjs.Ease.get(0.99)).wait(61).to({x:-296.9,y:131.3},7,cjs.Ease.get(0.98)).wait(35));

	// 图层 1178
	this.instance_2 = new lib.xuancai_mc_000139();
	this.instance_2.setTransform(350,221.9,1,0.118,0,0,0,164,27.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regY:27,scaleY:1.09,y:195.6,alpha:1},9).to({scaleY:1,y:198},4).wait(51).to({x:934.5,y:204,alpha:0},7,cjs.Ease.get(0.98)).wait(32));

	// 图层 1179
	this.instance_3 = new lib.xuancai_mc_000140();
	this.instance_3.setTransform(847.8,841.5,1,1,0,0,0,144,49.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({x:371},9,cjs.Ease.get(1)).to({x:377},4,cjs.Ease.get(1)).wait(39).to({x:961.5,y:847.5,alpha:0},7,cjs.Ease.get(0.98)).wait(33));

	// 图层 1181
	this.instance_4 = new lib.xuancai_mc_000142();
	this.instance_4.setTransform(922.3,517,1,1,0,0,0,66.5,67);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({x:445.5},9,cjs.Ease.get(1)).to({x:451.5},4,cjs.Ease.get(1)).wait(44).to({x:1036,y:523,alpha:0},7,cjs.Ease.get(0.98)).wait(30));

	// 图层 1182
	this.instance_5 = new lib.xuancai_mc_000143();
	this.instance_5.setTransform(921.3,720,1,1,0,0,0,67.5,67);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({x:444.5},9,cjs.Ease.get(1)).to({x:450.5},4,cjs.Ease.get(1)).wait(44).to({x:1035,y:726,alpha:0},7,cjs.Ease.get(0.98)).wait(34));

	// 图层 1183
	this.instance_6 = new lib.xuancai_mc_000144();
	this.instance_6.setTransform(781.3,666.5,1,1,0,0,0,67.5,67.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({x:304.5},9,cjs.Ease.get(1)).to({x:310.5},4,cjs.Ease.get(1)).wait(46).to({x:895,y:672.5,alpha:0},7,cjs.Ease.get(0.98)).wait(31));

	// 图层 1184
	this.instance_7 = new lib.xuancai_mc_000145();
	this.instance_7.setTransform(897.3,379.5,1,1,0,0,0,66.5,66.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({x:420.5},9,cjs.Ease.get(1)).to({x:426.5},4,cjs.Ease.get(1)).wait(53).to({x:1011,y:385.5,alpha:0},7,cjs.Ease.get(0.98)).wait(29));

	// 图层 1185
	this.instance_8 = new lib.xuancai_mc_000146();
	this.instance_8.setTransform(843,268,1,1,0,0,0,166.5,39);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:339.5},9,cjs.Ease.get(1)).to({x:351.5},4,cjs.Ease.get(1)).wait(54).to({x:936,y:274,alpha:0},7,cjs.Ease.get(0.98)).wait(36));

	// 组 277
	this.instance_9 = new lib.xuancai_mc_000151();
	this.instance_9.setTransform(836.6,624.5,1,1,0,0,0,25.5,25.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({x:522.5},9,cjs.Ease.get(1)).to({x:534.5},4,cjs.Ease.get(1)).wait(43).to({x:1119,y:630.5,alpha:0},7,cjs.Ease.get(0.98)).wait(32));

	// 组 270 拷贝 5
	this.instance_10 = new lib.xuancai_mc_000149();
	this.instance_10.setTransform(-295.6,155.1,1,1,-43.7,0,0,54,49);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(37).to({_off:false},0).to({rotation:0,x:129.9,y:233.4},9,cjs.Ease.get(1)).to({x:125,y:226},4,cjs.Ease.get(1)).wait(38).to({x:-175.8,y:-35.6},7,cjs.Ease.get(0.98)).wait(27));

	// 组 270 拷贝 2
	this.instance_11 = new lib.xuancai_mc_000148();
	this.instance_11.setTransform(-166,695.8,1,1,0,0,0,54,112.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},0).to({scaleX:1.18,x:63.8,y:463.5},9).to({scaleX:1,x:54},4).wait(39).to({x:-200.3,y:702.5},7,cjs.Ease.get(0.98)).wait(33));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgBiBYqQgpgpAAg6QAAg6ApgpQAqgpA4AAQA5AAApApQAqApAAA6QAAA6gqApQgpApg5AAQg4AAgqgpg");
	var mask_graphics_1 = new cjs.Graphics().p("EgGBBXcQifigAAjiQAAjjCfifQCgigDhAAQDiAACgCgQCfCfAADjQAADiifCgQigCfjiAAQjhAAigifg");
	var mask_graphics_2 = new cjs.Graphics().p("EgKXBWPQkUkTAAmFQAAmGEUkTQETkTGEAAQGFAAETETQEUETAAGGQAAGFkUETQkTEUmFAAQmEAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOmBVGQmDmEAAokQAAojGDmEQGEmDIiAAQIjAAGEGDQGDGEAAIjQAAIkmDGEQmEGDojAAQoiAAmEmDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgSsBT+QnwnwAAq9QAAq+HwnvQHwnwK8AAQK9AAHwHwQHwHvAAK+QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("EgWpBS5QpZpZAAtSQAAtSJZpZQJYpZNRAAQNSAAJYJZQJZJZAANSQAANSpZJZQpYJZtSAAQtRAApYpZg");
	var mask_graphics_6 = new cjs.Graphics().p("EgafBR2Qq+q/AAviQAAviK+q+QK/q/PgAAQPhAAK/K/QK+K+AAPiQAAPiq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_graphics_7 = new cjs.Graphics().p("EgeMBQ1QshshAAxtQAAxsMhshQMhshRrAAQRsAAMhMhQMhMhAARsQAARtshMhQshMhxsAAQxrAAshshg");
	var mask_graphics_8 = new cjs.Graphics().p("EghxBP2Qt/t/AAzzQAAzzN/t/QOAt+TxAAQTyAAOAN+QN/N/AATzQAATzt/N/QuAOAzyAAQzxAAuAuAg");
	var mask_graphics_9 = new cjs.Graphics().p("EglNBO6QvbvbAA10QAA10PbvaQPbvZVyAAQVzAAPbPZQPbPaAAV0QAAV0vbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgohBOAQwzwzAA3wQAA3wQzwxQQywyXvAAQXwAAQyQyQQzQxAAXwQAAXwwzQzQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgrtBNIQyHyHAA5nQAA5oSHyFQSHyHZmAAQZnAASHSHQSHSFAAZoQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EguxBMTQzYzYAA7aQAA7aTYzWQTYzZbZAAQbaAATYTZQTYTWAAbaQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsBLgQ0m0mAA9IQAA9FUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdFQAAdI0mUmQ0mUl9HAAQ9GAA0m0lg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fBKvQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVw+wAAQ+vAA1w1wg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JBKAUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sBJUUgX5gX5AAAgh0UAAAghyAX5gX5UAX6gX6AhyAAAUAhzAAAAX6AX6UAX5AX5AAAAhyUAAAAh0gX5AX5UgX6AX6ghzAAAUghyAAAgX6gX6g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GBIqUgY5gY5AAAgjOUAAAgjMAY5gY5UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY5AAAAjMUAAAAjOgY5AY5UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XBICUgZ2gZ1AAAgkjUAAAgkhAZ2gZ2UAZ1gZ1AkiAAAUAkjAAAAZ1AZ1UAZ2AZ2AAAAkhUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBHdUgavgavAAAglzUAAAglyAavgauUAaugauAlyAAAUAlzAAAAauAauUAavAauAAAAlyUAAAAlzgavAavUgauAauglzAAAUglyAAAgaugaug");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBG6UgbkgbkAAAgm/UAAAgm9AbkgbkUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbkAAAAm9UAAAAm/gbkAbkUgbjAbjgm/AAAUgm+AAAgbjgbjg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBGZUgcWgcWAAAgoGUAAAgoEAcWgcVUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcVAAAAoEUAAAAoGgcWAcWUgcWAcVgoFAAAUgoEAAAgcWgcVg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:571.6}).wait(1).to({graphics:mask_graphics_1,x:18,y:575.6}).wait(1).to({graphics:mask_graphics_2,x:35.5,y:579.5}).wait(1).to({graphics:mask_graphics_3,x:52.5,y:583.3}).wait(1).to({graphics:mask_graphics_4,x:69,y:587}).wait(1).to({graphics:mask_graphics_5,x:84.9,y:590.6}).wait(1).to({graphics:mask_graphics_6,x:100.3,y:594.1}).wait(1).to({graphics:mask_graphics_7,x:115.2,y:597.4}).wait(1).to({graphics:mask_graphics_8,x:129.6,y:600.6}).wait(1).to({graphics:mask_graphics_9,x:143.4,y:603.7}).wait(1).to({graphics:mask_graphics_10,x:156.8,y:606.7}).wait(1).to({graphics:mask_graphics_11,x:169.6,y:609.6}).wait(1).to({graphics:mask_graphics_12,x:181.9,y:612.4}).wait(1).to({graphics:mask_graphics_13,x:193.6,y:615}).wait(1).to({graphics:mask_graphics_14,x:204.8,y:617.5}).wait(1).to({graphics:mask_graphics_15,x:215.6,y:619.9}).wait(1).to({graphics:mask_graphics_16,x:225.7,y:622.2}).wait(1).to({graphics:mask_graphics_17,x:235.4,y:624.4}).wait(1).to({graphics:mask_graphics_18,x:244.6,y:626.4}).wait(1).to({graphics:mask_graphics_19,x:253.2,y:628.4}).wait(1).to({graphics:mask_graphics_20,x:261.3,y:630.2}).wait(1).to({graphics:mask_graphics_21,x:268.9,y:631.9}).wait(1).to({graphics:mask_graphics_22,x:275.9,y:631.7}).wait(1).to({graphics:mask_graphics_23,x:282.4,y:619.9}).wait(1).to({graphics:mask_graphics_24,x:288.5,y:609.1}).wait(1).to({graphics:mask_graphics_25,x:293.9,y:599.2}).wait(1).to({graphics:mask_graphics_26,x:298.9,y:590.3}).wait(1).to({graphics:mask_graphics_27,x:303.3,y:582.3}).wait(1).to({graphics:mask_graphics_28,x:307.3,y:575.2}).wait(1).to({graphics:mask_graphics_29,x:310.7,y:569.1}).wait(1).to({graphics:mask_graphics_30,x:313.5,y:563.9}).wait(1).to({graphics:mask_graphics_31,x:315.9,y:559.7}).wait(1).to({graphics:mask_graphics_32,x:317.7,y:556.4}).wait(1).to({graphics:mask_graphics_33,x:319,y:554}).wait(1).to({graphics:mask_graphics_34,x:319.8,y:552.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(87));

	// 组 264
	this.instance_12 = new lib.xuancai_mc_000147();
	this.instance_12.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,628,996);


(lib.xuancai_mc_000009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.xuancai_mc_000134();
	this.instance.setTransform(349,515,1,1,0,0,0,276,422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

	// 图层 1177
	this.instance_1 = new lib.xuancai_mc_000136();
	this.instance_1.setTransform(334,163.3,1,1,0,0,0,120,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({y:151,alpha:1},12,cjs.Ease.get(1)).wait(52).to({y:385.8,alpha:0},7,cjs.Ease.get(1)).wait(26));

	// 图层 1176
	this.instance_2 = new lib.xuancai_mc_000135();
	this.instance_2.setTransform(330.5,918.3,1,1,0,0,0,160.5,13);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({y:935.5,alpha:1},12,cjs.Ease.get(1)).to({y:933},5,cjs.Ease.get(1)).wait(36).to({y:1167.8,alpha:0},7,cjs.Ease.get(1)).wait(26));

	// 图层 1174
	this.instance_3 = new lib.xuancai_mc_000133();
	this.instance_3.setTransform(324,738.5,1,1,0,0,0,164,160.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({scaleX:3.06,scaleY:3.06,alpha:0},14).to({_off:true},1).wait(60));

	// 图层 1174
	this.instance_4 = new lib.xuancai_mc_000133();
	this.instance_4.setTransform(324,738.5,0.135,0.135,0,0,0,164,160.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({regY:160.5,scaleX:1.06,scaleY:1.06,alpha:1},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(36).to({y:973.3,alpha:0},7,cjs.Ease.get(1)).wait(26));

	// 图层 1173
	this.instance_5 = new lib.xuancai_mc_000132();
	this.instance_5.setTransform(-230.9,208.5,1,1,0,0,0,164.5,38.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({x:341.3},12,cjs.Ease.get(1)).to({x:331.5},5,cjs.Ease.get(1)).wait(42).to({y:443.3,alpha:0},7,cjs.Ease.get(1)).wait(26));

	// 组 268
	this.instance_6 = new lib.xuancai_mc_000137();
	this.instance_6.setTransform(337,911,1,1,0,0,0,167,282.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({x:338,y:509.9,alpha:1},12,cjs.Ease.get(1)).to({y:529.5},5,cjs.Ease.get(1)).wait(47).to({y:764.3,alpha:0},7,cjs.Ease.get(1)).wait(26));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAuRAArQgqgpABg4QgBg6AqgpQAogpA7AAQA6AAApApQApApgBA6QABA4gpApQgpApg6AAQg7AAgogpg");
	var mask_graphics_1 = new cjs.Graphics().p("EAlQAGCQigigAAjiQAAjhCgigQCgifDiAAQDjAACfCfQCgCgAADhQAADiigCgQifCfjjAAQjiAAigifg");
	var mask_graphics_2 = new cjs.Graphics().p("AchKYQkTkTAAmFQAAmEETkTQETkUGGAAQGFAAETEUQEUETAAGEQAAGFkUETQkTEUmFAAQmGAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("AUCOnQmDmEAAojQAAoiGDmEQGDmDIkAAQIkAAGDGDQGEGEAAIiQAAIjmEGEQmDGDokAAQokAAmDmDg");
	var mask_graphics_4 = new cjs.Graphics().p("AL0StQnwnwAAq9QAAq8HwnwQHwnwK9AAQK+AAHwHwQHvHwAAK8QAAK9nvHwQnwHwq+AAQq9AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("AD3WqQpXpYAAtSQAAtRJXpYQJZpZNSAAQNSAAJZJZQJZJYAANRQAANSpZJYQpZJZtSAAQtSAApZpZg");
	var mask_graphics_6 = new cjs.Graphics().p("Aj0agQq+q/AAvhQAAvgK+q/QK9q+PiAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQviAAq9q+g");
	var mask_graphics_7 = new cjs.Graphics().p("ArQeNQshshAAxsQAAxrMhshQMfshRtAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxtAAsfshg");
	var mask_graphics_8 = new cjs.Graphics().p("EgSbAhyQuAuAAAzyQAAzxOAuAQN/t/TxAAQTzAAOAN/QN/OAAATxQAATyt/OAQuAN/zzAAQzxAAt/t/g");
	var mask_graphics_9 = new cjs.Graphics().p("EgZWAlOQvavbAA1zQAA1yPavbQPbvbVyAAQV0AAPbPbQPbPbAAVyQAAVzvbPbQvbPb10AAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("Egf/AoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgmZAruQyHyHAA5nQAA5mSHyHQSIyHZlAAQZoAASHSHQSHSHAAZmQAAZnyHSHQyHSH5oAAQ5lAAyIyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EgshAuyQzYzYAA7aQAA7ZTYzYQTYzYbYAAQbaAATZTYQTYTYAAbZQAAbazYTYQzZTY7aAAQ7YAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:320,y:-19.5}).wait(1).to({graphics:mask_graphics_1,x:331.7,y:7.4}).wait(1).to({graphics:mask_graphics_2,x:343,y:39}).wait(1).to({graphics:mask_graphics_3,x:354,y:69.6}).wait(1).to({graphics:mask_graphics_4,x:364.7,y:99.3}).wait(1).to({graphics:mask_graphics_5,x:375,y:128}).wait(1).to({graphics:mask_graphics_6,x:385,y:155.8}).wait(1).to({graphics:mask_graphics_7,x:394.6,y:182.7}).wait(1).to({graphics:mask_graphics_8,x:404,y:208.6}).wait(1).to({graphics:mask_graphics_9,x:412.9,y:233.6}).wait(1).to({graphics:mask_graphics_10,x:421.6,y:257.6}).wait(1).to({graphics:mask_graphics_11,x:429.9,y:280.7}).wait(1).to({graphics:mask_graphics_12,x:437.8,y:302.9}).wait(1).to({graphics:mask_graphics_13,x:440.9,y:324.1}).wait(1).to({graphics:mask_graphics_14,x:430.2,y:344.3}).wait(1).to({graphics:mask_graphics_15,x:420,y:363.6}).wait(1).to({graphics:mask_graphics_16,x:410.2,y:382}).wait(1).to({graphics:mask_graphics_17,x:401,y:399.5}).wait(1).to({graphics:mask_graphics_18,x:392.2,y:415.9}).wait(1).to({graphics:mask_graphics_19,x:384,y:431.5}).wait(1).to({graphics:mask_graphics_20,x:376.3,y:446.1}).wait(1).to({graphics:mask_graphics_21,x:369,y:459.8}).wait(1).to({graphics:mask_graphics_22,x:362.3,y:472.5}).wait(1).to({graphics:mask_graphics_23,x:356,y:484.3}).wait(1).to({graphics:mask_graphics_24,x:350.3,y:495.1}).wait(1).to({graphics:mask_graphics_25,x:345,y:505}).wait(1).to({graphics:mask_graphics_26,x:340.3,y:514}).wait(1).to({graphics:mask_graphics_27,x:336.1,y:522}).wait(1).to({graphics:mask_graphics_28,x:332.3,y:529}).wait(1).to({graphics:mask_graphics_29,x:329.1,y:535.2}).wait(1).to({graphics:mask_graphics_30,x:326.3,y:540.3}).wait(1).to({graphics:mask_graphics_31,x:324.1,y:544.6}).wait(1).to({graphics:mask_graphics_32,x:322.3,y:547.9}).wait(1).to({graphics:mask_graphics_33,x:321.1,y:550.2}).wait(1).to({graphics:mask_graphics_34,x:320.3,y:551.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(87));

	// 组 264
	this.instance_7 = new lib.xuancai_mc_000138();
	this.instance_7.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73,93,552,844);


(lib.xuancai_mc_000008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1165
	this.instance = new lib.xuancai_mc_000127();
	this.instance.setTransform(329,292.5,1,0.094,0,0,0,164,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({scaleY:1.13,y:264.7,alpha:1},8,cjs.Ease.get(1)).to({scaleY:1,y:268},4,cjs.Ease.get(1)).wait(62).to({y:684.5,alpha:0},8,cjs.Ease.get(1)).wait(23));

	// 图层 1172
	this.instance_1 = new lib.xuancai_mc_000126();
	this.instance_1.setTransform(-193.8,354,1,1,0,0,0,163.5,53);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({x:334.3,y:355},10,cjs.Ease.get(1)).to({x:329.5},4,cjs.Ease.get(1)).wait(69).to({y:771.5,alpha:0},8,cjs.Ease.get(1)).wait(23));

	// Layer 29 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_22 = new cjs.Graphics().p("A7vFQIAAqfMA3eAAAIAAKfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_22,x:329.2,y:444.4}).wait(69).to({graphics:null,x:0,y:0}).wait(31));

	// 图层 1170
	this.instance_2 = new lib.xuancai_mc_000124();
	this.instance_2.setTransform(328,341,1,1,0,0,0,165,32);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({y:446.4},8,cjs.Ease.get(1)).to({y:444},4,cjs.Ease.get(1)).wait(57).to({y:860.5,alpha:0},8,cjs.Ease.get(1)).wait(23));

	// Layer 30 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgoGAR9MAAAgj5MBQNAAAMAAAAj5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:327.7,y:533.1}).wait(91).to({graphics:null,x:0,y:0}).wait(31));

	// 图层 1171
	this.instance_3 = new lib.xuancai_mc_000125();
	this.instance_3.setTransform(330,1044,1,1,0,0,0,164,80);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({y:560},30).wait(41).to({y:976.5,alpha:0},8,cjs.Ease.get(1)).wait(23));

	// 树1 拷贝
	this.instance_4 = new lib.xuancai_mc_000130();
	this.instance_4.setTransform(246.5,1285.2,1,1,0,0,0,148.5,142.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({scaleY:1.11,x:255.5,y:941.6},10).to({scaleY:1,y:957.5},5).wait(43).to({x:253.5,y:1296.5},8,cjs.Ease.get(1)).wait(23));

	// 组 1 拷贝 2
	this.instance_5 = new lib.xuancai_mc_000112();
	this.instance_5.setTransform(-130.1,100.5,1,1,-101.8,0,0,57.6,67.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({rotation:13.2,x:99.9,y:211.4},10).to({regX:57.5,rotation:0,x:92.5,y:206.5},5).wait(46).to({rotation:-127,x:-166.7,y:-18.4},8,cjs.Ease.get(1)).wait(20));

	// 组 163 拷贝 6
	this.instance_6 = new lib.xuancai_mc_000122();
	this.instance_6.setTransform(-173.5,499,1,1,0,0,0,6.5,6);
	this.instance_6.alpha = 0.77;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({x:125.4,y:298.1},10).to({x:120.5,y:303},5).wait(74));

	// 组 163 拷贝 7
	this.instance_7 = new lib.xuancai_mc_000123();
	this.instance_7.setTransform(801.8,46,1,1,105.8,0,0,16,15.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({rotation:0,x:376.2,y:190.9},10).to({x:386,y:183.5},5).wait(48).to({x:737.3,y:112.6},8,cjs.Ease.get(1)).wait(18));

	// 组 1 拷贝 17
	this.instance_8 = new lib.xuancai_mc_000114();
	this.instance_8.setTransform(49,352,1,1,0,0,0,49,51);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).to({scaleX:1.09,scaleY:1.15,x:53.5,y:359.6},10).to({scaleX:1,scaleY:1,x:49,y:352},5).wait(50).to({regX:49.1,rotation:-36.7,x:-275.9,y:418},8,cjs.Ease.get(1)).wait(16));

	// 树  3
	this.instance_9 = new lib.xuancai_mc_000129();
	this.instance_9.setTransform(147.5,1422.2,1,1,0,0,0,147.5,186.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({scaleY:1.05,y:905},10).to({scaleY:1,y:913.5},5).wait(44).to({y:1429.5},8,cjs.Ease.get(1)).wait(22));

	// 组 1 拷贝 15
	this.instance_10 = new lib.xuancai_mc_000113();
	this.instance_10.setTransform(1134.4,1173.8,1,1,0,0,0,17,20.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39).to({_off:false},0).to({x:501,y:963.5},21,cjs.Ease.get(0.99)).wait(37).to({x:715.5,y:1024.7},8,cjs.Ease.get(1)).wait(17));

	// 组 1
	this.instance_11 = new lib.xuancai_mc_000110();
	this.instance_11.setTransform(1159.4,1157.3,1,1,0,0,0,39,35);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({x:526,y:947},21,cjs.Ease.get(0.99)).wait(34).to({x:834.2,y:1052.2},8,cjs.Ease.get(1)).wait(15));

	// 组 163 拷贝 3
	this.instance_12 = new lib.xuancai_mc_000119();
	this.instance_12.setTransform(1221.9,1234.3,1,1,0,0,0,51.5,60);
	this.instance_12.alpha = 0.77;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({x:588.5,y:1024},21,cjs.Ease.get(0.99)).wait(20).to({x:691.5,y:1160},8,cjs.Ease.get(1)).wait(19));

	// 组 162 拷贝 3
	this.instance_13 = new lib.xuancai_mc_000116();
	this.instance_13.setTransform(1071.9,1167.8,1,1,0,0,0,22.5,14.5);
	this.instance_13.alpha = 0.852;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(52).to({_off:false},0).to({x:438.5,y:957.5},21,cjs.Ease.get(0.99)).wait(21).to({x:51.7,y:1158.5},8,cjs.Ease.get(1)).wait(20));

	// 组 162 拷贝 2
	this.instance_14 = new lib.xuancai_mc_000115();
	this.instance_14.setTransform(1235.4,1117.3,1,1,0,0,0,38,43);
	this.instance_14.alpha = 0.852;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({_off:false},0).to({x:602,y:907},21,cjs.Ease.get(0.99)).wait(27).to({x:736.5,y:876},8,cjs.Ease.get(1)).wait(17));

	// 组 163 拷贝 5
	this.instance_15 = new lib.xuancai_mc_000121();
	this.instance_15.setTransform(1140.9,1113.3,1,1,0,0,0,6.5,6);
	this.instance_15.alpha = 0.77;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(41).to({_off:false},0).to({x:507.5,y:903},21,cjs.Ease.get(0.99)).wait(39).to({x:-189.4,y:548.5},8,cjs.Ease.get(1)).wait(13));

	// 组 163 拷贝 4
	this.instance_16 = new lib.xuancai_mc_000120();
	this.instance_16.setTransform(1057.4,1142.3,1,1,0,0,0,8,7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45).to({_off:false},0).to({x:424,y:932},21,cjs.Ease.get(0.99)).wait(33).to({x:97,y:1126},8,cjs.Ease.get(1)).wait(15));

	// 组 163 拷贝
	this.instance_17 = new lib.xuancai_mc_000117();
	this.instance_17.setTransform(1103.4,1143.8,1,1,0,0,0,13,12.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39).to({_off:false},0).to({x:470,y:933.5},21,cjs.Ease.get(0.99)).wait(36).to({x:-53.3,y:784.5},8,cjs.Ease.get(1)).wait(18));

	// 组 1 拷贝
	this.instance_18 = new lib.xuancai_mc_000111();
	this.instance_18.setTransform(1252.9,1040.3,1,1,0,0,0,20.5,35);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(47).to({_off:false},0).to({x:619.5,y:830},21,cjs.Ease.get(0.99)).wait(24).to({x:741.8,y:762},8,cjs.Ease.get(1)).wait(22));

	// 图层 1166
	this.instance_19 = new lib.xuancai_mc_000106();
	this.instance_19.setTransform(1215.9,1000.3,1,1,0,0,0,17.5,15);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(43).to({_off:false},0).to({x:582.5,y:790},21,cjs.Ease.get(0.99)).wait(31).to({x:716,y:684.9},8,cjs.Ease.get(1)).wait(19));

	// 图层 1167
	this.instance_20 = new lib.xuancai_mc_000107();
	this.instance_20.setTransform(1088.9,1196.3,1,1,0,0,0,20.5,20);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(37).to({_off:false},0).to({x:455.5,y:986},21,cjs.Ease.get(0.99)).wait(40).to({x:286.8,y:1153},8,cjs.Ease.get(1)).wait(16));

	// 图层 1168
	this.instance_21 = new lib.xuancai_mc_000108();
	this.instance_21.setTransform(1144.9,1217.3,1,1,0,0,0,17.5,15);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(32).to({_off:false},0).to({x:511.5,y:1007},21,cjs.Ease.get(0.99)).wait(41).to({x:547.5,y:1188},8,cjs.Ease.get(1)).wait(20));

	// 图层 1169
	this.instance_22 = new lib.xuancai_mc_000109();
	this.instance_22.setTransform(1111.9,1223.8,1,1,0,0,0,9.5,9.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(36).to({_off:false},0).to({x:478.5,y:1013.5},21,cjs.Ease.get(0.99)).wait(40).to({x:447.5,y:1163.5},8,cjs.Ease.get(1)).wait(17));

	// 组 163 拷贝 2
	this.instance_23 = new lib.xuancai_mc_000118();
	this.instance_23.setTransform(1082.4,1135.3,1,1,0,0,0,6,6);
	this.instance_23.alpha = 0.77;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(27).to({_off:false},0).to({x:449,y:925},21,cjs.Ease.get(0.99)).wait(44).to({x:-46.3,y:839},8,cjs.Ease.get(1)).wait(22));

	// 车
	this.instance_24 = new lib.xuancai_mc_000131();
	this.instance_24.setTransform(945.4,1041.8,1,1,0,0,0,261,132.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(39).to({_off:false},0).to({x:287.5,y:821.7},12,cjs.Ease.get(0.99)).to({x:312,y:831.5},7,cjs.Ease.get(1)).wait(33).to({x:-273.2,y:628.5},14).wait(17));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EAuRAArQgqgpABg4QgBg6AqgpQAogpA7AAQA6AAApApQApApgBA6QABA4gpApQgpApg6AAQg7AAgogpg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EAlQAGCQigigAAjiQAAjhCgigQCgifDiAAQDjAACfCfQCgCgAADhQAADiigCgQifCfjjAAQjiAAigifg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AchKYQkTkTAAmFQAAmEETkTQETkUGGAAQGFAAETEUQEUETAAGEQAAGFkUETQkTEUmFAAQmGAAkTkUg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AUCOnQmDmEAAojQAAoiGDmEQGDmDIkAAQIkAAGDGDQGEGEAAIiQAAIjmEGEQmDGDokAAQokAAmDmDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AL0StQnwnwAAq9QAAq8HwnwQHwnwK9AAQK+AAHwHwQHvHwAAK8QAAK9nvHwQnwHwq+AAQq9AAnwnwg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AD3WqQpXpYAAtSQAAtRJXpYQJZpZNSAAQNSAAJZJZQJZJYAANRQAANSpZJYQpZJZtSAAQtSAApZpZg");
	var mask_2_graphics_6 = new cjs.Graphics().p("Aj0agQq+q/AAvhQAAvgK+q/QK9q+PiAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQviAAq9q+g");
	var mask_2_graphics_7 = new cjs.Graphics().p("ArQeNQshshAAxsQAAxrMhshQMfshRtAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxtAAsfshg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EgSbAhyQuAuAAAzyQAAzxOAuAQN/t/TxAAQTzAAOAN/QN/OAAATxQAATyt/OAQuAN/zzAAQzxAAt/t/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgZWAlOQvavbAA1zQAA1yPavbQPbvbVyAAQV0AAPbPbQPbPbAAVyQAAVzvbPbQvbPb10AAQ1yAAvbvbg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Egf/AoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgmZAruQyHyHAA5nQAA5mSHyHQSIyHZlAAQZoAASHSHQSHSHAAZmQAAZnyHSHQyHSH5oAAQ5lAAyIyHg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgshAuyQzYzYAA7aQAA7ZTYzYQTYzYbYAAQbaAATZTYQTYTYAAbZQAAbazYTYQzZTY7aAAQ7YAAzYzYg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_2_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:320,y:-19.5}).wait(1).to({graphics:mask_2_graphics_1,x:331.7,y:7.4}).wait(1).to({graphics:mask_2_graphics_2,x:343,y:39}).wait(1).to({graphics:mask_2_graphics_3,x:354,y:69.6}).wait(1).to({graphics:mask_2_graphics_4,x:364.7,y:99.3}).wait(1).to({graphics:mask_2_graphics_5,x:375,y:128}).wait(1).to({graphics:mask_2_graphics_6,x:385,y:155.8}).wait(1).to({graphics:mask_2_graphics_7,x:394.6,y:182.7}).wait(1).to({graphics:mask_2_graphics_8,x:404,y:208.6}).wait(1).to({graphics:mask_2_graphics_9,x:412.9,y:233.6}).wait(1).to({graphics:mask_2_graphics_10,x:421.6,y:257.6}).wait(1).to({graphics:mask_2_graphics_11,x:429.9,y:280.7}).wait(1).to({graphics:mask_2_graphics_12,x:437.8,y:302.9}).wait(1).to({graphics:mask_2_graphics_13,x:440.9,y:324.1}).wait(1).to({graphics:mask_2_graphics_14,x:430.2,y:344.3}).wait(1).to({graphics:mask_2_graphics_15,x:420,y:363.6}).wait(1).to({graphics:mask_2_graphics_16,x:410.2,y:382}).wait(1).to({graphics:mask_2_graphics_17,x:401,y:399.5}).wait(1).to({graphics:mask_2_graphics_18,x:392.2,y:415.9}).wait(1).to({graphics:mask_2_graphics_19,x:384,y:431.5}).wait(1).to({graphics:mask_2_graphics_20,x:376.3,y:446.1}).wait(1).to({graphics:mask_2_graphics_21,x:369,y:459.8}).wait(1).to({graphics:mask_2_graphics_22,x:362.3,y:472.5}).wait(1).to({graphics:mask_2_graphics_23,x:356,y:484.3}).wait(1).to({graphics:mask_2_graphics_24,x:350.3,y:495.1}).wait(1).to({graphics:mask_2_graphics_25,x:345,y:505}).wait(1).to({graphics:mask_2_graphics_26,x:340.3,y:514}).wait(1).to({graphics:mask_2_graphics_27,x:336.1,y:522}).wait(1).to({graphics:mask_2_graphics_28,x:332.3,y:529}).wait(1).to({graphics:mask_2_graphics_29,x:329.1,y:535.2}).wait(1).to({graphics:mask_2_graphics_30,x:326.3,y:540.3}).wait(1).to({graphics:mask_2_graphics_31,x:324.1,y:544.6}).wait(1).to({graphics:mask_2_graphics_32,x:322.3,y:547.9}).wait(1).to({graphics:mask_2_graphics_33,x:321.1,y:550.2}).wait(1).to({graphics:mask_2_graphics_34,x:320.3,y:551.6}).wait(1).to({graphics:mask_2_graphics_35,x:320.1,y:552.1}).wait(87));

	// 组 264
	this.instance_25 = new lib.xuancai_mc_000128();
	this.instance_25.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_25.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.xuancai_mc_000007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.xuancai_mc_000268();
	this.instance.setTransform(322,418,1,1,0,0,0,307,418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112));

	// 图层 1160
	this.instance_1 = new lib.xuancai_mc_000267();
	this.instance_1.setTransform(331.5,643,1,1,0,0,0,160.5,13);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({y:627,alpha:1},14,cjs.Ease.get(1)).wait(21).to({y:1131.7,alpha:0},10,cjs.Ease.get(1)).wait(31));

	// 图层 1162
	this.instance_2 = new lib.xuancai_mc_000269();
	this.instance_2.setTransform(949.9,786,1,1,0,0,0,165,53);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:323},10).to({x:329},4).wait(34).to({y:1290.7,alpha:0},10,cjs.Ease.get(1)).wait(31));

	// 图层 1163
	this.instance_3 = new lib.xuancai_mc_000270();
	this.instance_3.setTransform(327,1186.9,1,1,0,0,0,165,53.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({x:329,y:894.5},10).to({y:898.5},4).wait(25).to({y:1403.2,alpha:0},10,cjs.Ease.get(1)).wait(31));

	// 图层 1164
	this.instance_4 = new lib.xuancai_mc_000271();
	this.instance_4.setTransform(-205.8,692.5,1,1,0,0,0,166,40.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({x:339,y:689.5},10).to({x:331},4).wait(29).to({y:1194.2,alpha:0},10,cjs.Ease.get(1)).wait(31));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAuRAArQgqgpABg4QgBg6AqgpQAogpA7AAQA6AAApApQApApgBA6QABA4gpApQgpApg6AAQg7AAgogpg");
	var mask_graphics_1 = new cjs.Graphics().p("EAlQAGCQigigAAjiQAAjhCgigQCgifDiAAQDjAACfCfQCgCgAADhQAADiigCgQifCfjjAAQjiAAigifg");
	var mask_graphics_2 = new cjs.Graphics().p("AchKYQkTkTAAmFQAAmEETkTQETkUGGAAQGFAAETEUQEUETAAGEQAAGFkUETQkTEUmFAAQmGAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("AUCOnQmDmEAAojQAAoiGDmEQGDmDIkAAQIkAAGDGDQGEGEAAIiQAAIjmEGEQmDGDokAAQokAAmDmDg");
	var mask_graphics_4 = new cjs.Graphics().p("AL0StQnwnwAAq9QAAq8HwnwQHwnwK9AAQK+AAHwHwQHvHwAAK8QAAK9nvHwQnwHwq+AAQq9AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("AD3WqQpXpYAAtSQAAtRJXpYQJZpZNSAAQNSAAJZJZQJZJYAANRQAANSpZJYQpZJZtSAAQtSAApZpZg");
	var mask_graphics_6 = new cjs.Graphics().p("Aj0agQq+q/AAvhQAAvgK+q/QK9q+PiAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQviAAq9q+g");
	var mask_graphics_7 = new cjs.Graphics().p("ArQeNQshshAAxsQAAxrMhshQMfshRtAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxtAAsfshg");
	var mask_graphics_8 = new cjs.Graphics().p("EgSbAhyQuAuAAAzyQAAzxOAuAQN/t/TxAAQTzAAOAN/QN/OAAATxQAATyt/OAQuAN/zzAAQzxAAt/t/g");
	var mask_graphics_9 = new cjs.Graphics().p("EgZWAlOQvavbAA1zQAA1yPavbQPbvbVyAAQV0AAPbPbQPbPbAAVyQAAVzvbPbQvbPb10AAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("Egf/AoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgmZAruQyHyHAA5nQAA5mSHyHQSIyHZlAAQZoAASHSHQSHSHAAZmQAAZnyHSHQyHSH5oAAQ5lAAyIyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EgshAuyQzYzYAA7aQAA7ZTYzYQTYzYbYAAQbaAATZTYQTYTYAAbZQAAbazYTYQzZTY7aAAQ7YAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:320,y:-19.5}).wait(1).to({graphics:mask_graphics_1,x:331.7,y:7.4}).wait(1).to({graphics:mask_graphics_2,x:343,y:39}).wait(1).to({graphics:mask_graphics_3,x:354,y:69.6}).wait(1).to({graphics:mask_graphics_4,x:364.7,y:99.3}).wait(1).to({graphics:mask_graphics_5,x:375,y:128}).wait(1).to({graphics:mask_graphics_6,x:385,y:155.8}).wait(1).to({graphics:mask_graphics_7,x:394.6,y:182.7}).wait(1).to({graphics:mask_graphics_8,x:404,y:208.6}).wait(1).to({graphics:mask_graphics_9,x:412.9,y:233.6}).wait(1).to({graphics:mask_graphics_10,x:421.6,y:257.6}).wait(1).to({graphics:mask_graphics_11,x:429.9,y:280.7}).wait(1).to({graphics:mask_graphics_12,x:437.8,y:302.9}).wait(1).to({graphics:mask_graphics_13,x:440.9,y:324.1}).wait(1).to({graphics:mask_graphics_14,x:430.2,y:344.3}).wait(1).to({graphics:mask_graphics_15,x:420,y:363.6}).wait(1).to({graphics:mask_graphics_16,x:410.2,y:382}).wait(1).to({graphics:mask_graphics_17,x:401,y:399.5}).wait(1).to({graphics:mask_graphics_18,x:392.2,y:415.9}).wait(1).to({graphics:mask_graphics_19,x:384,y:431.5}).wait(1).to({graphics:mask_graphics_20,x:376.3,y:446.1}).wait(1).to({graphics:mask_graphics_21,x:369,y:459.8}).wait(1).to({graphics:mask_graphics_22,x:362.3,y:472.5}).wait(1).to({graphics:mask_graphics_23,x:356,y:484.3}).wait(1).to({graphics:mask_graphics_24,x:350.3,y:495.1}).wait(1).to({graphics:mask_graphics_25,x:345,y:505}).wait(1).to({graphics:mask_graphics_26,x:340.3,y:514}).wait(1).to({graphics:mask_graphics_27,x:336.1,y:522}).wait(1).to({graphics:mask_graphics_28,x:332.3,y:529}).wait(1).to({graphics:mask_graphics_29,x:329.1,y:535.2}).wait(1).to({graphics:mask_graphics_30,x:326.3,y:540.3}).wait(1).to({graphics:mask_graphics_31,x:324.1,y:544.6}).wait(1).to({graphics:mask_graphics_32,x:322.3,y:547.9}).wait(1).to({graphics:mask_graphics_33,x:321.1,y:550.2}).wait(1).to({graphics:mask_graphics_34,x:320.3,y:551.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(77));

	// 组 264
	this.instance_5 = new lib.xuancai_mc_000272();
	this.instance_5.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,0,614,836);


(lib.xuancai_mc_000005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.xuancai_mc_000226();
	this.instance.setTransform(321,494.5,1,1,0,0,0,314,490.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112));

	// 图层 1155
	this.instance_1 = new lib.xuancai_mc_000230();
	this.instance_1.setTransform(-140.1,224,1,1,0,0,0,120,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({x:340},10,cjs.Ease.get(1)).to({x:334},7,cjs.Ease.get(1)).wait(27).to({y:740.1,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 图层 1154
	this.instance_2 = new lib.xuancai_mc_000229();
	this.instance_2.setTransform(828.6,265,1,1,0,0,0,160.5,13);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).to({x:322.5},10,cjs.Ease.get(1)).to({x:330.5},7,cjs.Ease.get(1)).wait(27).to({y:781.1,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 图层 1153
	this.instance_3 = new lib.xuancai_mc_000228();
	this.instance_3.setTransform(898.2,706.5,1,1,0,0,0,128,10.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({x:326},10,cjs.Ease.get(1)).to({x:334},7,cjs.Ease.get(1)).wait(27).to({y:1222.6,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 图层 1152
	this.instance_4 = new lib.xuancai_mc_000227();
	this.instance_4.setTransform(-193.6,667.2,1,1,0,0,0,160.5,13);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({x:336.5,y:672},10,cjs.Ease.get(1)).to({x:330.5},7,cjs.Ease.get(1)).wait(27).to({y:1188.1,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 图层 1148
	this.instance_5 = new lib.xuancai_mc_000223();
	this.instance_5.setTransform(-192.6,338.5,1,1,0,0,0,164.5,38.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({x:337.5,y:334.5},10,cjs.Ease.get(1)).to({x:331.5},7,cjs.Ease.get(1)).wait(54).to({y:850.6,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 图层 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A8HISIAAwjMA4PAAAIAAQjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:332.1,y:427.1}).wait(85).to({graphics:null,x:0,y:0}).wait(27));

	// 图层 1150
	this.instance_6 = new lib.xuancai_mc_000225();
	this.instance_6.setTransform(331,325.5,1,1,0,0,0,164,51.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({x:332,y:432.5},10,cjs.Ease.get(1)).to({y:428.5},7,cjs.Ease.get(1)).wait(41).to({y:944.6,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 图层 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EggVAPKIAA+TMBArAAAIAAeTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:327.1,y:557.2}).wait(85).to({graphics:null,x:0,y:0}).wait(27));

	// 图层 1149
	this.instance_7 = new lib.xuancai_mc_000224();
	this.instance_7.setTransform(330.5,1196.2,1,1,0,0,0,164.5,79);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({y:562},31,cjs.Ease.get(1)).wait(21).to({y:1078.1,alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// 组 268
	this.instance_8 = new lib.xuancai_mc_000231();
	this.instance_8.setTransform(329.5,936.5,1,1,0,0,0,303.5,163.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({alpha:1},38,cjs.Ease.get(1)).wait(27).to({alpha:0},9,cjs.Ease.get(0.94)).wait(18));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AGOArQgqgpAAg4QAAg6AqgpQApgpA6AAQA5AAApApQAqApAAA6QAAA4gqApQgpApg5AAQg6AAgpgpg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AggGCQigigAAjiQAAjhCgigQCeifDiAAQDiAACgCfQCgCgAADhQAADiigCgQigCfjiAAQjiAAieifg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AnEKYQkTkTAAmFQAAmEETkTQEUkUGDAAQGGAAETEUQETETAAGEQAAGFkTETQkTEUmGAAQmDAAkUkUg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AtaOnQmEmEAAojQAAoiGEmEQGDmDIiAAQIkAAGDGDQGDGEAAIiQAAIjmDGEQmDGDokAAQoiAAmDmDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AysStQnwnwAAq9QAAq8HwnwQHwnwK8AAQK9AAHwHwQHwHwAAK8QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_2_graphics_5 = new cjs.Graphics().p("A2pWqQpZpYAAtSQAAtRJZpYQJYpZNRAAQNSAAJYJZQJZJYAANRQAANSpZJYQpYJZtSAAQtRAApYpZg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A6fagQq+q/AAvhQAAvgK+q/QK/q+PgAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_2_graphics_7 = new cjs.Graphics().p("A+MeNQshshAAxsQAAxrMhshQMhshRrAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxrAAshshg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EghxAhyQt/uAAAzyQAAzxN/uAQOAt/TxAAQTyAAOAN/QN/OAAATxQAATyt/OAQuAN/zyAAQzxAAuAt/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EglNAlOQvbvbAA1zQAA1yPbvbQPbvbVyAAQVzAAPbPbQPbPbAAVyQAAVzvbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgohAoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgrtAruQyHyHAA5nQAA5mSHyHQSHyHZmAAQZnAASHSHQSHSHAAZmQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EguxAuyQzYzYAA7aQAA7ZTYzYQTYzYbZAAQbaAATYTYQTYTYAAbZQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_2_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:63.7,y:-19.5}).wait(1).to({graphics:mask_2_graphics_1,x:89.8,y:7.4}).wait(1).to({graphics:mask_2_graphics_2,x:115.2,y:39}).wait(1).to({graphics:mask_2_graphics_3,x:139.8,y:69.6}).wait(1).to({graphics:mask_2_graphics_4,x:157.9,y:99.3}).wait(1).to({graphics:mask_2_graphics_5,x:168.2,y:128}).wait(1).to({graphics:mask_2_graphics_6,x:178.2,y:155.8}).wait(1).to({graphics:mask_2_graphics_7,x:187.8,y:182.7}).wait(1).to({graphics:mask_2_graphics_8,x:197.1,y:208.6}).wait(1).to({graphics:mask_2_graphics_9,x:206,y:233.6}).wait(1).to({graphics:mask_2_graphics_10,x:214.6,y:257.6}).wait(1).to({graphics:mask_2_graphics_11,x:222.9,y:280.7}).wait(1).to({graphics:mask_2_graphics_12,x:230.8,y:302.9}).wait(1).to({graphics:mask_2_graphics_13,x:238.4,y:324.1}).wait(1).to({graphics:mask_2_graphics_14,x:245.7,y:344.3}).wait(1).to({graphics:mask_2_graphics_15,x:252.6,y:363.6}).wait(1).to({graphics:mask_2_graphics_16,x:259.2,y:382}).wait(1).to({graphics:mask_2_graphics_17,x:265.4,y:399.5}).wait(1).to({graphics:mask_2_graphics_18,x:271.3,y:415.9}).wait(1).to({graphics:mask_2_graphics_19,x:276.9,y:431.5}).wait(1).to({graphics:mask_2_graphics_20,x:282.1,y:446.1}).wait(1).to({graphics:mask_2_graphics_21,x:287,y:459.8}).wait(1).to({graphics:mask_2_graphics_22,x:291.6,y:472.5}).wait(1).to({graphics:mask_2_graphics_23,x:295.8,y:484.3}).wait(1).to({graphics:mask_2_graphics_24,x:299.7,y:495.1}).wait(1).to({graphics:mask_2_graphics_25,x:303.2,y:505}).wait(1).to({graphics:mask_2_graphics_26,x:306.4,y:514}).wait(1).to({graphics:mask_2_graphics_27,x:309.3,y:522}).wait(1).to({graphics:mask_2_graphics_28,x:311.8,y:529}).wait(1).to({graphics:mask_2_graphics_29,x:314,y:535.2}).wait(1).to({graphics:mask_2_graphics_30,x:315.9,y:540.3}).wait(1).to({graphics:mask_2_graphics_31,x:317.4,y:544.6}).wait(1).to({graphics:mask_2_graphics_32,x:318.6,y:547.9}).wait(1).to({graphics:mask_2_graphics_33,x:319.4,y:550.2}).wait(1).to({graphics:mask_2_graphics_34,x:319.9,y:551.6}).wait(1).to({graphics:mask_2_graphics_35,x:320.1,y:552.1}).wait(77));

	// 组 264
	this.instance_9 = new lib.xuancai_mc_000232();
	this.instance_9.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,4,628,981);


(lib.xuancai_mc_000003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 组 267
	this.instance = new lib.xuancai_mc_000088();
	this.instance.setTransform(335,1162.2,1,1,0,0,0,52,25.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({y:1007.5,alpha:1},13,cjs.Ease.get(1)).wait(10).to({y:1146.1},7).to({_off:true},1).wait(10));

	// 图层 1139
	this.instance_1 = new lib.xuancai_mc_000086();
	this.instance_1.setTransform(331.5,-82.2,1,1,0,0,0,164.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:332.5,y:235},55,cjs.Ease.get(1)).wait(13).to({y:1194.8,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// 图层 1138
	this.instance_2 = new lib.xuancai_mc_000085();
	this.instance_2.setTransform(332.5,1167.3,1,1,0,0,0,166.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:707.5},55,cjs.Ease.get(1)).wait(13).to({y:1667.3,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// 图层 1062 拷贝
	this.instance_3 = new lib.xuancai_mc_000080();
	this.instance_3.setTransform(353.1,793,0.192,0.192,0,0,0,130.2,184);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({regX:130,scaleX:1.15,scaleY:1.15,x:475.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:456},5,cjs.Ease.get(1)).wait(26).to({scaleX:1.14,scaleY:1.14,x:474.7,y:791.6},7).to({regX:130.2,regY:183.9,scaleX:0.24,scaleY:0.24,x:350.3,y:923.1,alpha:0},5).to({_off:true},1).wait(5));

	// 图层 1062
	this.instance_4 = new lib.xuancai_mc_000079();
	this.instance_4.setTransform(304,793,0.192,0.192,0,0,0,129.9,184);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({regX:130,scaleX:1.15,scaleY:1.15,x:181.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:201},5,cjs.Ease.get(1)).wait(26).to({scaleX:1.14,scaleY:1.14,x:182.9,y:791.6},7).to({regX:130.2,regY:183.9,scaleX:0.24,scaleY:0.24,x:290,y:923.1,alpha:0},5).to({_off:true},1).wait(5));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+9OMIAA8XMA97AAAIAAcXg");
	mask.setTransform(327.8,552.7);

	// 图层 1135
	this.instance_5 = new lib.xuancai_mc_000082();
	this.instance_5.setTransform(334.5,778.4,1,1,0,0,0,164.5,79);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({x:331.5,y:562,alpha:1},34,cjs.Ease.get(1)).wait(13).to({y:1521.8,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Layer 16 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgiLAK+IAA17MBEXAAAIAAV7g");
	mask_1.setTransform(329.3,444.7);

	// 图层 1136
	this.instance_6 = new lib.xuancai_mc_000083();
	this.instance_6.setTransform(331.5,285.5,1,1,0,0,0,164.5,51.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({y:428.5},17,cjs.Ease.get(1)).wait(44).to({y:1388.3,alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(5));

	// 图层 1134
	this.instance_7 = new lib.xuancai_mc_000081();
	this.instance_7.setTransform(-204.6,338.5,1,1,0,0,0,164.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:331.5,y:334.5},16,cjs.Ease.get(0.97)).wait(52).to({y:1294.3,alpha:0},12,cjs.Ease.get(0.99)).to({_off:true},1).wait(5));

	// 图层 1137
	this.instance_8 = new lib.xuancai_mc_000084();
	this.instance_8.setTransform(323,576.5,1,1,0,0,0,316,517.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AGOArQgqgpAAg4QAAg6AqgpQApgpA6AAQA5AAApApQAqApAAA6QAAA4gqApQgpApg5AAQg6AAgpgpg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AggGCQigigAAjiQAAjhCgigQCeifDiAAQDiAACgCfQCgCgAADhQAADiigCgQigCfjiAAQjiAAieifg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AnEKYQkTkTAAmFQAAmEETkTQEUkUGDAAQGGAAETEUQETETAAGEQAAGFkTETQkTEUmGAAQmDAAkUkUg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AtaOnQmEmEAAojQAAoiGEmEQGDmDIiAAQIkAAGDGDQGDGEAAIiQAAIjmDGEQmDGDokAAQoiAAmDmDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AysStQnwnwAAq9QAAq8HwnwQHwnwK8AAQK9AAHwHwQHwHwAAK8QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_2_graphics_5 = new cjs.Graphics().p("A2pWqQpZpYAAtSQAAtRJZpYQJYpZNRAAQNSAAJYJZQJZJYAANRQAANSpZJYQpYJZtSAAQtRAApYpZg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A6fagQq+q/AAvhQAAvgK+q/QK/q+PgAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_2_graphics_7 = new cjs.Graphics().p("A+MeNQshshAAxsQAAxrMhshQMhshRrAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxrAAshshg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EghxAhyQt/uAAAzyQAAzxN/uAQOAt/TxAAQTyAAOAN/QN/OAAATxQAATyt/OAQuAN/zyAAQzxAAuAt/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EglNAlOQvbvbAA1zQAA1yPbvbQPbvbVyAAQVzAAPbPbQPbPbAAVyQAAVzvbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgohAoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgrtAruQyHyHAA5nQAA5mSHyHQSHyHZmAAQZnAASHSHQSHSHAAZmQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EguxAuyQzYzYAA7aQAA7ZTYzYQTYzYbZAAQbaAATYTYQTYTYAAbZQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_2_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:63.7,y:-19.5}).wait(1).to({graphics:mask_2_graphics_1,x:89.8,y:7.4}).wait(1).to({graphics:mask_2_graphics_2,x:115.2,y:39}).wait(1).to({graphics:mask_2_graphics_3,x:139.8,y:69.6}).wait(1).to({graphics:mask_2_graphics_4,x:157.9,y:99.3}).wait(1).to({graphics:mask_2_graphics_5,x:168.2,y:128}).wait(1).to({graphics:mask_2_graphics_6,x:178.2,y:155.8}).wait(1).to({graphics:mask_2_graphics_7,x:187.8,y:182.7}).wait(1).to({graphics:mask_2_graphics_8,x:197.1,y:208.6}).wait(1).to({graphics:mask_2_graphics_9,x:206,y:233.6}).wait(1).to({graphics:mask_2_graphics_10,x:214.6,y:257.6}).wait(1).to({graphics:mask_2_graphics_11,x:222.9,y:280.7}).wait(1).to({graphics:mask_2_graphics_12,x:230.8,y:302.9}).wait(1).to({graphics:mask_2_graphics_13,x:238.4,y:324.1}).wait(1).to({graphics:mask_2_graphics_14,x:245.7,y:344.3}).wait(1).to({graphics:mask_2_graphics_15,x:252.6,y:363.6}).wait(1).to({graphics:mask_2_graphics_16,x:259.2,y:382}).wait(1).to({graphics:mask_2_graphics_17,x:265.4,y:399.5}).wait(1).to({graphics:mask_2_graphics_18,x:271.3,y:415.9}).wait(1).to({graphics:mask_2_graphics_19,x:276.9,y:431.5}).wait(1).to({graphics:mask_2_graphics_20,x:282.1,y:446.1}).wait(1).to({graphics:mask_2_graphics_21,x:287,y:459.8}).wait(1).to({graphics:mask_2_graphics_22,x:291.6,y:472.5}).wait(1).to({graphics:mask_2_graphics_23,x:295.8,y:484.3}).wait(1).to({graphics:mask_2_graphics_24,x:299.7,y:495.1}).wait(1).to({graphics:mask_2_graphics_25,x:303.2,y:505}).wait(1).to({graphics:mask_2_graphics_26,x:306.4,y:514}).wait(1).to({graphics:mask_2_graphics_27,x:309.3,y:522}).wait(1).to({graphics:mask_2_graphics_28,x:311.8,y:529}).wait(1).to({graphics:mask_2_graphics_29,x:314,y:535.2}).wait(1).to({graphics:mask_2_graphics_30,x:315.9,y:540.3}).wait(1).to({graphics:mask_2_graphics_31,x:317.4,y:544.6}).wait(1).to({graphics:mask_2_graphics_32,x:318.6,y:547.9}).wait(1).to({graphics:mask_2_graphics_33,x:319.4,y:550.2}).wait(1).to({graphics:mask_2_graphics_34,x:319.9,y:551.6}).wait(1).to({graphics:mask_2_graphics_35,x:320.1,y:552.1}).wait(51));

	// 组 264
	this.instance_9 = new lib.xuancai_mc_000087();
	this.instance_9.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_9.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.1,-138.2,1008.1,1362);


(lib.xuancai_mc_000258 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuancai_mc_000069();
	this.instance.setTransform(213.5,204.5,1,1,0,0,0,213.5,204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:215.5,y:198.5},12,cjs.Ease.get(0.46)).to({x:217.5,y:208.5},11,cjs.Ease.get(0.46)).to({x:209.5,y:200.5},15,cjs.Ease.get(0.46)).to({x:213.5,y:204.5},20,cjs.Ease.get(0.46)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,427,409);


(lib.xuancai_mc_000089 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000058();
	this.instance.setTransform(262,188.5,1,1,0,0,0,268,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:272},28).to({x:262},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,536,377);


(lib.xuancai_mc_000049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xuancai_mc_000016();
	this.instance.setTransform(144.8,255.7,1,1,0,0,0,305,307);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,382.1,418.7);


(lib.xuancai_mc_000014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.xuancai_mc_000196();
	this.instance.setTransform(314,510,1,1,0,0,0,314,498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102));

	// 图层 1201
	this.instance_1 = new lib.xuancai_mc_000049();
	this.instance_1.setTransform(366.4,602.7,1,1,0,0,0,191.1,209.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(54).to({scaleX:1.08,scaleY:1.08,x:376.3,y:607.2},5,cjs.Ease.get(1)).to({regX:191,scaleX:0.59,scaleY:0.59,x:353.7,y:578.7,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 图层 1200
	this.instance_2 = new lib.xuancai_mc_000189();
	this.instance_2.setTransform(328.8,538.4,0.053,0.053,0,0,0,155,26.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({regY:26,scaleX:1.15,scaleY:1.15,x:325.6,y:106.1,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:326,y:165},4,cjs.Ease.get(1)).wait(50).to({scaleX:1.08,scaleY:1.08,x:332.9,y:135.6},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:329.9,y:320.1,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 图层 1211
	this.instance_3 = new lib.xuancai_mc_000200();
	this.instance_3.setTransform(324.7,543.9,0.053,0.053,0,0,0,76.5,74.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regX:76,regY:74.5,scaleX:1.15,scaleY:1.15,x:237.1,y:226.3,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:249,y:269.5},4,cjs.Ease.get(1)).wait(48).to({scaleX:1.08,scaleY:1.08,x:249.9,y:248.2},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:284.4,y:381.8,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 图层 1210
	this.instance_4 = new lib.xuancai_mc_000199();
	this.instance_4.setTransform(333.1,543.9,0.053,0.053,0,0,0,71.8,71.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({regX:72,regY:72.5,scaleX:1.15,scaleY:1.15,x:419.8,y:227.4,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:408,y:270.5},4,cjs.Ease.get(1)).wait(46).to({scaleX:1.08,scaleY:1.08,x:421.2,y:249.3},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:378.4,y:382.5,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 图层 1115
	this.instance_5 = new lib.xuancai_mc_000188();
	this.instance_5.setTransform(329.5,557.4,0.053,0.053,0,0,0,194.7,138);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({regX:194,regY:138.5,scaleX:1.15,scaleY:1.15,x:340.5,y:520.5,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:339,y:525.5},4,cjs.Ease.get(1)).wait(44).to({regX:194.1,scaleX:1.08,scaleY:1.08,x:346.9,y:524.1},5,cjs.Ease.get(1)).to({regY:138.6,scaleX:0.59,scaleY:0.59,x:337.7,y:533.2,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 图层 1208
	this.instance_6 = new lib.xuancai_mc_000197();
	this.instance_6.setTransform(329,568.1,0.053,0.053,0,0,0,156.8,50.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({regX:156.5,regY:50.5,scaleX:1.15,scaleY:1.15,x:329.6,y:752.7,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:329.5,y:727.5},4,cjs.Ease.get(1)).wait(42).to({scaleX:1.08,scaleY:1.08,x:336.6,y:741.8},5,cjs.Ease.get(1)).to({regX:156.6,scaleX:0.59,scaleY:0.59,x:332,y:652.5,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 图层 1209
	this.instance_7 = new lib.xuancai_mc_000198();
	this.instance_7.setTransform(329,573.4,0.053,0.053,0,0,0,92.6,44.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).to({regX:93,regY:44.5,scaleX:1.15,scaleY:1.15,x:331.3,y:867.6,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:331,y:827.5},4,cjs.Ease.get(1)).wait(40).to({scaleX:1.08,scaleY:1.08,x:338.2,y:849.5},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:332.9,y:711.5,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 组 285
	this.instance_8 = new lib.xuancai_mc_000206();
	this.instance_8.setTransform(328.9,578.9,0.053,0.053,0,0,0,156.8,53.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37).to({_off:false},0).to({regX:157,regY:53.5,scaleX:1.15,scaleY:1.15,x:327.9,y:987.1,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:328,y:931.5},4,cjs.Ease.get(1)).wait(38).to({scaleX:1.08,scaleY:1.08,x:335,y:961.6},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:331.1,y:773,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 组 270 拷贝 5
	this.instance_9 = new lib.xuancai_mc_000204();
	this.instance_9.setTransform(798.1,32.2,1,1,0,0,0,54,49);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({x:519.4,y:159.4},6,cjs.Ease.get(1)).to({x:534,y:152},4,cjs.Ease.get(1)).wait(36).to({scaleX:1.08,scaleY:1.08,x:557,y:121.6},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:452.8,y:312.4,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// 组 270 拷贝 2
	this.instance_10 = new lib.xuancai_mc_000203();
	this.instance_10.setTransform(-146.3,152,1,1,0,0,0,42,112.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:50.2,y:237.5},6).to({scaleX:1,scaleY:1,x:42,y:215.5},4).wait(37).to({scaleX:1.08,scaleY:1.08,x:26.8,y:190},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:162.1,y:349.9,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// Layer 44
	this.instance_11 = new lib.xuancai_mc_000047();
	this.instance_11.setTransform(-208,845.9,1,1,0,0,0,139.5,94.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(36).to({_off:false},0).to({x:-17.3,y:721.1},6).to({x:-27.1,y:730.9},4).wait(39).to({scaleX:1.08,scaleY:1.08,x:-47.7,y:745.5},5,cjs.Ease.get(1)).to({regX:139.6,scaleX:0.59,scaleY:0.59,x:121.4,y:654.5,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// Layer 43
	this.instance_12 = new lib.xuancai_mc_000045();
	this.instance_12.setTransform(328.9,556.6,0.053,0.053,0,0,0,377,377);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(17).to({_off:false},0).to({regX:377.1,scaleX:1.15,scaleY:1.15,x:329,y:503.2,alpha:1},6,cjs.Ease.get(1)).to({regX:377,scaleX:0.92,scaleY:0.92,x:328.9,y:510.5},4,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(46).to({scaleX:1.08,scaleY:1.08,x:335.9,y:507.8},5,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,x:331.7,y:524.2,alpha:0},4,cjs.Ease.get(1)).wait(8));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgBiBYqQgpgpAAg6QAAg6ApgpQAqgpA4AAQA5AAApApQAqApAAA6QAAA6gqApQgpApg5AAQg4AAgqgpg");
	var mask_graphics_1 = new cjs.Graphics().p("EgGBBXcQifigAAjiQAAjjCfifQCgigDhAAQDiAACgCgQCfCfAADjQAADiifCgQigCfjiAAQjhAAigifg");
	var mask_graphics_2 = new cjs.Graphics().p("EgKXBWPQkUkTAAmFQAAmGEUkTQETkTGEAAQGFAAETETQEUETAAGGQAAGFkUETQkTEUmFAAQmEAAkTkUg");
	var mask_graphics_3 = new cjs.Graphics().p("EgOmBVGQmDmEAAokQAAojGDmEQGEmDIiAAQIjAAGEGDQGDGEAAIjQAAIkmDGEQmEGDojAAQoiAAmEmDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgSsBT+QnwnwAAq9QAAq+HwnvQHwnwK8AAQK9AAHwHwQHwHvAAK+QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_graphics_5 = new cjs.Graphics().p("EgWpBS5QpZpZAAtSQAAtSJZpZQJYpZNRAAQNSAAJYJZQJZJZAANSQAANSpZJZQpYJZtSAAQtRAApYpZg");
	var mask_graphics_6 = new cjs.Graphics().p("EgafBR2Qq+q/AAviQAAviK+q+QK/q/PgAAQPhAAK/K/QK+K+AAPiQAAPiq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_graphics_7 = new cjs.Graphics().p("EgeMBQ1QshshAAxtQAAxsMhshQMhshRrAAQRsAAMhMhQMhMhAARsQAARtshMhQshMhxsAAQxrAAshshg");
	var mask_graphics_8 = new cjs.Graphics().p("EghxBP2Qt/t/AAzzQAAzzN/t/QOAt+TxAAQTyAAOAN+QN/N/AATzQAATzt/N/QuAOAzyAAQzxAAuAuAg");
	var mask_graphics_9 = new cjs.Graphics().p("EglNBO6QvbvbAA10QAA10PbvaQPbvZVyAAQVzAAPbPZQPbPaAAV0QAAV0vbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgohBOAQwzwzAA3wQAA3wQzwxQQywyXvAAQXwAAQyQyQQzQxAAXwQAAXwwzQzQwyQz3wAAQ3vAAwywzg");
	var mask_graphics_11 = new cjs.Graphics().p("EgrtBNIQyHyHAA5nQAA5oSHyFQSHyHZmAAQZnAASHSHQSHSFAAZoQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_graphics_12 = new cjs.Graphics().p("EguxBMTQzYzYAA7aQAA7aTYzWQTYzZbZAAQbaAATYTZQTYTWAAbaQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_graphics_13 = new cjs.Graphics().p("EgxsBLgQ0m0mAA9IQAA9FUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdFQAAdI0mUmQ0mUl9HAAQ9GAA0m0lg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg0fBKvQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVw+wAAQ+vAA1w1wg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg3JBKAUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_graphics_16 = new cjs.Graphics().p("Eg5sBJUUgX5gX5AAAgh0UAAAghyAX5gX5UAX6gX6AhyAAAUAhzAAAAX6AX6UAX5AX5AAAAhyUAAAAh0gX5AX5UgX6AX6ghzAAAUghyAAAgX6gX6g");
	var mask_graphics_17 = new cjs.Graphics().p("Eg8GBIqUgY5gY5AAAgjOUAAAgjMAY5gY5UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY5AAAAjMUAAAAjOgY5AY5UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg+XBICUgZ2gZ1AAAgkjUAAAgkhAZ2gZ2UAZ1gZ1AkiAAAUAkjAAAAZ1AZ1UAZ2AZ2AAAAkhUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_graphics_19 = new cjs.Graphics().p("EhAgBHdUgavgavAAAglzUAAAglyAavgauUAaugauAlyAAAUAlzAAAAauAauUAavAauAAAAlyUAAAAlzgavAavUgauAauglzAAAUglyAAAgaugaug");
	var mask_graphics_20 = new cjs.Graphics().p("EhChBG6UgbkgbkAAAgm/UAAAgm9AbkgbkUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbkAAAAm9UAAAAm/gbkAbkUgbjAbjgm/AAAUgm+AAAgbjgbjg");
	var mask_graphics_21 = new cjs.Graphics().p("EhEaBGZUgcWgcWAAAgoGUAAAgoEAcWgcVUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcVAAAAoEUAAAAoGgcWAcWUgcWAcVgoFAAAUgoEAAAgcWgcVg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:571.6}).wait(1).to({graphics:mask_graphics_1,x:18,y:575.6}).wait(1).to({graphics:mask_graphics_2,x:35.5,y:579.5}).wait(1).to({graphics:mask_graphics_3,x:52.5,y:583.3}).wait(1).to({graphics:mask_graphics_4,x:69,y:587}).wait(1).to({graphics:mask_graphics_5,x:84.9,y:590.6}).wait(1).to({graphics:mask_graphics_6,x:100.3,y:594.1}).wait(1).to({graphics:mask_graphics_7,x:115.2,y:597.4}).wait(1).to({graphics:mask_graphics_8,x:129.6,y:600.6}).wait(1).to({graphics:mask_graphics_9,x:143.4,y:603.7}).wait(1).to({graphics:mask_graphics_10,x:156.8,y:606.7}).wait(1).to({graphics:mask_graphics_11,x:169.6,y:609.6}).wait(1).to({graphics:mask_graphics_12,x:181.9,y:612.4}).wait(1).to({graphics:mask_graphics_13,x:193.6,y:615}).wait(1).to({graphics:mask_graphics_14,x:204.8,y:617.5}).wait(1).to({graphics:mask_graphics_15,x:215.6,y:619.9}).wait(1).to({graphics:mask_graphics_16,x:225.7,y:622.2}).wait(1).to({graphics:mask_graphics_17,x:235.4,y:624.4}).wait(1).to({graphics:mask_graphics_18,x:244.6,y:626.4}).wait(1).to({graphics:mask_graphics_19,x:253.2,y:628.4}).wait(1).to({graphics:mask_graphics_20,x:261.3,y:630.2}).wait(1).to({graphics:mask_graphics_21,x:268.9,y:631.9}).wait(1).to({graphics:mask_graphics_22,x:275.9,y:631.7}).wait(1).to({graphics:mask_graphics_23,x:282.4,y:619.9}).wait(1).to({graphics:mask_graphics_24,x:288.5,y:609.1}).wait(1).to({graphics:mask_graphics_25,x:293.9,y:599.2}).wait(1).to({graphics:mask_graphics_26,x:298.9,y:590.3}).wait(1).to({graphics:mask_graphics_27,x:303.3,y:582.3}).wait(1).to({graphics:mask_graphics_28,x:307.3,y:575.2}).wait(1).to({graphics:mask_graphics_29,x:310.7,y:569.1}).wait(1).to({graphics:mask_graphics_30,x:313.5,y:563.9}).wait(1).to({graphics:mask_graphics_31,x:315.9,y:559.7}).wait(1).to({graphics:mask_graphics_32,x:317.7,y:556.4}).wait(1).to({graphics:mask_graphics_33,x:319,y:554}).wait(1).to({graphics:mask_graphics_34,x:319.8,y:552.6}).wait(1).to({graphics:mask_graphics_35,x:320.1,y:552.1}).wait(67));

	// 组 264
	this.instance_13 = new lib.xuancai_mc_000201();
	this.instance_13.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,628,996);


(lib.xuancai_mc_000006 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.xuancai_mc_000262();
	this.instance.setTransform(314,510,1,1,0,0,0,314,498);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112));

	// 组 266
	this.instance_1 = new lib.xuancai_mc_000264();
	this.instance_1.setTransform(335,299,1,0.185,0,0,0,164,27);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({scaleY:1.22,y:271,alpha:1},8,cjs.Ease.get(1)).to({scaleY:1,y:277},5,cjs.Ease.get(1)).wait(59).to({y:677,alpha:0},9,cjs.Ease.get(1)).wait(23));

	// 图层 36 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgiXAF8IAAr3MBEvAAAIAAL3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:340.1,y:452.1}).wait(80).to({graphics:null,x:0,y:0}).wait(32));

	// 图层 1158
	this.instance_2 = new lib.xuancai_mc_000261();
	this.instance_2.setTransform(332,371,1,1,0,0,0,165,31);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:451},8,cjs.Ease.get(1)).to({y:447},5,cjs.Ease.get(1)).wait(57).to({y:847,alpha:0},9,cjs.Ease.get(1)).wait(23));

	// 图层 1156
	this.instance_3 = new lib.xuancai_mc_000259();
	this.instance_3.setTransform(-184.6,364,1,1,0,0,0,165.5,52);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:343.5,y:361},8).to({x:333.5},3).wait(67).to({y:761,alpha:0},9,cjs.Ease.get(1)).wait(23));

	// 图层 37 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_17 = new cjs.Graphics().p("Egi1APUIAA+nMBFrAAAIAAeng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_1_graphics_17,x:325.1,y:554.1}).wait(63).to({graphics:null,x:0,y:0}).wait(32));

	// 图层 1157
	this.instance_4 = new lib.xuancai_mc_000260();
	this.instance_4.setTransform(331.5,1204.2,1,1,0,0,0,164.5,79);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({y:560},29,cjs.Ease.get(0.9)).wait(34).to({y:960,alpha:0},9,cjs.Ease.get(1)).wait(23));

	// 组 271 拷贝 6
	this.instance_5 = new lib.xuancai_mc_000239();
	this.instance_5.setTransform(-391.1,1393.6,1,1,0,0,0,5,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({x:285,y:929.5},11).wait(25).to({x:327,y:874.5,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 5
	this.instance_6 = new lib.xuancai_mc_000238();
	this.instance_6.setTransform(-428.1,1439.6,1,1,0,0,0,8,6.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:false},0).to({x:248,y:975.5},11).wait(28).to({x:384,y:907.5,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 23
	this.instance_7 = new lib.xuancai_mc_000256();
	this.instance_7.setTransform(-588.1,1478.1,1,1,0,0,0,18,16);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({x:88,y:1014},11).wait(34).to({x:63,y:1156.1,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 22
	this.instance_8 = new lib.xuancai_mc_000255();
	this.instance_8.setTransform(-383.1,1421.1,1,1,0,0,0,18,16);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({x:293,y:957},11).wait(26).to({x:437.1,y:1013,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 4
	this.instance_9 = new lib.xuancai_mc_000237();
	this.instance_9.setTransform(-416.1,1413.6,1,1,0,0,0,8,6.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).to({x:260,y:949.5},11).wait(30).to({x:368,y:882.5,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 3
	this.instance_10 = new lib.xuancai_mc_000236();
	this.instance_10.setTransform(-453.1,1439.6,1,1,0,0,0,12,10.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38).to({_off:false},0).to({x:223,y:975.5},11).wait(33).to({x:292.1,y:924.5,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 2
	this.instance_11 = new lib.xuancai_mc_000235();
	this.instance_11.setTransform(-479.1,1448.6,1,1,0,0,0,22,17.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(43).to({_off:false},0).to({x:197,y:984.5},11).wait(28).to({x:159,y:1180.5,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 21
	this.instance_12 = new lib.xuancai_mc_000254();
	this.instance_12.setTransform(-404.1,1501.6,1,1,0,0,0,67,62.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({_off:false},0).to({x:272,y:1037.5},11).wait(37).to({x:419,y:1202.6,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 24
	this.instance_13 = new lib.xuancai_mc_000257();
	this.instance_13.setTransform(-313.1,1436.6,1,1,0,0,0,35,33.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({x:363,y:972.5},11).wait(31).to({x:683.1,y:1080.6,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 15
	this.instance_14 = new lib.xuancai_mc_000248();
	this.instance_14.setTransform(-629.1,1412.1,1,1,0,0,0,47,87);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(43).to({_off:false},0).to({x:47,y:948},11).wait(28).to({x:-79,y:970,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝
	this.instance_15 = new lib.xuancai_mc_000234();
	this.instance_15.setTransform(-521.6,1472.1,1,1,0,0,0,37.5,47);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(38).to({_off:false},0).to({x:154.5,y:1008},11).wait(33).to({x:-88.5,y:1239.8,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 14
	this.instance_16 = new lib.xuancai_mc_000247();
	this.instance_16.setTransform(-442.6,1427.1,1,1,0,0,0,5.5,6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(36).to({_off:false},0).to({x:233.5,y:963},11).wait(35).to({x:436.6,y:803,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 20
	this.instance_17 = new lib.xuancai_mc_000253();
	this.instance_17.setTransform(-470.1,1498.1,1,1,0,0,0,6,5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(40).to({_off:false},0).to({x:206,y:1034},11).wait(31).to({x:138,y:1119.1,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 19
	this.instance_18 = new lib.xuancai_mc_000252();
	this.instance_18.setTransform(-618.1,1295.1,1,1,0,0,0,6,5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(42).to({_off:false},0).to({x:58,y:831},11).wait(29).to({x:93,y:792,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 18
	this.instance_19 = new lib.xuancai_mc_000251();
	this.instance_19.setTransform(-597.1,1278.1,1,1,0,0,0,6,5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).to({x:79,y:814},11).wait(27).to({x:156,y:746,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 17
	this.instance_20 = new lib.xuancai_mc_000250();
	this.instance_20.setTransform(-370.1,1379.1,1,1,0,0,0,6,5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(39).to({_off:false},0).to({x:306,y:915},11).wait(32).to({x:425.1,y:884,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 16
	this.instance_21 = new lib.xuancai_mc_000249();
	this.instance_21.setTransform(-363.1,1448.1,1,1,0,0,0,5,6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(37).to({_off:false},0).to({x:313,y:984},11).wait(34).to({x:509.1,y:1110.1,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 13
	this.instance_22 = new lib.xuancai_mc_000246();
	this.instance_22.setTransform(-444.1,1414.1,1,1,0,0,0,5,6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(42).to({_off:false},0).to({x:232,y:950},11).wait(29).to({x:305,y:878,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 12
	this.instance_23 = new lib.xuancai_mc_000245();
	this.instance_23.setTransform(-537.1,1414.1,1,1,0,0,0,5,6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(40).to({_off:false},0).to({x:139,y:950},11).wait(31).to({x:317,y:765,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 11
	this.instance_24 = new lib.xuancai_mc_000244();
	this.instance_24.setTransform(-585.1,1337.6,1,1,0,0,0,8,9.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(39).to({_off:false},0).to({x:91,y:873.5},11).wait(32).to({x:163,y:827.5,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 10
	this.instance_25 = new lib.xuancai_mc_000243();
	this.instance_25.setTransform(-603.6,1323.1,1,1,0,0,0,11.5,13);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(46).to({_off:false},0).to({x:72.5,y:859},11).wait(25).to({x:155.5,y:796,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 9
	this.instance_26 = new lib.xuancai_mc_000242();
	this.instance_26.setTransform(-634.6,1316.1,1,1,0,0,0,20.5,18);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(49).to({_off:false},0).to({x:41.5,y:852},11).wait(22).to({x:-15.5,y:865,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 8
	this.instance_27 = new lib.xuancai_mc_000241();
	this.instance_27.setTransform(-648.1,1281.1,1,1,0,0,0,28,49);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(52).to({_off:false},0).to({x:28,y:817},11).wait(19).to({x:-23,y:777,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271 拷贝 7
	this.instance_28 = new lib.xuancai_mc_000240();
	this.instance_28.setTransform(-579.1,1415.1,1,1,0,0,0,26,30);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(45).to({_off:false},0).to({x:97,y:951},11).wait(26).to({x:-81,y:1063,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// 组 271
	this.instance_29 = new lib.xuancai_mc_000233();
	this.instance_29.setTransform(-630.1,1488.1,1,1,0,0,0,21,21);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(42).to({_off:false},0).to({x:46,y:1024},11).wait(29).to({x:-34,y:1161.1,alpha:0},7,cjs.Ease.get(0.98)).wait(23));

	// Layer 1
	this.instance_30 = new lib.xuancai_mc_000258();
	this.instance_30.setTransform(-372.6,1293.6,1,1,0,0,0,213.5,204.5);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(41).to({_off:false},0).to({x:319.5,y:821.5},8,cjs.Ease.get(0.98)).to({x:303.5,y:829.5},5,cjs.Ease.get(0.98)).wait(28).to({x:907.7,y:513.5},13,cjs.Ease.get(-1)).wait(17));

	// 组 270 拷贝 2
	this.instance_31 = new lib.xuancai_mc_000266();
	this.instance_31.setTransform(-205.5,253.5,1,1,-35,0,0,86.5,112.5);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(34).to({_off:false},0).to({rotation:0,x:86.5,y:233.5},14,cjs.Ease.get(0.96)).wait(34).to({rotation:-82.7,x:-225.5,y:53.5},10).to({_off:true},1).wait(19));

	// 组 270
	this.instance_32 = new lib.xuancai_mc_000265();
	this.instance_32.setTransform(-261.1,702.1,1,1,86.7,0,0,135,158.6);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(25).to({_off:false},0).to({regY:158.5,rotation:0,x:135,y:487.5},14,cjs.Ease.get(0.96)).wait(43).to({regY:158.6,rotation:87.2,x:-319.1,y:839.5},10).to({_off:true},1).wait(19));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EAuRAArQgqgpABg4QgBg6AqgpQAogpA7AAQA6AAApApQApApgBA6QABA4gpApQgpApg6AAQg7AAgogpg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EAlQAGCQigigAAjiQAAjhCgigQCgifDiAAQDjAACfCfQCgCgAADhQAADiigCgQifCfjjAAQjiAAigifg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AchKYQkTkTAAmFQAAmEETkTQETkUGGAAQGFAAETEUQEUETAAGEQAAGFkUETQkTEUmFAAQmGAAkTkUg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AUCOnQmDmEAAojQAAoiGDmEQGDmDIkAAQIkAAGDGDQGEGEAAIiQAAIjmEGEQmDGDokAAQokAAmDmDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AL0StQnwnwAAq9QAAq8HwnwQHwnwK9AAQK+AAHwHwQHvHwAAK8QAAK9nvHwQnwHwq+AAQq9AAnwnwg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AD3WqQpXpYAAtSQAAtRJXpYQJZpZNSAAQNSAAJZJZQJZJYAANRQAANSpZJYQpZJZtSAAQtSAApZpZg");
	var mask_2_graphics_6 = new cjs.Graphics().p("Aj0agQq+q/AAvhQAAvgK+q/QK9q+PiAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQviAAq9q+g");
	var mask_2_graphics_7 = new cjs.Graphics().p("ArQeNQshshAAxsQAAxrMhshQMfshRtAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxtAAsfshg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EgSbAhyQuAuAAAzyQAAzxOAuAQN/t/TxAAQTzAAOAN/QN/OAAATxQAATyt/OAQuAN/zzAAQzxAAt/t/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgZWAlOQvavbAA1zQAA1yPavbQPbvbVyAAQV0AAPbPbQPbPbAAVyQAAVzvbPbQvbPb10AAQ1yAAvbvbg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Egf/AoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgmZAruQyHyHAA5nQAA5mSHyHQSIyHZlAAQZoAASHSHQSHSHAAZmQAAZnyHSHQyHSH5oAAQ5lAAyIyHg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgshAuyQzYzYAA7aQAA7ZTYzYQTYzYbYAAQbaAATZTYQTYTYAAbZQAAbazYTYQzZTY7aAAQ7YAAzYzYg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_2_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:320,y:-19.5}).wait(1).to({graphics:mask_2_graphics_1,x:331.7,y:7.4}).wait(1).to({graphics:mask_2_graphics_2,x:343,y:39}).wait(1).to({graphics:mask_2_graphics_3,x:354,y:69.6}).wait(1).to({graphics:mask_2_graphics_4,x:364.7,y:99.3}).wait(1).to({graphics:mask_2_graphics_5,x:375,y:128}).wait(1).to({graphics:mask_2_graphics_6,x:385,y:155.8}).wait(1).to({graphics:mask_2_graphics_7,x:394.6,y:182.7}).wait(1).to({graphics:mask_2_graphics_8,x:404,y:208.6}).wait(1).to({graphics:mask_2_graphics_9,x:412.9,y:233.6}).wait(1).to({graphics:mask_2_graphics_10,x:421.6,y:257.6}).wait(1).to({graphics:mask_2_graphics_11,x:429.9,y:280.7}).wait(1).to({graphics:mask_2_graphics_12,x:437.8,y:302.9}).wait(1).to({graphics:mask_2_graphics_13,x:440.9,y:324.1}).wait(1).to({graphics:mask_2_graphics_14,x:430.2,y:344.3}).wait(1).to({graphics:mask_2_graphics_15,x:420,y:363.6}).wait(1).to({graphics:mask_2_graphics_16,x:410.2,y:382}).wait(1).to({graphics:mask_2_graphics_17,x:401,y:399.5}).wait(1).to({graphics:mask_2_graphics_18,x:392.2,y:415.9}).wait(1).to({graphics:mask_2_graphics_19,x:384,y:431.5}).wait(1).to({graphics:mask_2_graphics_20,x:376.3,y:446.1}).wait(1).to({graphics:mask_2_graphics_21,x:369,y:459.8}).wait(1).to({graphics:mask_2_graphics_22,x:362.3,y:472.5}).wait(1).to({graphics:mask_2_graphics_23,x:356,y:484.3}).wait(1).to({graphics:mask_2_graphics_24,x:350.3,y:495.1}).wait(1).to({graphics:mask_2_graphics_25,x:345,y:505}).wait(1).to({graphics:mask_2_graphics_26,x:340.3,y:514}).wait(1).to({graphics:mask_2_graphics_27,x:336.1,y:522}).wait(1).to({graphics:mask_2_graphics_28,x:332.3,y:529}).wait(1).to({graphics:mask_2_graphics_29,x:329.1,y:535.2}).wait(1).to({graphics:mask_2_graphics_30,x:326.3,y:540.3}).wait(1).to({graphics:mask_2_graphics_31,x:324.1,y:544.6}).wait(1).to({graphics:mask_2_graphics_32,x:322.3,y:547.9}).wait(1).to({graphics:mask_2_graphics_33,x:321.1,y:550.2}).wait(1).to({graphics:mask_2_graphics_34,x:320.3,y:551.6}).wait(1).to({graphics:mask_2_graphics_35,x:320.1,y:552.1}).wait(77));

	// 组 264
	this.instance_33 = new lib.xuancai_mc_000263();
	this.instance_33.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_33.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,628,996);


(lib.xuancai_mc_000004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1146
	this.instance = new lib.xuancai_mc_000096();
	this.instance.setTransform(251,-135.1,1,1,0,0,0,24,28);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:159},47,cjs.Ease.get(1)).wait(50));

	// 图层 1145
	this.instance_1 = new lib.xuancai_mc_000095();
	this.instance_1.setTransform(327,-94.1,1,1,0,0,0,40,46);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({y:200},38,cjs.Ease.get(1)).wait(38));

	// 图层 1144
	this.instance_2 = new lib.xuancai_mc_000094();
	this.instance_2.setTransform(314,510,1,1,0,0,0,314,498);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// 图层 1147
	this.instance_3 = new lib.xuancai_mc_000097();
	this.instance_3.setTransform(335,301.3,1,0.065,0,0,0,164,27);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({regY:26.9,scaleY:1.16,y:271.7,alpha:1},6).to({regY:27,scaleY:1,y:276},5).wait(26).to({y:755,alpha:0},8,cjs.Ease.get(1)).wait(26));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A79FZIAAqxMA37AAAIAAKxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:330.1,y:448.6}).wait(86).to({graphics:null,x:0,y:0}).wait(34));

	// 图层 1143
	this.instance_4 = new lib.xuancai_mc_000093();
	this.instance_4.setTransform(332,367,1,1,0,0,0,165,31);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({y:448},8,cjs.Ease.get(1)).to({y:447},5,cjs.Ease.get(1)).wait(29).to({y:926,alpha:0},8,cjs.Ease.get(1)).wait(26));

	// 图层 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_47 = new cjs.Graphics().p("A7uNXIAA6tMA3dAAAIAAatg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_1_graphics_47,x:328.6,y:561.7}).wait(39).to({graphics:null,x:0,y:0}).wait(34));

	// 图层 1142
	this.instance_5 = new lib.xuancai_mc_000092();
	this.instance_5.setTransform(331.5,817.1,1,1,0,0,0,164.5,79);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({y:560},23).wait(16).to({y:1039,alpha:0},8,cjs.Ease.get(1)).wait(26));

	// 图层 1141
	this.instance_6 = new lib.xuancai_mc_000091();
	this.instance_6.setTransform(-181.6,364,1,1,0,0,0,165.5,52);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({x:343.5,y:362},12,cjs.Ease.get(0.98)).to({x:333.5},5,cjs.Ease.get(0.98)).wait(36).to({y:841,alpha:0},8,cjs.Ease.get(1)).wait(26));

	// 组 264 拷贝 2
	this.instance_7 = new lib.xuancai_mc_000101();
	this.instance_7.setTransform(-63.5,513.7,1,1,0,0,0,36.5,30.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).to({x:174.5,y:677.7},9,cjs.Ease.get(0.92)).to({x:152.5,y:663.5},6,cjs.Ease.get(0.92)).wait(26).to({x:-151.5,y:451.5},8,cjs.Ease.get(1)).wait(26));

	// 组 264 拷贝
	this.instance_8 = new lib.xuancai_mc_000100();
	this.instance_8.setTransform(721.6,558.5,1,1,0,0,0,33.5,32.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({x:485.5,y:717.5},9,cjs.Ease.get(0.92)).to({x:499.5,y:695.5},6,cjs.Ease.get(0.92)).wait(23).to({x:821.6,y:514.5},8,cjs.Ease.get(1)).wait(23));

	// 组 264
	this.instance_9 = new lib.xuancai_mc_000099();
	this.instance_9.setTransform(732.6,974.6,1,1,0,0,0,13.5,18.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({_off:false},0).to({x:438.5,y:666.5},9,cjs.Ease.get(0.92)).to({x:446.5,y:676.5},6,cjs.Ease.get(0.92)).wait(22).to({x:1006.6,y:1216.7},8,cjs.Ease.get(1)).wait(19));

	// 图层 1064
	this.instance_10 = new lib.xuancai_mc_000089();
	this.instance_10.setTransform(335,965.5,0.119,0.119,0,0,0,268,188.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39).to({_off:false},0).to({regX:267.9,scaleX:1.04,scaleY:1.04,x:334.9,y:911.5,alpha:1},8,cjs.Ease.get(1)).to({regX:268,scaleX:1,scaleY:1,x:335},5,cjs.Ease.get(1)).wait(36).to({y:1331.6},8,cjs.Ease.get(1)).wait(24));

	// 图层 1140
	this.instance_11 = new lib.xuancai_mc_000090();
	this.instance_11.setTransform(320,1228.3,1,1,0,0,0,320,58);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({scaleY:1.19,y:1031},8,cjs.Ease.get(1)).to({scaleY:1,y:1042},5,cjs.Ease.get(1)).wait(69).to({y:1462.1},8,cjs.Ease.get(1)).wait(17));

	// 组 265 拷贝
	this.instance_12 = new lib.xuancai_mc_000103();
	this.instance_12.setTransform(765.4,1081.9,1,1,0,0,0,117,254.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).to({scaleX:1.06,scaleY:1.06,x:516.6,y:831.5},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:523,y:845.5},5,cjs.Ease.get(1)).wait(68).to({x:776.1,y:1109.6},8,cjs.Ease.get(1)).wait(21));

	// 组 265 拷贝 3
	this.instance_13 = new lib.xuancai_mc_000105();
	this.instance_13.setTransform(743.8,55.8,1,1,0,0,0,64.5,204);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(17).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:569.3,y:223.5},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:575.5,y:204},5,cjs.Ease.get(1)).wait(58).to({x:723.6,y:92},8,cjs.Ease.get(1)).wait(24));

	// 组 265 拷贝 2
	this.instance_14 = new lib.xuancai_mc_000104();
	this.instance_14.setTransform(-73.5,37.3,1,1,0,0,0,73.5,197.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,x:77.4,y:208},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:73.5,y:197.5},5,cjs.Ease.get(1)).wait(69).to({x:-73.5,y:85.5},8,cjs.Ease.get(1)).wait(20));

	// 组 265
	this.instance_15 = new lib.xuancai_mc_000102();
	this.instance_15.setTransform(-97.3,1109.5,1,1,0,0,0,133,313);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,x:138.6,y:774},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:133,y:787},5,cjs.Ease.get(1)).wait(58).to({x:-55,y:1191.1},8,cjs.Ease.get(1)).wait(26));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AGOArQgqgpAAg4QAAg6AqgpQApgpA6AAQA5AAApApQAqApAAA6QAAA4gqApQgpApg5AAQg6AAgpgpg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AggGCQigigAAjiQAAjhCgigQCeifDiAAQDiAACgCfQCgCgAADhQAADiigCgQigCfjiAAQjiAAieifg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AnEKYQkTkTAAmFQAAmEETkTQEUkUGDAAQGGAAETEUQETETAAGEQAAGFkTETQkTEUmGAAQmDAAkUkUg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AtaOnQmEmEAAojQAAoiGEmEQGDmDIiAAQIkAAGDGDQGDGEAAIiQAAIjmDGEQmDGDokAAQoiAAmDmDg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AysStQnwnwAAq9QAAq8HwnwQHwnwK8AAQK9AAHwHwQHwHwAAK8QAAK9nwHwQnwHwq9AAQq8AAnwnwg");
	var mask_2_graphics_5 = new cjs.Graphics().p("A2pWqQpZpYAAtSQAAtRJZpYQJYpZNRAAQNSAAJYJZQJZJYAANRQAANSpZJYQpYJZtSAAQtRAApYpZg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A6fagQq+q/AAvhQAAvgK+q/QK/q+PgAAQPhAAK/K+QK+K/AAPgQAAPhq+K/Qq/K+vhAAQvgAAq/q+g");
	var mask_2_graphics_7 = new cjs.Graphics().p("A+MeNQshshAAxsQAAxrMhshQMhshRrAAQRsAAMhMhQMhMhAARrQAARsshMhQshMhxsAAQxrAAshshg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EghxAhyQt/uAAAzyQAAzxN/uAQOAt/TxAAQTyAAOAN/QN/OAAATxQAATyt/OAQuAN/zyAAQzxAAuAt/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("EglNAlOQvbvbAA1zQAA1yPbvbQPbvbVyAAQVzAAPbPbQPbPbAAVyQAAVzvbPbQvbPb1zAAQ1yAAvbvbg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgohAoiQwzwyAA3wQAA3vQzwyQQywzXvAAQXwAAQyQzQQzQyAAXvQAAXwwzQyQwyQz3wAAQ3vAAwywzg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgrtAruQyHyHAA5nQAA5mSHyHQSHyHZmAAQZnAASHSHQSHSHAAZmQAAZnyHSHQyHSH5nAAQ5mAAyHyHg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EguxAuyQzYzYAA7aQAA7ZTYzYQTYzYbZAAQbaAATYTYQTYTYAAbZQAAbazYTYQzYTY7aAAQ7ZAAzYzYg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgxsAxtQ0m0mAA9HQAA9GUm0mQUm0mdGAAQdHAAUmUmQUmUmAAdGQAAdH0mUmQ0mUm9HAAQ9GAA0m0mg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Eg0fA0gQ1v1wAA+wQAA+vVv1wQVw1vevAAQewAAVwVvQVvVwAAevQAAew1vVwQ1wVv+wAAQ+vAA1w1vg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Eg3JA3KUgW3gW2AAAggUUAAAggTAW3gW2UAW2gW3AgTAAAUAgUAAAAW2AW3UAW3AW2AAAAgTUAAAAgUgW3AW2UgW2AW3ggUAAAUggTAAAgW2gW3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("Eg5sA5tUgX5gX6AAAghzUAAAghyAX5gX6UAX6gX5AhyAAAUAhzAAAAX6AX5UAX5AX6AAAAhyUAAAAhzgX5AX6UgX6AX5ghzAAAUghyAAAgX6gX5g");
	var mask_2_graphics_17 = new cjs.Graphics().p("Eg8GA8HUgY5gY6AAAgjNUAAAgjMAY5gY6UAY6gY5AjMAAAUAjNAAAAY6AY5UAY5AY6AAAAjMUAAAAjNgY5AY6UgY6AY5gjNAAAUgjMAAAgY6gY5g");
	var mask_2_graphics_18 = new cjs.Graphics().p("Eg+XA+YUgZ2gZ1AAAgkjUAAAgkiAZ2gZ1UAZ1gZ2AkiAAAUAkjAAAAZ1AZ2UAZ2AZ1AAAAkiUAAAAkjgZ2AZ1UgZ1AZ2gkjAAAUgkiAAAgZ1gZ2g");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhAgBAhUgavgauAAAglzUAAAglyAavgauUAaugavAlyAAAUAlzAAAAauAavUAavAauAAAAlyUAAAAlzgavAauUgauAavglzAAAUglyAAAgaugavg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhChBCiUgbkgbjAAAgm/UAAAgm+AbkgbjUAbjgbkAm+AAAUAm/AAAAbjAbkUAbkAbjAAAAm+UAAAAm/gbkAbjUgbjAbkgm/AAAUgm+AAAgbjgbkg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhEaBEbUgcWgcWAAAgoFUAAAgoEAcWgcWUAcWgcWAoEAAAUAoFAAAAcWAcWUAcWAcWAAAAoEUAAAAoFgcWAcWUgcWAcWgoFAAAUgoEAAAgcWgcWg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhGKBGLUgdFgdEAAAgpHUAAAgpGAdFgdEUAdEgdFApGAAAUApHAAAAdEAdFUAdFAdEAAAApGUAAAApHgdFAdEUgdEAdFgpHAAAUgpGAAAgdEgdFg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhHyBHzUgdwgdvAAAgqEUAAAgqDAdwgdvUAdvgdwAqDAAAUAqEAAAAdvAdwUAdwAdvAAAAqDUAAAAqEgdwAdvUgdvAdwgqEAAAUgqDAAAgdvgdwg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhJSBJTUgeXgeXAAAgq8UAAAgq7AeXgeXUAeXgeXAq7AAAUAq8AAAAeXAeXUAeXAeXAAAAq7UAAAAq8geXAeXUgeXAeXgq8AAAUgq7AAAgeXgeXg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhKpBKqUge7ge7AAAgrvUAAAgruAe7ge7UAe7ge7AruAAAUArvAAAAe7Ae7UAe7Ae7AAAAruUAAAArvge7Ae7Uge7Ae7grvAAAUgruAAAge7ge7g");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhL4BL5UgfcgfbAAAgseUAAAgsdAfcgfbUAfbgfcAsdAAAUAseAAAAfbAfcUAfcAfbAAAAsdUAAAAsegfcAfbUgfbAfcgseAAAUgsdAAAgfbgfcg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhM/BNAUgf5gf5AAAgtHUAAAgtGAf5gf5UAf5gf5AtGAAAUAtHAAAAf5Af5UAf5Af5AAAAtGUAAAAtHgf5Af5Ugf5Af5gtHAAAUgtGAAAgf5gf5g");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhN9BN+UggTggSAAAgtsUAAAgtrAgTggSUAgSggTAtrAAAUAtsAAAAgSAgTUAgTAgSAAAAtrUAAAAtsggTAgSUggSAgTgtsAAAUgtrAAAggSggTg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EhO0BO1UggpggqAAAguLUAAAguKAgpggqUAgqggpAuKAAAUAuLAAAAgqAgpUAgpAgqAAAAuKUAAAAuLggpAgqUggqAgpguLAAAUguKAAAggqggpg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EhPhBPiUgg9gg8AAAgumUAAAgulAg9gg8UAg8gg9AulAAAUAumAAAAg8Ag9UAg9Ag8AAAAulUAAAAumgg9Ag8Ugg8Ag9gumAAAUgulAAAgg8gg9g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EhQHBQIUghMghMAAAgu8UAAAgu7AhMghMUAhMghMAu7AAAUAu8AAAAhMAhMUAhMAhMAAAAu7UAAAAu8ghMAhMUghMAhMgu8AAAUgu7AAAghMghMg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EhQkBQlUghYghYAAAgvNUAAAgvMAhYghYUAhYghYAvMAAAUAvNAAAAhYAhYUAhYAhYAAAAvMUAAAAvNghYAhYUghYAhYgvNAAAUgvMAAAghYghYg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhQ5BQ6UghgghhAAAgvZUAAAgvYAhgghhUAhhghgAvYAAAUAvZAAAAhhAhgUAhgAhhAAAAvYUAAAAvZghgAhhUghhAhggvZAAAUgvYAAAghhghgg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhRFBRGUghmghmAAAgvgUAAAgvfAhmghmUAhmghmAvfAAAUAvgAAAAhmAhmUAhmAhmAAAAvfUAAAAvgghmAhmUghmAhmgvgAAAUgvfAAAghmghmg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EhRJBRKUghoghnAAAgvjUAAAgviAhoghnUAhnghoAviAAAUAvjAAAAhnAhoUAhoAhnAAAAviUAAAAvjghoAhnUghnAhogvjAAAUgviAAAghnghog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:63.7,y:-19.5}).wait(1).to({graphics:mask_2_graphics_1,x:89.8,y:7.4}).wait(1).to({graphics:mask_2_graphics_2,x:115.2,y:39}).wait(1).to({graphics:mask_2_graphics_3,x:139.8,y:69.6}).wait(1).to({graphics:mask_2_graphics_4,x:157.9,y:99.3}).wait(1).to({graphics:mask_2_graphics_5,x:168.2,y:128}).wait(1).to({graphics:mask_2_graphics_6,x:178.2,y:155.8}).wait(1).to({graphics:mask_2_graphics_7,x:187.8,y:182.7}).wait(1).to({graphics:mask_2_graphics_8,x:197.1,y:208.6}).wait(1).to({graphics:mask_2_graphics_9,x:206,y:233.6}).wait(1).to({graphics:mask_2_graphics_10,x:214.6,y:257.6}).wait(1).to({graphics:mask_2_graphics_11,x:222.9,y:280.7}).wait(1).to({graphics:mask_2_graphics_12,x:230.8,y:302.9}).wait(1).to({graphics:mask_2_graphics_13,x:238.4,y:324.1}).wait(1).to({graphics:mask_2_graphics_14,x:245.7,y:344.3}).wait(1).to({graphics:mask_2_graphics_15,x:252.6,y:363.6}).wait(1).to({graphics:mask_2_graphics_16,x:259.2,y:382}).wait(1).to({graphics:mask_2_graphics_17,x:265.4,y:399.5}).wait(1).to({graphics:mask_2_graphics_18,x:271.3,y:415.9}).wait(1).to({graphics:mask_2_graphics_19,x:276.9,y:431.5}).wait(1).to({graphics:mask_2_graphics_20,x:282.1,y:446.1}).wait(1).to({graphics:mask_2_graphics_21,x:287,y:459.8}).wait(1).to({graphics:mask_2_graphics_22,x:291.6,y:472.5}).wait(1).to({graphics:mask_2_graphics_23,x:295.8,y:484.3}).wait(1).to({graphics:mask_2_graphics_24,x:299.7,y:495.1}).wait(1).to({graphics:mask_2_graphics_25,x:303.2,y:505}).wait(1).to({graphics:mask_2_graphics_26,x:306.4,y:514}).wait(1).to({graphics:mask_2_graphics_27,x:309.3,y:522}).wait(1).to({graphics:mask_2_graphics_28,x:311.8,y:529}).wait(1).to({graphics:mask_2_graphics_29,x:314,y:535.2}).wait(1).to({graphics:mask_2_graphics_30,x:315.9,y:540.3}).wait(1).to({graphics:mask_2_graphics_31,x:317.4,y:544.6}).wait(1).to({graphics:mask_2_graphics_32,x:318.6,y:547.9}).wait(1).to({graphics:mask_2_graphics_33,x:319.4,y:550.2}).wait(1).to({graphics:mask_2_graphics_34,x:319.9,y:551.6}).wait(1).to({graphics:mask_2_graphics_35,x:320.1,y:552.1}).wait(85));

	// 组 264
	this.instance_16 = new lib.xuancai_mc_000098();
	this.instance_16.setTransform(320,550,1,1,0,0,0,320,550);

	this.instance_16.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12,628,996);


(lib.xuancai_mc_000002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1118));

	// topbar
	this.instance = new lib.xuancai_mc_000057();
	this.instance.setTransform(319.5,32.5,1,1,0,0,0,319.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1182));

	// 13
	this.instance_1 = new lib.xuancai_mc_000015("synched",0,false);
	this.instance_1.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1091).to({_off:false},0).wait(91));

	// 12
	this.instance_2 = new lib.xuancai_mc_000014("synched",0,false);
	this.instance_2.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(998).to({_off:false},0).to({_off:true},116).wait(68));

	// 11
	this.instance_3 = new lib.xuancai_mc_000013("synched",0,false);
	this.instance_3.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(905).to({_off:false},0).to({_off:true},116).wait(161));

	// 10
	this.instance_4 = new lib.xuancai_mc_000012("synched",0,false);
	this.instance_4.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(810).to({_off:false},0).to({_off:true},119).wait(253));

	// 9
	this.instance_5 = new lib.xuancai_mc_000011("synched",0,false);
	this.instance_5.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(723).to({_off:false},0).to({_off:true},122).wait(337));

	// 8
	this.instance_6 = new lib.xuancai_mc_000010("synched",0,false);
	this.instance_6.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(638).to({_off:false},0).to({_off:true},114).wait(430));

	// 7
	this.instance_7 = new lib.xuancai_mc_000009("synched",0,false);
	this.instance_7.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(536).to({_off:false},0).to({_off:true},135).wait(511));

	// 6
	this.instance_8 = new lib.xuancai_mc_000008("synched",0,false);
	this.instance_8.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(428).to({_off:false},0).to({_off:true},133).wait(621));

	// 5
	this.instance_9 = new lib.xuancai_mc_000007("synched",0,false);
	this.instance_9.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(352).to({_off:false},0).to({_off:true},94).wait(736));

	// 4
	this.instance_10 = new lib.xuancai_mc_000006("synched",0,false);
	this.instance_10.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(264).to({_off:false},0).to({_off:true},108).wait(810));

	// 3
	this.instance_11 = new lib.xuancai_mc_000005("synched",0,false);
	this.instance_11.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(174).to({_off:false},0).to({_off:true},118).wait(890));

	// 2
	this.instance_12 = new lib.xuancai_mc_000004("synched",0,false);
	this.instance_12.setTransform(320,550,1,1,0,0,0,320,550);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(77).to({_off:false},0).to({_off:true},121).wait(984));

	// 1
	this.instance_13 = new lib.xuancai_mc_000003("synched",0,false);
	this.instance_13.setTransform(320,550,1,1,0,0,0,320,550);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},95).wait(1087));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.1,-138.2,1008.1,1362);


// stage content:



(lib.wap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("bg",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.main = new lib.xuancai_mc_000002();
	this.main.setTransform(320,550,1,1,0,0,0,320,550);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,411.8,1009.1,1362);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;