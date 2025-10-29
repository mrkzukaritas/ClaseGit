const pokemonSpeciesController = {}
const axios = require('axios');

pokemonSpeciesController.getPokemonSpecies = (req, res) => {
    const POKEMON_API = process.env.POKEMON_API;

    axios.get(`${POKEMON_API}/pokemon-species`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching pokemonSpecies:', error);
        });

}

module.exports = pokemonSpeciesController;
