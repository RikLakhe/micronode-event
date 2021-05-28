import {
    Router
} from 'express'
import * as eventController from '../controller/event'

let router = Router();

router.get('/', eventController.findAll)
router.get('/:id', eventController.findById)
router.post('/', eventController.create)
router.put('/:id', eventController.updateById)
router.delete('/:id', eventController.deleteById)

export default router;