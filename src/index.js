import './index.css'
import { clearCanvas } from  './canvas';
import { drawBall, updateBallPosition } from './ball';
import { drawPaddle, mouseMoveHandler, updatePaddlePosition } from './paddle';
import { drawLives } from './lives';
import { drawBricks, collisionDetection } from './bricks';
import { drawScore } from './score';

document.addEventListener("mousemove", mouseMoveHandler, false);

function draw() {
	clearCanvas();
	
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();
	
	requestAnimationFrame(draw);
}

draw();