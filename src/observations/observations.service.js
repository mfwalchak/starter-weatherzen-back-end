const knex = require("../db/connection");

function create(newObservation) {
    return knex("observations")
        .insert(newObservation)
        .returning("*")
}

function put(editObservation){
    return knex("observations")
        .update(editObservation)
        .where({"observation_id": editObservation.observation_id})
        .returning("*")
}

async function list() {
    return knex("observations")
        .select("*");
}

module.exports = {
    create,
    put,
    list,
};