const Dek = require('../models/routinedek.js');
const routineController = {};



routineController.create = (req, res) => {
    Dek.create({
        question: req.body.question,
        answer: req.body.answer,
    })
    .then(routine => {
        console.log(`Created ${routine} in routine-cont`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
