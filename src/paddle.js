import { canvas, ctx } from './canvas';

export var paddleHeight = 10;
export var paddleWidth = 75;
export var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

export function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

export function updatePaddlePosition() {
	if(rightPressed && paddleX < canvas.width-paddleWidth) {
		paddleX += 7;
	}
	else if(leftPressed && paddleX > 0) {
		paddleX -= 7;
	}
}

export function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if(relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth/2;
	}
}