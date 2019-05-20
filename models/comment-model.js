const db = require("../data/dbConfig");

module.exports = {
    getComment,
    getById,
    add,
    update,
    remove,
}

function getComment() {
    return db('comments');
}

function getById(id) {
    return db('comments').where({ id }).first();
}

function add(comment) {
    return db('comments').insert(comment).then(ids => {
        return getById(ids[0]);
    });
}
function update(id, changes) {
    return db("comments").where({ id }).update(changes);
  }
  
  function remove(id) {
    return db("coments").where("id", id).del();
  }