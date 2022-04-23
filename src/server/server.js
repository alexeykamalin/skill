import express from 'express';
import ReactDOM from 'react-dom/server';
import {Header} from '../share/header.jsx';
import {indexTemplate} from './indexTemplate';

const app = express();

app.use('/static',express.static('./dist/client'));
app.get('/', (req,res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Header())),
    );
    
});

app.listen(3000, () => {
    console.log('stated on localhsot:3000')
});