const abilityController = require('../controllers/ability');
const router = require('express').Router();
router.get('/', abilityController.getAbility);
module.exports = router;