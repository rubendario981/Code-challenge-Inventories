const { User } = require("../db.js");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body
  try {
    const findUser = await User.findOne({ where: { email } })
    if (findUser) return res.status(400).json("User already exists!!!")

    const createUser = await User.create({ ...req.body })

    res.json(createUser)

  } catch (error) {
    return res.status(500).json(error)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll()
    return res.json(allUsers)
  } catch (error) {
    return res.status(500).json(error)

  }
}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const findUser = await User.findByPk(id)
    res.json(findUser)
  } catch (error) {
    return res.status(500).json(error)

  }
}
const updateUser = async (req, res) => {
  const { id } = req.params
  try {
    const updateUser = await User.update({ ...req.body }, { where: {id}})
    return res.json(updateUser)
  } catch (error) {
    return res.status(500).json(error)

  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const deleteUser = await User.destroy({ where: {id}})
    return res.json(deleteUser)
  } catch (error) {
    return res.status(500).json(error)

  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};