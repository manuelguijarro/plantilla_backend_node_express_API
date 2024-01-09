const express = require('express');
const router = express.Router();
//Vamos a utilizar el destructuring para obtener las funciones
//en controllers
const {getUsers, getUser, createUser, updatedUser, deleteUser} = require('../controllers/users.js');

router.get('/', getUsers);

router.get('/:userId', getUser);

router.post('/', createUser);

router.put('/:userId', updatedUser);

router.delete('/:userId', deleteUser);

module.exports = router