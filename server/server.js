const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

//END POINT FOR THE API
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});


//GET ALL USERS


//POST NEW USER


//SEARCH FOR A USER





//GET ALL BLOGS


//POST NEW BLOG





app.get('/api/students', cors(), async (req, res) => {
    try{
        const { rows: students } = await db.query('SELECT * FROM students');
        res.send(students);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request


// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});