exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("posts").insert([
    {
      parent_id: 1,
      title: "Need Help!",
      attraction: "Space Mountain",
      children: 5,
      time: "May 22, 2019 at  9 AM EST"
    },
    {
      parent_id: 2,
      title: "Help Needed",
      attraction: "The Barnstormer",
      children: 5,
      time: "May 23, 2019 at  10:30 AM EST"
    },
    {
      parent_id: 3,
      title: "Take Turns?",
      attraction: "Seven Dwarfs Mine Train",
      children: 5,
      time: "May 24, 2019 at  11 AM EST"
    }
  ]);
};
