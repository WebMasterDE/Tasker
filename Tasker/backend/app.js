const express = require('express');
const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');
const archivedRoute = require('./routes/Archive');
const parser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const initModels = require('./Models/init-models');

const app = express();

app.use(parser.json());
app.use(cors());

// Definisci la connessione al database
const Dbsequelize = new Sequelize('taskerdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
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

        app.use('/api', userRoute);
        app.use('/api', taskRoute);
        app.use('/api', archivedRoute);

        const port = 3000;
        app.listen(port, () => {
            console.log(`Server avviato su http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Impossibile connettersi al database:', err);
    });

module.exports.models = models;
