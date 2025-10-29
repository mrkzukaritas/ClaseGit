const pokemonController = require('../controllers/pokemon');
const router = require('express').Router();
router.get('/', pokemonController.getPokemon);
module.exports = router;