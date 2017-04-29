/**
 * Created by Falcon on 28.04.2017.
 */
var express = require('express');
var app = express();
var colors = require('colors');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), function() {
    console.log(colors.green('Server started: http://localhost:' + app.get('port') + '/'));
});