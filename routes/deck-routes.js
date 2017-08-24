const express = require('express');
const deckRoutes = express.Router();
const decksController = require('../controllers/decks-controller.js')


deckRoutes.get('/', decksController.index)
deckRoutes.get('/filtered', decksController.filterByTime)

deckRoutes.post('/', decksController.create)
deckRoutes.get('/:id', decksController.findById)
deckRoutes.put('/:id', decksController.update)
deckRoutes.delete('/:id', decksController.delete)



module.exports = deckRoutes;

