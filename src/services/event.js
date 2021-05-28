import knex from "../db/connection";
import {EVENT} from "../constants/table"

/**
 * Fetch all events
 * 
 * @returns {Array}
 * 
 */
export async function findAll(){
    const event = await knex(EVENT);
    return event;
}

/**
 * Fetch event by Identification
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function findById(id){
    const event = await knex(EVENT).select().where({"event_id": id});
    return event;
}

/**
 * Fetch event by Code
 * 
 * @params {String} code
 * @returns {Array}
 * 
 */
export async function findByCode(code){
    const event = await knex(EVENT).select().where({"event_code": code});
    return event;
}

/**
 * Create event
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function create(data){
    const event = await knex(EVENT).insert(data).returning("*").then(rows => {return rows[0];});
    return event;
}

/**
 * Update event
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function updateById(data, id){
    const event = await knex(EVENT).update(data).where('event_id',id).returning("*").then(rows => {return rows[0];});
    return event;
}

/**
 * Delete event
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function deleteById(id){
    const event = await knex(EVENT).delete().where('event_id',id)
    return event;
}