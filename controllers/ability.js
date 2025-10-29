const abilityController = {}
const axios = require('axios');

abilityController.getAbility = async(req, res) => {
    const POKEMON_API = process.env.POKEMON_API;

axios.get(`${POKEMON_API}/ability`)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching abilitys:', error);
    });
}
module.exports=abilityController;