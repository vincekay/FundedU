const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));



app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose.Promise = global.Promise;

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

// var publicDir = require('path').join(__dirname, '/public');
// app.use(express.static(publicDir));
app.use(express.static('public'));

const port = 5001;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
