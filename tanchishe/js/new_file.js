//===============
//游戏参数设置
//===============
//蛇的身长
var t = 3;
//记录蛇的运行轨迹，用数组记录每一个坐标点
var snakeMap = [];
//蛇身单元的大小
var w = 10;
//方向代码：左37 上38 右39 下40
var direction = 39;
//蛇的坐标
var x = 0;
var y = 0;
//画布的宽和高
var width = 400;
var height = 400;
//根据id找到指定的画布
var c = document.getElementById("mycanvas");
//建立2d的coutext对象
var ctx = c.getContext("2d");
//============
//启动游戏
//============
function GameStart() {
	//随机生成贪吃蛇的蛇头坐标
	x = Math.floor(Math.random() * width / w) * w;
	y = Math.floor(Math.random() * height / w) * w;

	//随机生成蛇的前进方向
	direction = 37 + Math.floor(Math.random() * 4);
}
