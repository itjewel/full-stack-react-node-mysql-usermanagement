const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

 router.get('/', async (req, res) => {
  const postList = await Posts.findAll();
  res.json(postList)
 });

router.post('/', async (req, res) => {
  const postData = req.body
  await Posts.create(postData)
  res.json(postData)
});
// router.put()
// router.delete()

module.exports = router;