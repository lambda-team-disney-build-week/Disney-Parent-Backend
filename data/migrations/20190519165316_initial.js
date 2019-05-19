exports.up = function(knex, Promise) {
  return (
    knex.schema
      // PARENT TABLE
      .createTable("parents", field => {
        field.increments();
        field.text("username", 50).notNullable();
        field.text("password", 50).notNullable();
        field.text("email", 50).notNullable();
        field.string("accountType", 128).notNullable();
      })

      // POSTS TABLE
      .createTable("posts", field => {
        field.increments();
        field.text("content", 500);
        field.integer("children");
        field.text("time_of_day_to_meet", 32);
        field
          .integer("parent_id")
          .unsigned()
          .references("id")
          .inTable("parents")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        field
          .integer("post_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("parents")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        field.timestamps(true, true);
      })
      // COMMENTS TABLE
      .createTable("comments", field => {
        field.increments();
        field
          .integer("post_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("posts")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        field.string("username").notNullable();
        field.text("comment").notNullable();
        field.timestamps(true, true);
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("posts")
    .dropTableIfExists("comments");
};

/*
Pitch: Magic at Your Fingertips- find parents at the park to swap childcare and stroller passes with! Enhance your Disney Experience as parents by connecting with other parents, allowing you to go on all the 'big kid' rides together.

For the MVP Create:

1. An on-boarding process for parents //parent login
2. On-boarding process for a volunteer experienced business owner // employee login
3. Ability to easily create and post a request (including meeting place/ride and time, and number of kids you have) 
4. Ability to easily edit/delete a question
5. Ability for anyone to easily search/find posted requests (filter by time, location place, general search)
6. Ability for a second parent user to log in and respond to the request

Stretch: 
Use a notification API like Twilio (https://www.twilio.com/) or Growl (http://growl.info/) for notifications when your request has been answered, or when new requests are posted. 




*/
