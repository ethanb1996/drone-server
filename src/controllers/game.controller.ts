import { Request, Response } from 'express';
import { Coordinate } from '../types/position';

const initGoalPosition = (req: any, res: Response) => { //TODO - fix the type of the req variable
    const position: Coordinate = {
        latitude: getRandomInRange(-180, 180, 3),
        longitude: getRandomInRange(-180, 180, 3),
    }
    
    req.session.goalPosition = position
    
    return res.json(req.session.goalPosition);
};

const checkBallPosition = (req: Request, res: Response): void => {

};

const getRandomInRange = (from:number, to:number, fixed:number):number => {
    const result = (Math.random() * (to - from) + from) as any
    return result.toFixed(fixed) * 1;
}

export { initGoalPosition, checkBallPosition };