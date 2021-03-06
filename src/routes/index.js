const express = require('express')
const router = express.Router()
const routerStories = require('./stories')
const routerAuth = require('./auth')
const routerUsers = require('./users')
const routerCategories = require('./categories')
const routerBlogs = require('./blogs')

const routes = [
    router.use('/stories', routerStories),
    router.use('/auth', routerAuth),
    router.use('/users', routerUsers),
    router.use('/categories', routerCategories),
    router.use('/blogs', routerBlogs),
]

module.exports = routes
