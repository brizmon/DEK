const db = require('../db/config');

const Deck = {};



Deck.findAll = () =>{
    return db.query('SELECT * FROM deck');
}

Deck.create = (deck) =>{
    return db.one(`
        INSERT INTO deck
        (user_id, question, answer, correct, setTime, timesRight, timesWrong)
        VALUES
        ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *
    `, [deck.user_id, deck.question, deck.answer, deck.correct, deck.setTime, deck.timesRight, deck.timesWrong]);
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
        timesWrong = $7
        WHERE id = $8
        RETURNING *
    `, [deck.user_id, deck.question, deck.answer, deck.correct, deck.setTime, deck.timesRight, deck.timesWrong, id]);
}

Deck.delete = (id) => {
    return db.none(`
        DELETE FROM deck
        WHERE id = $1
    `,[id])
}



module.exports = Deck;

