const db = require('../db/config');

const Deck = {};



Deck.findByUserName = user_id =>{
    return db.one(`
        SELECT * FROM deck
        WHERE user_id = $1
    `,[user_id]);
}



Deck.create = deck =>{
    return db.one(`
        INSERT INTO deck
        (user_id, question, answer, correct, setTime, timesRight, timesWrong)
        VALUES
        ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *
    `, [deck.user_id, deck.question, deck.answer, deck.correct, deck.setTime, deck.timesRight, deck.timesWrong]);
};



module.exports = Deck;

