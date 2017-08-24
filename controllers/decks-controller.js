const Deck = require('../models/deck.js');
const deckController = {};
const moment = require('moment')

deckController.index = (req, res) => {
    // console.log(req);
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
    console.log(req.body)
    console.log(req.params.id);
    Deck.update({
        user_id: req.body.user_id,
        // for edit these two change
        question: req.body.question,
        answer: req.body.answer,
        // for quiz result update, these change
        correct: req.body.correct,
        setTime: req.body.setTime,
        timesRight: req.body.timesRight,
        timesWrong: req.body.timesWrong,
        deckNumber: req.body.deckNumber,
    }, req.params.id)
    .then(card => {
        console.log(`Updated ${card} in decks-controller`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}


deckController.filterByTime = (req, res) => {
    console.log(req)
    Deck.findByTime(req.user.id, moment().format())
    .then(cards => {
        res.json(cards);
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

