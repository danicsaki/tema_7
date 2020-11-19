export var canvas = document.getElementById("myCanvas");
export var ctx = canvas.getContext("2d");
export var x = canvas.width/2;
export var y = canvas.height-30;
export var dx = 2;
export var dy = -2;

export function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}