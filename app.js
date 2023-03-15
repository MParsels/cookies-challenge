const express = require( 'express');
const app = express();
const port = 8080;
const { createReadStream } = require('fs')

app.use(express.json())
// var cookieParser = require('cookie-parser')

const USERS = {
    'user1': 'password1',
    'user2': 'password2'
}
app.get('/', (req, res) => {
    createReadStream('index.html').pipe(res);
  })
  
  // routing for the login page
  app.post('/login', (req, res) => {
  
    const username = req.body.username; // get username from the client form data
    const password = USERS[username]
  
  // only if the passwords are equal
    if (password === req.body.password){
      res.send('Logged in successfully!')
    }
    res.send('Failed to login!') //   else condition
  
  })


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))