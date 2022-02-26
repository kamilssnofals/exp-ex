const express = require('express');
const app = express();


const cats = [
  { id: "1", catName: "Barsik" },
  { id: "2", catName: "Tsivi" },
  { id: "3", catName: "Luna" },
  { id: "4", catName: "Milo" },
  { id: "5", catName: "Oliver" },
  { id: "6", catName: "Charlie" },
  { id: "7", catName: "Zenix" },
  { id: "8", catName: "Tilexs" },
];






app.get('/cats', function (req, res) {
  if(!req.query.count && !req.query.offset){
    res.send(cats);
  } else {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send({ cats: cats.slice(offset, offset + count), count: cats.length });}
});


app.listen(3011, function() {})