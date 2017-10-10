import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import Debug from 'debug';
import devOptions from './controllers/config/devOptions';

const debug = Debug('server:app');
const port = (process.env.PORT || 5000);
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/dist', express.static('dist'));

devOptions(app);

// ROUTES


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, () => {
    debug('Server listen on port = ', port, 'ENV = ', process.env.NODE_ENV);
});