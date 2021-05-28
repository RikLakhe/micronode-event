import * as eventService from "../services/event"

import generateUUID from "../helper/generateUUID"

/**
 * Find all event.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findAll(req, res, next) {
    try {
        const response = await eventService.findAll();

        res.json({
            data: response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * Find event by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function findById(req, res, next) {
    try {
        const response = await eventService.findById(req.params.id);

        res.json({
            data: response
        });
    } catch (err) {
        next(err);
    }
}

/**
 * create event.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function create(req, res, next) {
    try {
        const {
            title,
            note,
            date,
        } = req.body
        if (!date || !title || !note) {
            throw new Error('Missing fields')
        } else {

            const id = generateUUID();
            const createDate = new Date();
            const data = {
                event_id: id,
                event_title: title,
                event_date: date,
                event_note: note,
                created_at: createDate,
                active: true
            }

            const response = await eventService.create(data);

            res.json({
                data: response
            });
        }
    } catch (err) {
        next(err);
    }
}

/**
 * update event by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function updateById(req, res, next) {
    try {
        const {
            title,
            note,
            date,
            active
        } = req.body
        if (!date || !title || !note) {
            throw new Error('Missing fields')
        } else {
            const updateDate = new Date();
            const data = {
                event_title: title,
                event_note: note,
                event_date: date,
                updated_at: updateDate,
                active: active
            }

            const response = await eventService.updateById(data, req.params.id);

            res.json({
                data: response
            });
        }
    } catch (err) {
        next(err);
    }
}



/**
 * delete event by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function deleteById(req, res, next) {
    try {
        const response = await eventService.deleteById(req.params.id);

        res.json({
            data: response
        });
    } catch (err) {
        next(err);
    }
}