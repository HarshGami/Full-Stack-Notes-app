const express = require('express');
const {addNote} = require('../controllers/notesController')
const router = express.Router();

router.route('/note/add').post(addNote);

module.exports = router;