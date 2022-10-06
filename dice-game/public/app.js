const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'players';
const mongoose = require('mongoose');
const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var db, collection;
app.use(Express.static('public'))
app.use(Express.static('files'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'public/index.html');
});
// app.set('view engine', 'ejs');





app.listen(5000,() => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      throw err;
    }
    db = client.db(DATABASE_NAME);
    collection = db.collection('player');
    console.log('Connected to `' + DATABASE_NAME + '`!');
  }
  );
}
);

app.post('/player', (req, res) => {
  collection.insert(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    response.send(result.result);
  }
  );
}
);

// app.use(express.static("public"));
// mongoose.connect('mongodb://localhost/dice-game', {useNewUrlParser: true});

const diceSchema = new mongoose.Schema({
    name: String,
    score: Number
});
 
// app.get("/", function(req, res) {
//     res.render("index");
// });

// app.post("/player", function(req, res) {
//     const dice = new Dice({
//         name: req.body.name,
//         score: req.body.score
//     });
//     dice.save();
//     res.redirect("/player");
// });












// app.post('/player', (req, res) => {
//   collection.insert(req.body, (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: err });
//     }
//     response.send(result.result);
//   }
//   );
// }
// );


app.listen(8000, function () {
    console.log('Listening to Port 8000');
  });

// app.listen(5000,() => {
//     MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//       if (err) {
//         throw err;
//       }
//       database = client.db(DATABASE_NAME);
//       collection = database.collection('player');
//       console.log('Connected to `' + DATABASE_NAME + '`!');
//     }
//     );
//   }
//   );
