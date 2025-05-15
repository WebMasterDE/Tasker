import express, { Request, Response } from 'express';
import userRoute from './routes/user';
import taskRoute from './routes/task';
import archivedRoute from './routes/archive';
import overtimeRoute from './routes/overtime';
import subtaskRoute from './routes/subtask';
import Contract_of_employmentRoute from './routes/contract_of_employment';
import shiftsRoute from './routes/shifts';
import parser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
import dotenv from 'dotenv';
import * as utils from './utils';

const dotEnv = dotenv.config();
if (!utils.isValidDotEnv(dotEnv)) {
    process.exit(-1);
}

const sequelizeTasker = new Sequelize(
    process.env.DB || '',
    process.env.USER || '',
    process.env.PASSWORD || '',
    {
        host: process.env.HOST,
        dialect: 'mariadb',
        port: Number(process.env.PORT) || 3306,
        logging: false,
    }
);

const sequelizeDiven = new Sequelize(
    process.env.DBDIVEN || '',
    process.env.USER || '',
    process.env.PASSWORD || '',
    {
        host: process.env.HOST,
        dialect: 'mariadb',
        port: Number(process.env.PORT) || 3306,
        logging: false,
    }
);

const models = initModels(sequelizeTasker, sequelizeDiven);

const app = express();
app.use(parser.json());
app.use(cors());

// Test di connessione
sequelizeTasker.authenticate()
    .then(() => {
        console.log('[TaskerAPI] Connessione al database di tasker riuscita.');

        return sequelizeTasker.sync();
    })
    .then(() => {
        console.log('[TaskerAPI] Models sincronizzati con il database di tasker.');
        return sequelizeDiven.authenticate();
    })
    .then(() => {
        console.log('[TaskerAPI] Connessione al database di diven riuscita.');
        return sequelizeDiven.sync();
    })
    .then(() => {
        console.log('[TaskerAPI] Models sincronizzati con il database di diven.');

        app.get('/api/', (_req: Request, res: Response) => {
            res.status(200).send('API working!');
        });

        app.use('/api', userRoute);
        app.use('/api', taskRoute);
        app.use('/api', archivedRoute);
        app.use('/api', shiftsRoute);
        app.use('/api', overtimeRoute);
        app.use('/api', Contract_of_employmentRoute);
        app.use('/api', subtaskRoute);

        app.listen(3000, () => {
            console.log('\x1b[32m%s\x1b[0m', `[TaskerAPI] Server avviato sulla porta 3000`);//green
        });
    })
    .catch((err: Error) => {
        console.error('\x1b[31m%s\x1b[0m', 'Errore durante l\'inizializzazione:', err);//red
    });

export { models };//TODO non necessario penso
