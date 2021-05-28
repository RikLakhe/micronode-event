import {EVENT} from './../../constants/table';
import generateUUID from "../../helper/generateUUID"

/**
 * Insert entries to event table.
 *
 * @param {Object} knex
 *
 * @returns {Promise}
 */
export function seed(knex) {
    return knex(EVENT).insert([
        {
            event_id: generateUUID(),
            event_title: "test event",
            event_note: "Company note test",
            event_date: new Date(),
            created_at: new Date(),
            active: true,
        },
    ])
}