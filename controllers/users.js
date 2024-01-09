const users = require('../data.js')
const User = require('../models/User.js')
const getUsers = (req, res) => {
  User.find({})
  .then(result => res.status(200).json({result}))
};
const getUser = (req, res) => {
  User.findOne({ _id: req.params.userId })
  .then(result => res.status(200).json({result}))
  .catch(() => res.status(404).json({ message: "User not found" }));
}


/*
const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    email: req.body.email
  }
  users.push(newUser)
  res.status(201).json({message:"User created",newUser})
}
*/
const updatedUser = (req, res) => {
  const idReq = req.params.userId; // Obtén el id directamente
  const index = users.findIndex(user => user.id === Number(idReq));
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const updatedUserNew = {
    id: users[index].id,
    username: req.body.username,
    email: req.body.email
  }
  users[index] = updatedUserNew;
  res.status(200).json({ message: 'User updated', updatedUserNew });
}

const deleteUser = (req, res) => {
  const idReq = req.params.userId; // Obtén el id directamente
  const index = users.findIndex(user => user.id === Number(idReq));
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const deleteUser = users.splice(index, 1)[0];
  res.status(200).json({ message: 'User deleted', deleteUser });
}

module.exports = { getUsers, getUser, createUser, updatedUser, deleteUser }