const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

let cards = [
    {id: '1', name: 'First Card', status: 'todo', priority: 2},
    {id: '2', name: 'Second Card', status: 'progress', priority: 1}];

app.get('/', (req, res) => {
  res.send('Hello World!!!!');
})

app.get('/cards', (req, res) => {
    res.send(cards);
})

app.delete('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(card => card.id !== cardId);
    res.send(cards);
})

app.post('/cards', (req, res) => {
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card});
    res.send('Card Created');
})

app.patch('/cards/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    const card = req.body;

    cards = cards.map(el => el.id === cardId ? ({ ...card, id: cardId }) : el);
    res.send('Card updated');
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})