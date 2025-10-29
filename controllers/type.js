const typeController = {}
const axios = require('axios');

typeController.getTypes = (req, res) => {
    const APIKEY = process.env.APIKEY;
    const TS = process.env.TS;
    const HASH = process.env.HASH;
    const POKEMON_API = process.env.POKEMON_API;

    axios.get(`${POKEMON_API}?ts=${TS}&apikey=${APIKEY}&hash=${HASH}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching types:', error);
        });

}

module.exports = typesController;
