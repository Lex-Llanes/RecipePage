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
app.get('/user', async (req, res) => {
    try {
        const allUsers = await db.query('SELECT * FROM users');

        res.json(allUsers.rows)
    } catch (error) {
        console.error(error.message)
    }
})




//POST NEW USER
app.post('/user', async (req, res) => {
    try {
        const { firstName } = req.body;
        const { lastName } = req.body;
        const { userName } = req.body;
        const { userEmail } = req.body;

        const newUser = await db.query (
            'INSERT INTO users(user_first, user_last, user_email, username) VALUES($1, $2, $3, $4) RETURNING *', [firstName, lastName, userEmail, userName])
        res.json(newUser.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//SEARCH FOR A USER
app.get('/users', async (req, res) => {
    try {
        const { userName } = req.query;

        const user = await db.query("SELECT * FROM users WHERE username ILIKE $1", [`%${userName}%`]);

        res.json(user.rows)
    } catch (error) {
        console.error(error.message)
    }
})




//GET ALL BLOGS
app.get('/blog', async (req, res) => {
    try {
        const allBlogs = await db.query('SELECT * FROM recipes');

        res.json(allBlogs.rows);
    } catch (error) {
        console.error(error.message)
    }
})


//POST NEW BLOG
app.post('/blog', async (req, res) => {
    try {
        //{ userName, text, recipe, date, foreignKey }
        const { text } = req.body;
        const { recipe } = req.body;
        const { date } = req.body;
        const { foreignKey} = req.body;

        const newBlogPost = await db.query('INSERT INTO recipes(blog_text, blog_recipe, blog_date, users_id) VALUES($1, $2, $3, $4) RETURNING *', [text, recipe, date, foreignKey])
        res.json(newBlogPost.rows[0])

    } catch (error) {
        console.error(error.message)
    }
})





// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});