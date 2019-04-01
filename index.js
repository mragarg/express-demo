// Bring in the express module
const express = require('express');
const PORT = 3000;

// Create an express app
// It's roughly equivalent to the result of calling 'http.createServer()'
const app = express();

// Respond to GET requrests for the path "/"
app.get('/', (req, res) => {
    res.send('Hay');
});

// Listen on our PORT
app.listen(PORT, () => {
    console.log(`Your amazing express app is running at port ${PORT}`);
});