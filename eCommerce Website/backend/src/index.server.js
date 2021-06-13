// eCommerce Project using MERN
// Date: 12th June 2021
// Developer: Mr. Shubham Singh

// **********************************************************************************************************************************

const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');


// --------------------------------------------------------------------------------------------------------------

const app = express();

//Environment variable or you can say constant
env.config();
// --------------------------------------------------------------------------------------------------------------


// Mongo DB Connection
// mongodb+srv://root:<password>@cluster0.e43ab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.e43ab.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('Database connection successful');
    });

// --------------------------------------------------------------------------------------------------------------

// The bodyParser() constructor has been deprecated,
// app.use(bodyParser()); //Now deprecated
// ------------------------------------

// For Express version less than 4.16.0 use:

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// ------------------------------------

// For Express version greater than 4.16.0 use below code:
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// The extended config object key now needs to be explicitly passed, since it now has no default value.
// --------------------------------------------------------------------------------------------------------------

// //Get Request
// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Hello from server'
//     });
// });


app.use('/api', authRoutes);
app.use('/api', adminRoutes);


// --------------------------------------------------------------------------------------------------------------

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// --------------------------------------------------------------The End --------------------------------------------------------------