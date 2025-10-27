const comicsController = {}

comicsController.getComics = (req, res) => {
    res.json({ message: 'Get all comics' });
}

module.exports = comicsController;
