import {EVENT} from './../../constants/table';

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex(EVENT).del();
};