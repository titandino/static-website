const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(errors);

app.listen(5001, () => {
    logger.log('Started server.');
});