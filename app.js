const express = request("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

const users = [
  {
    id: uuidv4(),
    firstName: "Test",
    lastName: "Testovych",
    email: "mail@wail.com",
  },
  {
    id: uuidv4(),
    firstName: "Test2",
    lastName: "Testovych2",
    email: "mail2@wail.com",
  },
];

const createUser = (req, res) => {
  const { body } = req;
  console.log(body);
  users.push({ ...body, id: uuidv4() });
  res.status(201).send(users[users.length - 1]);
};

app.post("/users", createUser);

module.exports = app;
