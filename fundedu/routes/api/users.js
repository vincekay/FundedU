const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const IncomingForm = require('formidable').IncomingForm
const multer = require('multer');
const path = require("path");
const fs = require('fs');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

//file upload

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
}).single("myImage");

router.post("/upload/:id", (req, res) => {
    upload(req, res, err => {
        var path = req.file.path.substring(7);

        const { id } = req.params;
        const newUpload = { img: {path: path, amount: req.body.amount, description: req.body.description} };

        User.findByIdAndUpdate(id, { $addToSet: newUpload }, { new: true }, (err, user) => {
            if (err) { res.status(500).send({ success: false, error: err }); }
            else if (!user) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
            else { res.status(200).send({ success: true, data: user }); }
        });
    });
});

//get students
router.get("/students", (req, res) => {
    User.find({ userType: 'student' })
        .exec((err, users) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else if (users.length === 0) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
            else { res.status(200).send({ success: true, data: users }); }
        });
});

//get funders
router.get("/funders", (req, res) => {
    User.find({ userType: 'funder' })
        .exec((err, users) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else if (users.length === 0) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
            else { res.status(200).send({ success: true, data: users }); }
        });
});

//get associates by user id
router.get("/getassociate/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .exec((err, user) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else if (!user) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
            else { res.status(200).send({ success: true, data: user }); }
        });
})

//update user's funding array when associate is added
router.put("/associate/:id", (req, res) => {
    const { id } = req.params;
    const newUser = { ...req.body };
    const nId = req.body.funding;
    console.log(nId);

    User.findOne({ _id: nId }).then(user => {
        if (!user) {
            return res.status(404).send({ idNotFound: "Student ID not found" });
        }
        else {
            User.findByIdAndUpdate(id, { $addToSet: newUser }, { new: true }, (err, user) => {
                if (err) { res.status(500).send({ success: false, error: err.message }); }
                else if (!user) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
                else { res.status(200).send({ success: true, data: user }); }
            });
        }
    })
});

//register user
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                userType: req.body.userType,
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                })
            })
        }
    })
})

//login
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
    const userType = req.body.userType;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailNotFound: "Email not found" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // if (userType != user.userType) {
                //     return res.status(404).json({ userTypeNoMatch: "User Type does not match" });
                // }
                const payload = {
                    id: user.id,
                    name: user.name,
                    userType: user.userType,
                    funding: user.funding,
                    img: user.img
                }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: '2d'
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                );
            }
            else {
                return res.status(400).json({ passwordIncorrect: "Password Incorrect" });
            }
        })
    })
})


module.exports = router;