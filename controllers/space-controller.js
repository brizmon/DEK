const Space = require('../models/spacedek.js');
const spaceController = {};






spaceController.create = (req, res) => {
    Space.update({
        question: req.body.question,
        answer: req.body.answer,
    })
    .then(space => {
        console.log(`Created ${space} in space-cont`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}
