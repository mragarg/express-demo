// Bring in the express module
const express = require('express');
const PORT = 3000;
const axios = require('axios');

// Create an express app
// It's roughly equivalent to the result of calling 'http.createServer()'
const app = express();

// Respond to GET requrests for the path "/"
app.get('/', (req, res) => {
    // Note: this is different from the plain `res.end()`
    res.send('Home Page');
});

app.get('/bye', (req, res) => {
    res.send('Bye');
});

app.post('/', (req, res) => {
    res.send('You send a POST');,
});

app.put('/', (req, res) => {
    res.send('You send a PUT');
});

// 1. Identify the variable name that you want to have
// 2. In the string, write that variable name as part of the URL
// 3. Put a colon in fron of the variable name in the path
// 4. It will now be part of req.params
app.put('/users/:userID', (req, res) => {
    console.log(req.params.userID);
    res.send(`You sent me a PUT for ${req.params.userID}`);
});

app.delete('/', (req, res) => {
    res.send('You send a DELETE');
});


// Listen on our PORT
app.listen(PORT, () => {
    console.log(`Your amazing express app is running at port ${PORT}`);
});