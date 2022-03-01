// general imports
import express from 'express';

const port = 1337;

const app = express();

app.get('/', (_, res) => {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
