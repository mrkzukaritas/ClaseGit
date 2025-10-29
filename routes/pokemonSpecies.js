const pokemonSpeciesController = require('../controllers/pokemonSpecies');
const router = require('express').Router();
router.get('/', pokemonSpeciesController.getPokemonSpecies);
module.exports = router;