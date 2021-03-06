const express = require('express')
const morgan = require('morgan');
var cors = require('cors')
const app = express()

// Port
const port = 5000 || process.env.port

// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Middleware
app.use(morgan('common'));
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


// Test Route
app.get('/', (req,res)=>{
    res.send('Digital Ocean Works');
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
