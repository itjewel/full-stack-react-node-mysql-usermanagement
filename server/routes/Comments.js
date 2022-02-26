const express = require('express')
const router = express.Router()
const  { Comments } = require('../models')
const { validateToken} = require("../middlewares/AuthMiddleware")
  
   router.get("/:postId", async (req, res)=> {
     let postId = req.params.postId
      const commentData = await Comments.findAll({ where: { PostId: postId }});
      res.json(commentData);
   })

   router.post("/", validateToken, async(req,res) => {
       const componentBody = req.body
       const username = req.user.username
       componentBody.username = username
       await Comments.create(componentBody).then((result) => {
         lastId = result.id;
         sendComponent = {...componentBody, id:lastId}
         res.json(sendComponent)
       })
       
   })
  

   router.delete('/:commentId', validateToken, async (req, res) => {
      const commentId = req.params.commentId;
      await Comments.destroy({ where: {id: commentId}})
      res.json(commentId)
      // console.log(commentId)
   })
 

module.exports = router;