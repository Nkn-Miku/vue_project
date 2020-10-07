module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Category = require('../../models/Category')
  // 新建分类
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  // 获取分类
  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })
  // 获取分类详情根据id
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })
  // 根据id修改分类
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  app.use('/admin/api', router)
}