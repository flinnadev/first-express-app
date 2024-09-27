const { v4: uuidv4 } = require("uuid");

// ! move to models
const users = [
  {
    id: uuidv4(),
    firstName: "Test",
    lastName: "Testovych",
    email: "mail@wail.com",
  },
  {
    id: 111111,
    firstName: "Test2",
    lastName: "Testovych2",
    email: "mail2@wail.com",
  },
];

// CRUD
module.exports.createUser = (req, res) => {
  const { body } = req;
  users.push({ ...body, id: uuidv4() });
  res.status(201).send(users[users.length - 1]);
};

module.exports.getUsers = (req, res) => {
  res.status(200).send(users);
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((u) => u.id === id);

  if (!foundUser) {
    return res.status(404).send("User Not Found");
  }

  res.status(200).send(foundUser);
};

module.exports.updateUserById = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const foundUserIndex = users.findIndex((u) => u.id === id);

  if (foundUserIndex === -1) {
    return res.status(404).send("User Not Found");
  }

  users[foundUserIndex] = { ...users[foundUserIndex], ...body };
  res.status(200).send(users[foundUserIndex]);
};

module.exports.deleteUserById = (req, res) => {
  const { id } = req.params;

  const foundUserIndex = users.findIndex((u) => u.id === id);

  if (foundUserIndex === -1) {
    return res.status(404).send("User Not Found");
  }

  users.splice(foundUserIndex, 1);
  res.status(204).send();
};
