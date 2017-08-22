const Deck = require('../models/deck.js');
const deckController = {};


deckController.index = (req, res) => {
    Deck.findAll()
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
        correct: req.body.correct,
        setTime: req.body.time,
        timesRight: req.body.timesRight,
        timesWrong: req.body.timesWrong,
        deckNumber: req.body.deckNumber,
    })
    .then(card => {
        console.log(`Created ${card} in decks-controller`);

        res.json({
            message: 'Card created!',
            data: card,
        })

        // OR
        // res.redirect('/createcard');

        // HERE, is there anything else necessary to render
        // or redirect without conflicting with react routing after
        // creating the card?
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}

deckController.update = (req, res) => {
    Deck.update({
        user_id: req.body.user_id,
        question: req.body.question,
        answer: req.body.answer,
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

