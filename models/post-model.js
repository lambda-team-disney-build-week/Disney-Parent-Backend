const db = require("../data/dbConfig");

module.exports = {
    getPost,
    getById,
    getParentPosts,
    getAllPostComments,
    add,
    update,
    removePost,
    removeParentPost,
    insert
};

function getPost() {
    return db('posts');
}

function getById(id) {
    return db('posts').select('id','title','attraction','children','time').where('id',id);
}

function getParentPosts(parent_id) {
    // return db('posts as p').select(p.id,p.tltle,p.attraction)
    return db('posts').where('parent_id',parent_id);
}
function getAllPostComments(post_id) {
return db('posts').where('post_id',post_id);
}

function add(post) {
    return db('posts').insert(post).then(ids => {
            return getPost(ids[0]);
        });
}

function update(id, changes) {
    return db('posts').where({ id }).update(changes);
}

function removePost(id) {
    return db('posts').where('id', id).del();
}
function removeParentPost(parent_id){
    return db('posts').where('parent_id',parent_id).del()
}

function insert(post) {
    return db("posts")
      .insert(post)
      .then(ids => {
        return getById(ids[0]);
      });
  }