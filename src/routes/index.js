import {Router} from 'express'

import eventRoutes from "./eventRoutes";

const publicRouter = Router();

publicRouter.use('/event',eventRoutes);

export default publicRouter;
