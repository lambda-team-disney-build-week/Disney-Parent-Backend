exports.up = function(knex, Promise) {
  return (
    knex.schema
      // PARENT TABLE
      .createTable("parents", parents => {
        parents.increments();
        parents.string("username", 128).notNullable();
        parents.string("password", 128).notNullable();
        parents.string("email", 128).notNullable();
        parents.string("accountType", 128).notNullable();
      })

      // VOLUNTEER TABLE


      // POSTS TABLE
      .createTable("posts", posts => {
        posts.increments();
        posts
        .integer("parent_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parents")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        posts.string("title", 128).notNullable();
        posts.string("attraction",128).notNullable();
        posts.integer("children").notNullable();
        posts.string("time", 128).notNullable();
          posts.timestamps(true, true);
        // posts
        //   .integer("post_id")
        //   .unsigned()
        //   .notNullable()
        //   .references("id")
        //   .inTable("parents")
        //   .onDelete("CASCADE")
        //   .onUpdate("CASCADE");
        // posts.timestamps(true, true);
      })
      // COMMENTS TABLE
      .createTable("comments", comments => {
        comments.increments();
        comments.string("username").notNullable();
        comments.text("comment").notNullable();
        comments
          .integer("post_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("posts")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        comments.timestamps(true, true);
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("parents")
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
