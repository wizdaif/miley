require('dotenv').config();

const Client = require('./structures/Client');

const client = new Client({    
    config: process.env.botOptions
});

client.start();