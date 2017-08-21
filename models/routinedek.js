const db = require('../db/config');

const Dek = {};



Dek.findByUserName = question =>{
    return db.one(`
        SELECT * FROM routinedek
        WHERE question = $1
    `,[question]);
}



Dek.create = dek =>{
    return db.one(`
        INSERT INTO routinedek
        (question, answer)
        VALUES
        ($1,$2)
        RETURNING *
    `, [dek.question, dek.answer]);
};



module.exports = Dek;
