const compression = require('compression');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let helmet = require('helmet');
let app = express();

let http = require('http').Server(app);

const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('.'));

app.set('json spaces', 4);

app.use(compression());

http.listen(port, function () {
    console.log('Listening on port ' + port);
});