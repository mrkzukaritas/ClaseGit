const typesController = require('../controllers/types');
const router = require('express').Router();
router.get('/', typesController.getTypes);
module.exports = router;