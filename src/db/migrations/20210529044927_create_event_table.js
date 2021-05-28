import {EVENT} from '../../constants/table';

/**
 * Create table `event`.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
exports.up = function(knex) {
    return knex.schema.createTable(EVENT, table => {
        // table.dropPrimary()

        table.primary('event_id')
        table.string('event_id');
        table.string('event_title').notNullable();
        table.string('event_note').notNullable();
        table.datetime('event_date').notNullable();
        table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
        table.datetime('updated_at');
        table.boolean('active').defaultTo(true);
    });
};

/**
 * Drop `event`.
 *
 * @param {Object} knex
 * @returns {Promise}
 */

exports.down = function(knex) {
    return knex.schema.dropTable(EVENT);
};
