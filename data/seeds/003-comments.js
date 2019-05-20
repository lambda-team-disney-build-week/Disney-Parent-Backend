exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("comments").insert([
    { post_id: 1, comment: "Hello I can help!", username: "Jane" },
    {
      post_id: 2,
      comment: "I can take care of them while you enjoy yourself",
      username: "Bob"
    },
    {
      post_id: 3,
      comment:
        "We can take turns watching each others children while so we can get on rides",
      username: "Terry"
    }
  ]);
};
