const express = require('express');
const app = express();

app.use(express.static('/var/www/html'));

app.listen(5000, function(){
    console.log('Serving html-folder with .well-known on port 5000');
});
