const express = require('express');
const cors = require('cors');
const app = express();
const multer = require("multer"); // for uploading a picture
const router = express.Router(); // for uploading a picture
const fs = require("fs");
const { promisify } = require('util');
const pipeline = promisify(require("stream").pipeline);


require('dotenv').config();
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


const upload = multer();
router.post("/api/posts/new", upload.single("picture"), async function(req,res,next){
    console.log("am at the server.js upload image");
    console.log(req.body);
    console.log(req.picture);
    const{picture,body:{name}} = req;

    if(file.detectedFileExtension != ".jpg") next (new Error("Invalid picture type"));
    const pictureName = name + Math.floor(Math.random() * 1000) + picture.detectedFileExtension;
    
    await pipeline(picture.stream , fs.createWriteStream(`${__dirname}/public/images/${pictureName}`))

    res.send("Picture upload as "  + pictureName)
})



require('./server/config/mongoose.config');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/blog.routes')(app);


const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );


