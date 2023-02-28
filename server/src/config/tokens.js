const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY || "code-challenge"

const setToken = (id, name, email, role) =>{
  const token = jwt.sign({id, name, email, role},
    SECRET_KEY,
    { expiresIn: 7200 }  // 2 hours
  )
  return token
}

const verifyToken= (token) => {
  try {
    const validate = jwt.verify(token, SECRET_KEY)
    return validate
  } catch (error) {
    return false
  }
}

module.exports = { setToken, verifyToken }