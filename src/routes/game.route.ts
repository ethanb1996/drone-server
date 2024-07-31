import { Router } from 'express';
import { initGoalPosition, checkBallPosition } from '../controllers/game.controller';

const gameRoutes = Router();

gameRoutes.get('/initGoalPosiion', initGoalPosition);
gameRoutes.post('/checkBallPosition', checkBallPosition);

export { gameRoutes };