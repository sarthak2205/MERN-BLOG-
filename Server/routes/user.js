const router = require("express").Router()
const User = require("../model/User")
const Post = require("../model/Post")
const bcrypt = require("bcrypt")

//update
router.put("/:id", async (req, res) => {
    if(req.body.userId == req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {
                    new: true, //this just for the postman
                }
            )
            res.status(200).json(updateUser)
        } catch(error) {
            res.status(500).json(error)
        }
    } else {
        res.status(401).json("You can update your account ")
    }
})

//Delete a user
router.delete("/:id", async(req, res) => {
    if(req.body.userId == req.params.id){
        //Delete all posts of user and user account
        try {
            const user = await User.findById(req.params.id)
            try {
                await Post.deleteMany({ username: user.username })

                //only delete user account
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User has been deleted...")
            } catch(error){
                res.status(500).json(error)
            }
        } catch(error) {
            res.status(404).json("User not found")
        }
    } else {
        res.status(401).json("You can delete only your account")
    }
})

//Get User
router.get("/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...other } = user._doc
        res.status(200).json(other)
    } catch(error) {
        res.status(400).json(error)
    }
})

module.exports = router