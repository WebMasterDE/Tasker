const express = require('express');
const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');
const archivedRoute = require('./routes/Archive');
const overtimeRoute = require('./routes/overtime');
const subtaskRoute = require('./routes/subtask');
const Contract_of_employmentRoute = require('./routes/Contract_of_employmentRoute.js')
const parser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const initModels = require('./models/init-models.js');
const shiftsRoute = require('./routes/shifts')
const dotenv = require('dotenv').config();

const app = express();
app.use(parser.json());
app.use(cors());

// Definisci la connessione al database
const Dbsequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mariadb',
    port: process.env.PORT,
    logging: false,
});

const dbDiven = new Sequelize(process.env.DBDIVEN, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mariadb',
    port: process.env.PORT,
    logging: false,
});

// Inizializza i modelli
const models = initModels(Dbsequelize, dbDiven);

// Verifica connessione al database
Dbsequelize.authenticate().then(() => {
    console.log('[TaskerAPI] Connessione al database di tasker riuscita.');

    Dbsequelize.sync().then(() => {
        console.log('[TaskerAPI] Models sincronizzati con il database di tasker.');

        dbDiven.authenticate().then(() => {
            console.log('[TaskerAPI] Connessione al database di diven riuscita.');

            dbDiven.sync().then(() => {
                console.log('[TaskerAPI] Models sincronizzati con il database di diven.');


                app.get('/api/', (req, res) => {
                    res.status(200).send("API working!");
                });

                app.use('/api', userRoute);
                app.use('/api', taskRoute);
                app.use('/api', archivedRoute);
                app.use('/api', shiftsRoute);
                app.use('/api', overtimeRoute)
                app.use('/api', Contract_of_employmentRoute)
                app.use('/api', subtaskRoute)

                app.listen(3000, () => {
                    console.log('\x1b[32m%s\x1b[0m', `[TaskerAPI] Server avviato su ${process.env.HOST}:3000`);
                });

            }).catch((err) => {
                console.error('\x1b[31m%s\x1b[0m', 'Impossibile sincronizzare i models con il database di diven:', err);
            });

        }).catch((err) => {
            console.error('\x1b[31m%s\x1b[0m', 'Impossibile connettersi al database di diven:', err);
        });

    }).catch((err) => {
        console.error('\x1b[31m%s\x1b[0m', 'Impossibile sincronizzare i models con il database di tasker:', err);
    });

}).catch((err) => {
    console.error('\x1b[31m%s\x1b[0m', 'Impossibile connettersi al database di tasker:', err);
});

module.exports.models = models;
