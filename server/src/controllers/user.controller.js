const { User } = require("../db.js");
const bcrypt = require("bcrypt");
const { setToken } = require("../config/tokens.js")

const signup = async (req, res) => {
  const { email } = req.body
  try {
    const findUser = await User.findOne({ where: { email } })
    if (findUser)
      return res.status(400).json("User already exists!!!")

    const createUser =
      await User.create({ ...req.body })
    const token = setToken(createUser.id, createUser.name, email, createUser.role)

    res.json(token)

  } catch (error) {
    return res.status(500).json(error)

  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password);
  try {
    const findUser = await User.findOne({ where: { email } })
    if (!findUser)
      return res.status(404).json("You are not register in our page")

    const validatePassword =
      await bcrypt.compareSync(password, findUser.password)

    if (validatePassword) {
      const token = setToken(findUser.id, findUser.name, email, findUser.role )
      return res.json(token)

    } else
      return res.status(400).json("Process of login failed, try aganin")

  } catch (error) {
    return res.status(500).json(error)

  }
}

const createUserAdmin = async (req, res) => {
  const { email } = req.body.data
  const { role } = req.body.user
  if(!role || role !== "Admin") return res.status(404).json("Procces unauthorized")

  try {
    const findUser = await User.findOne({ where: { email } })
    if (findUser)
      return res.status(400).json("User already exists!!!")

    const createUser = await User.create({ ...req.body.data })

    res.json(createUser)

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

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll()
    return res.json(allUsers)
  } catch (error) {
    return res.status(500).json(error)

  }
}

const updateUser = async (req, res) => {
  const { id } = req.params
  try {
    const updateUser = await User.update({ ...req.body }, { where: { id } })
    return res.json(updateUser)
  } catch (error) {
    return res.status(500).json(error)

  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const deleteUser = await User.destroy({ where: { id } })
    return res.json(deleteUser)
  } catch (error) {
    return res.status(500).json(error)

  }
}

module.exports = {
  signup,
  getAllUsers,
  getUserById,
  login,
  updateUser,
  deleteUser,
  createUserAdmin
};