const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const { json } = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchUser')

const JWT_SCERET = "helloAkki@B$y";


//Route 1: create a user useing the post "/api/auth/createuser".  Doesn't require auth/login
router.post('/createuser', [
    body('email', 'enter a valid email').isEmail(), //express
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('password', 'password must be of 5 character').isLength({ min: 8 }),
], async (req, res) => {
    //if errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    // check if user with same email exist or not

    try {
        sucess = false
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ sucess, errors: "user with this email is already exists" });
        }

        //create a new user

        const salt = await bcrypt.genSaltSync(10); // genrtating salt for hashing
        const sPass = await bcrypt.hash(req.body.password, salt); // generating hash and addind salt in it
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: sPass,
        });
        // jwt token cretion 
        const data = {
            user: {
                id: user.id // using id to check the user
            }
        }
        const authToken = jwt.sign(data, JWT_SCERET);
        console.log(authToken);
        // res.json(user)
        sucess = true;
        res.json({ sucess, authToken }); // using the jwt token to verify user

        // catch error
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// Route 2: login a user useing the post "/api/auth/login".  Doesn't require login
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password cannot be blacked').exists(),
], async (req, res) => {
    //if errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); ''
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "invalid Credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        sucess = false

        if (!passwordCompare) {
            return res.status(400).json({ sucess, errors: "invalid Credentials" });
        }
        const data = {
            user: {
                id: user.id // using id to check the user
            }
        }
        const authToken = jwt.sign(data, JWT_SCERET);
        //console.log(authToken);
        // res.json(user)
        sucess = true;
        res.json({ sucess, authToken }); // using the jwt token to verify user
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })


module.exports = router ;