const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors')

const workouts = require('./routes/api/workouts')

const app = express();

app.use(cors())

app.use(bodyParser.json())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

// DB Config
const db = require('./config/keys').mongoURI

// connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("mongo db connected"))
    .catch(err => console.log(err))


app.use('/api/workouts', workouts)

const PORT = process.env.PORT || 5005

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
