const express = require('express');
const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');
const archivedRoute = require('./routes/Archive');
const parser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const initModels = require('./Models/init-models');
const shiftsRoute = require('./routes/shifts')
const dotenv = require('dotenv').config();
const app = express();

app.use(parser.json());
app.use(cors());

// Definisci la connessione al database
const Dbsequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mariadb',
    port: process.env.PORT
});

// Inizializza i modelli
const models = initModels(Dbsequelize);

// Verifica connessione al database
Dbsequelize.authenticate()
    .then(() => {
        console.log('Connessione al database riuscita.');

        return Dbsequelize.sync();
    })
    .then(() => {
        console.log('Modelli sincronizzati con il database.');

        route.get('/api/', (req, res) => {
            res.status(200).send("API working!");
        });

        app.use('/api', userRoute);
        app.use('/api', taskRoute);
        app.use('/api', archivedRoute);
        app.use('/api', shiftsRoute);

        app.listen(process.env.PORT, () => {
            console.log(`Server avviato su ${process.env.HOST}:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Impossibile connettersi al database:', err);
    });

module.exports.models = models;
