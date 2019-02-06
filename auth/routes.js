const { toJWT, toData} = require('./jwt')
const { Router } = require('express')

const router = new Router()


router.post('/logins', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).send({
            message: `Please supply a valid email and password`
    })
  }
  else {
    res.send({
      jwt: toJWT({ userId: 1 })
    })
  }
})

module.exports = router