const express = require('express');
var cors = require('cors')
const app = express();
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/posts")
const authCategory = require("./routes/categories")


const PORT = 8000; //The port on which the backend will run
dotenv.config()

app.use(cors())
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.CONNECT_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))


    const storage = multer.diskStorage({
        destination: (req,file,callb) => {
            callb(null, "images")
        },
        filename: (req,file,callb) => {
            callb(null, req.body.name)
        },
    })
    const upload = multer({ storage: storage })


app.post("/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded")
})


app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)
app.use("/categories", authCategory)

app.listen(PORT, ()=> console.log(`Server working on Port: ${PORT}`))