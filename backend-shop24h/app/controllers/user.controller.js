const mongoose = require('mongoose');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create User
const createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    isAdmin,
    address,
    city,
    country } = req.body;

  if (!name) {
    return res.status(400).json('Name is required');
  }
  if (!email) {
    return res.status(400).json('Email is required');
  }
  if (!password) {
    return res.status(400).json('Password is required');
  }
  if (!phone) {
    return res.status(400).json('Phone is required');
  }

  const newUser = {
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    phone,
    isAdmin,
    address,
    city,
    country
  }

  try {
    const user = await userModel.create(newUser);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Get all User
const getAllUser = async (req, res) => {
  try {
    const userList = await userModel.find().select('-password');

    return res.status(200).json(userList);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Get User by ID
const getUserById = async (req, res) => {
  const userId = req.params.userId;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json('User ID is not valid')
  }

  try {
    const user = await userModel.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json('User ID is not found')
    }

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Update User by ID
const updateUserById = async (req, res) => {
  const userId = req.params.userId;
  const {
    name,
    email,
    password,
    phone,
    isAdmin,
    address,
    city,
    country } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json('User ID is not valid')
  }
  if (!name) {
    return res.status(400).json('Name is required');
  }
  if (!email) {
    return res.status(400).json('Email is required');
  }
  if (!phone) {
    return res.status(400).json('Phone is required');
  }

  try {
    const userExist = await userModel.findById(userId);
    let newPassword;
    if (password) {
      newPassword = bcrypt.hashSync(password, 10);
    } else {
      newPassword = userExist.password;
    }

    const newUser = {
      name,
      email,
      password: newPassword,
      phone,
      isAdmin,
      address,
      city,
      country
    }

    const user = await userModel.findByIdAndUpdate(
      userId,
      newUser,
      { new: true }
    )

    if (!user) {
      return res.status(400).json('User cannot be created!')
    }

    return res.status(200).json(user)

  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }

}

// Delete User by ID
const deleteUserById = async (req, res) => {
  const userId = req.params.userId;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json('User ID is not valid')
  }

  try {
    const user = await userModel.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json('User ID is not found');
    }

    return res.status(200).json('Delete Successfully');
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }
}

// Update Password User by ID
const updatePasswordUserById = async (req, res) => {
  const userId = req.params.userId;
  const {
    oldPassword,
    newPassword
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json('User ID is not valid')
  }

  try {
    const userExist = await userModel.findById(userId);
    let password;

    if (bcrypt.compareSync(oldPassword, userExist.password)) {
      password = bcrypt.hashSync(newPassword, 10);

    } else {

      return res.status(400).json('Your old password is wrong');
    }

    const newUserPassword = {
      password,
    }

    const user = await userModel.findByIdAndUpdate(
      userId,
      newUserPassword,
      { new: true }
    )

    if (!user) {
      return res.status(400).json('User cannot be change password!')
    }

    return res.status(200).json(user)


  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error
    })
  }

}
module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  updatePasswordUserById
}