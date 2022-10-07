const express = require('express');
const router = express.Router();
const Player = require('../models/player');



router.post("/addPlayer", (req, res) => {
  const newPlayer = new Player({
    name1: req.body.name,
    score1: req.body.score,
    name2: req.body.name,
    score2: req.body.score
  });

  newPlayer.save().then(document => {
    res.json({ state: true, msg: "data inserted successully", document: document })
      .catch(err => {
        res.send(err);
      });
  });
});




router.get("/getplayer", (req, res) => {
  Player.find().then(document => {
    res.json({ status: 200, message: 'Player data fetched Successfully', Playerdata: document });

  });

});


router.put('/update/:id', (req, res, next) => {
  const newplayer = { _id: req.params.id };
  Player.updateOne(newplayer, {
    name: req.body.name,
    score: req.body.score
  }).then(doc => {
    if (!doc) {
      return res.st(404).end();
    }
    return res.status(200).json(doc);
  })
    .catch(err => next(err));
})
router.delete('/delete/:id', (req, res, next) => {
    Player.deleteOne({ _id: req.params.id }).then(document => {
      res.json({ status: 200, message: 'Players data deleted Successfully', document: document });
    })
      .catch(err => next(err));
  })
  
  
  
  router.get("/:id", (req, res, next) => {
    Player.findById(req.params.id).then(documents => {
      if (documents) {
        res.status(200).json(documents);
      } else {
        res.status(404).json({ message: 'data not found' });
      }
    });
  });
  
  
  
  
  
  module.exports = router;
