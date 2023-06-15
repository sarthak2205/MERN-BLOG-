const router = require("express").Router()
const Post = require("../model/Post")

//create Posts
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch(error) {
        res.status(500).json(error)
    }
})

//Update Posts
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username == req.body.username){
            try {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {
                        new: true
                    }
                )
                res.status(200).json(updatePost)
            } catch(error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).json("You update only yours posts!")
        }
    } catch(error) {
        res.status(500).json(error)
    }
})


//Delete Posts
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      try {
        if (post.username === req.body.username) {
            try {
              await post.deleteOne()
              res.status(200).json("Post Has been delete!")
            } catch (error) {
              res.status(500).json(error)
            }
          } else {
            res.status(401).json("You can delete only your post!")
          }
      } catch(error){
        res.status(404).json("Post not found.")
      }
      
    } catch (error) {
      res.status(500).json(error)
    }
  })

//Get Post
router.get("/:id", async(req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json("Post not found!")
        }
        
    } catch(error) {
        res.status(404).json(error)
    }
})

//Get all Posts
router.get("/", async(req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    try {
        let posts
        if(username) {
            posts = await Post.find({ username: username })
        } else if(catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch(error) {
        res.status(404).json(error)
    }
})
module.exports = router