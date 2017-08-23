const Deck = require('../models/deck.js');
const deckController = {};


deckController.index = (req, res) => {
    console.log(req);
    Deck.findAll(req.user.id)
    .then(cards => {
        // console.log(`${card} is in index`);
        res.json(cards);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}

deckController.create = (req, res) => {

    // console.log(req.body)
    Deck.create({
        user_id: req.body.user_id,
        question: req.body.question,
        answer: req.body.answer,
        deckNumber: req.body.deckNumber,
    })
    .then(card => {
        console.log(`Created ${card} in decks-controller`);
        res.json({
            message: 'Card created!',
            data: card,
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}



deckController.findById = (req, res) => {
    Deck.findById(req.params.id)
    .then(card => {
        console.log(card);
        res.json(card);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

deckController.update = (req, res) => {
    Deck.update({
        user_id: req.body.user_id,
        // for edit these two change
        question: req.body.question,
        answer: req.body.answer,
        // for quiz result update, these change
        correct: req.body.correct,
        setTime: req.body.time,
        timesRight: req.body.timesRight,
        timesWrong: req.body.timesWrong,
    }, req.params.id)
    .then(card => {
        console.log(`Updated ${card} in decks-controller`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}



deckController.delete = (req, res) => {
    Deck.delete(req.params.id)
    .then(card => {
        console.log('We deleted ${card}')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}


module.exports = deckController;

