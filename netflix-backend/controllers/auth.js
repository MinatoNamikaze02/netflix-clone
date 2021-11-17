const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { hashPassword, comparePassword } = require('../helpers/auth')

//register
exports.register = async (req, res) => {
  console.log('REGISTER ENDPOINT =>', req.body)
  if (!req.body) return res.status(400).send('Please fill out the details')
  const { email, password } = req.body
  if (!email) return res.status(400).send('Email is required')
  if (!password || password.length < 6 || password.length > 60)
    return res
      .status(400)
      .send('Password is required and must be between 6-60 characters')
  const existingUser = await User.findOne({email})
  if(existingUser) return res.status(400).send('Email is already registered, continue to Sign In to procees')

  //hash pass
  const hashedPassword = await hashPassword(password)

  const user = new User({email, password: hashedPassword})
  try{
    await user.save()
    console.log('REGISTERED USER => ', user)
    console.log('registed successfully')
    return res.status(201).json({ok: true})
  }catch(err){
    console.log('REGISTER FAILED =>', err)
    return res.status(400).send('Error, try again!')
  }

}

//login
exports.login = async (req, res) => {
  console.log("Login endpoint => ", req.body)
  try {
    //authenticate
    const { emailAddress, password } = req.body
    if (!emailAddress || !password) {
      return res.status(400).send('Please fill out all the details')
    }
    const user = await User.findOne({ emailAddress })
    console.log('User  => ', user)
    if (!user) {
      return res.status(400).send('User does not exist')
    }
    const match = await comparePassword(password, user.password)
    console.log(password, user.password)
    
    if (!match) {
      return res.status(400).send('Incorrect Password')
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: '7d',
      }
    )

    user.password = undefined
    return res.status(200).json({
      token,
      user,
    })
  } catch (error) {
    console.log('Login Failed =>', error)
    res.status(400).send('Error, try again')
  }
}
