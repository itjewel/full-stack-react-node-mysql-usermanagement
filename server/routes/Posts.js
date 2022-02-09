const express = require('express')
const router = express.Router()
const { Posts, Likes } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

 router.get('/',validateToken, async (req, res) => {
  const postList = await Posts.findAll({include: [Likes]});
  
  const likedPost = await Likes.findAll({where: {UserId: req.user.id}})
  res.json({postList: postList, likedPost: likedPost})
 });

 router.get("/byId/:id", async (req, res)=> {
   let paramId = req.params.id
    const postData = await Posts.findByPk(paramId);
    res.json(postData);
 })

router.post('/', async (req, res) => {
  const postData = req.body
  await Posts.create(postData)
  res.json(postData)
});
// router.put()
// router.delete()

module.exports = router;