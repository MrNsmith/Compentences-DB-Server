const { searchBooks } = require('./controller');

require('dotenv').config()

const express = require ('express'),
     massive = require('massive'),
     {SERVER_PORT, CONNECTION_STRING} = process.env,
     controller = require('./controller'),
      app = express();
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db =>{
    app.set('db',db);
    console.log('db Connected');
})
.catch(err=> console.log(err))
     
        
app.use(express.json());

app.get(`/api/search/`, controller.searchBooks)






app.listen(SERVER_PORT, () => console.log(`My Server is Running on ${SERVER_PORT}`));