import express from 'express';
import bodyParser from 'body-parser';

// FAKE DATABASE
const articlesInfo = {
    'hebrew1': {
        upvotes: 0,
    },

    'hebrew2': {
        upvotes: 0,
    },
    'hebrew3': {
        upvotes: 0,
    },
}



const app = express();
const PORT = 8000;
// app.get('/hello', (req, res) => res.send('Hello!'));

// app.listen(8000, () => console.log('Listening on port 8000'));

app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes.`);
});

app.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
);