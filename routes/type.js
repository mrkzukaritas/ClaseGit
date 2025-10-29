const typeController = require('../controllers/type');
const router = require('express').Router();
router.get('/', typeController.getType);
module.exports = router;