import { Router } from 'express';
import { getMap } from '../controllers/map.controller';

const mapRoutes = Router();

mapRoutes.get('/map', getMap);

export { mapRoutes };