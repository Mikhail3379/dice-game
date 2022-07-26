const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://127.0.0.1:27017/';
const DATABASE_NAME = 'players';


const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.listen(5000,() => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      throw err;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection('player');
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




