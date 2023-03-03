const { Active } = require("../db.js")

const createRecord = async (req, res) => {
  try {
    const newActive = await Active.create({ ...req.body })
    return res.json(await newActive)

  } catch (error) {
    return res.status(500).json(error)

  }
}

const getRecordsByUserId = async (req, res)=>{
  const { id } = req.params
  try {
    const recordsUser = await Active.findAll({ where: { userId: id }})
    return res.json(recordsUser)

  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
}

module.exports = { createRecord, getRecordsByUserId }