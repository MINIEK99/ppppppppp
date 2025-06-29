const express = require('express');
const path = require('path');
const data = require('./data.json');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

// Poprawki API z opisami filmów
app.get('/api/events', (req, res) => {
  res.json(data.events.map(event => ({
    category: event.category,
    title: event.title,
    date: event.date,
    description: event.description || 'Brak opisu.',
    trailer: event.trailer
  })));
});

app.get('/api/premieres', (req, res) => {
  res.json(data.premieres.map(premiere => ({
    title: premiere.title,
    date: premiere.date,
    description: premiere.description || 'Brak opisu.',
    trailer: premiere.trailer
  })));
});

app.get('/api/repertoire', (req, res) => {
  res.json(data.repertoire.map(movie => ({
    title: movie.title,
    version: movie.version,
    description: movie.description || 'Brak opisu.',
    trailer: movie.trailer
  })));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
