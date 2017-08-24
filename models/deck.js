const db = require('../db/config');

const Deck = {};



Deck.findAll = (user_id) =>{
    return db.query(`
        SELECT * FROM deck
        WHERE user_id = $1
    `,[user_id]);
}

Deck.findById = id => {
    return db.query(`
        SELECT * FROM deck
        WHERE id = $1
    `, [id])
}



Deck.create = (deck) =>{
    return db.one(`
        INSERT INTO deck
        (user_id, question, answer, correct, setTime, timesRight, timesWrong, deckNumber)
        VALUES
        ($1,$2,$3,FALSE,'',0,0,$4)
        RETURNING *
    `, [deck.user_id, deck.question, deck.answer, deck.deckNumber]);
}

Deck.update = (deck, id) => {
    return db.one(`
        UPDATE deck SET
        user_id = $1,
        question = $2,
        answer = $3,
        correct = $4,
        setTime = $5,
        timesRight = $6,
        timesWrong = $7,
        deckNumber = $9
        WHERE id = $8
        RETURNING *
    `, [deck.user_id, deck.question, deck.answer, deck.correct, deck.setTime, deck.timesRight, deck.timesWrong, parseInt(id), deck.deckNumber]);
}


Deck.findByTime = (user_id, moment) => {
    return db.query(`
        SELECT * FROM deck
        WHERE user_id=$1
        AND setTime < $2
    `, [user_id, moment])
}

Deck.delete = (id) => {
    return db.none(`
        DELETE FROM deck
        WHERE id = $1
    `,[id])
}



module.exports = Deck;

