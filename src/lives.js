import { canvas, ctx } from './canvas';
import { lives_local } from './ball';

export var lives = 3;

export function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Lives: "+lives_local, canvas.width-65, 20);
}