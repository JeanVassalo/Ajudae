const express = require("express");
const cors = require('cors');
const routes=require('./routes');
const app=express();


app.use(cors());
app.use(express.json());
app.use(routes);
//query /users?aluno=Jean

//route /users/:id

//SQL: mysql, sqlite, postgresql, oracle, microsoft sql server
//NoSQL: mongodb, couchdb


app.listen(3333);










