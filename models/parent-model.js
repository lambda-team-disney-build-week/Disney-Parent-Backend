const db = require('../data/dbConfig');

module.exports = {
    getParents,
    getBy,
    getById,
    add,
    update,
    remove,
};
function getParents() {
    return db('parents');
}
function getBy(filter) {
    return db('parents').where(filter);
}
function getById(id) {
    return db('parents').where({ id }).first();
}
function add(user) {
    const [id] = db('parents').insert(user);

    return getById(id);
}

function update(id, change) {
    return db('parents').where('id', id).update(change);
}

function remove(id) {
    return db('parents').where('id',id).del();
}