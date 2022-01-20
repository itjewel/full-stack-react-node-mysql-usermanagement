const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

 router.get('/', async (req, res) => {
  const postList = await Posts.findAll();
  res.json(postList)
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