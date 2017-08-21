const db = require('../db/config');

const Space = {};

// The space deck will be available storage for all the cards
// the user got right. It is governed by functionality that holds
// the cards and merges the cards once the time has come

Space.findByUserName = question =>{
    return db.one(`
        SELECT * FROM spacedek
        WHERE question = $1
    `,[question]);
}



Space.create = (space) =>{
    return db.one(`
        UPDATE spacedek SET
        (question, answer)
        VALUES
        ($1,$2)
        RETURNING *
    `, [space.question, space.answer]);
};

Pizza.destroy = (id) => {
  return db.none(`
    DELETE FROM movies
    WHERE id = $1
  `, [id]);
}


module.exports = Space;
