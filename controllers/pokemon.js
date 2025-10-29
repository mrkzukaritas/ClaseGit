const pokemonController = {}
const axios = require('axios');

pokemonController.getPokemon =  async(req, res) => {
    const POKEMON_API = process.env.POKEMON_API;
    axios.get(`${POKEMON_API}/pokemon`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching comics:', error);
        });

}

module.exports = comicsController;
