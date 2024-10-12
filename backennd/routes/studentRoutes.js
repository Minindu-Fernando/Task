const express = require('express')
const { getStudents } = require('../controllers/studentController')

const router = express.Router()
//Get all student list || GET
router.get('/getall', getStudents)
module.exports = router