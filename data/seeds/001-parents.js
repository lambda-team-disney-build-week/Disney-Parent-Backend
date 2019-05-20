const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
      return knex("parents").insert([
        {
          username: "Alan",
          password: bcrypt.hashSync("password", 8),
          email: "123@gmail.com",
          accountType: "parent"
        },
        {
          username: "John",
          password: bcrypt.hashSync("password", 8),
          email: "terry123@gmail.com",
          accountType: "parent"
        },
        {
          username: "Terry",
          password: bcrypt.hashSync("password", 8),
          email: "john123@gmail.com",
          accountType: "parent"
        },
        {
          username: "Jane",
          password: bcrypt.hashSync("password", 8),
          email: "jane123@gmail.com",
          accountType: "volunteer"
        },
        {
          username: "Bob",
          password: bcrypt.hashSync("password", 8),
          email: "bob123@gmail.com",
          accountType: "volunteer"
        }
      ]);
};
