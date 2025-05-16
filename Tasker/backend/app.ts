import express, { Request, Response } from 'express';
import userRoute from './routes/user';
import taskRoute from './routes/task';
import archivedRoute from './routes/archive';
import overtimeRoute from './routes/overtime';
import subtaskRoute from './routes/subtask';
import contract_of_employmentRoute from './routes/contract_of_employment';
import shiftsRoute from './routes/shifts';
import parser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import { initModels } from './models/init-models';
import dotenv from 'dotenv';
import * as utils from './utils';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';



//------------------------------------------------------------------------------

const dotEnv = dotenv.config();
if (!utils.isValidDotEnv(dotEnv)) {
    process.exit(-1);
}

//------------------------------------------------------------------------------

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            version: "1.0.0",
            title: "API Documentation",
            description: "API Information",
            contact: {
                name: "Divisione energia",
                email: "davide.tonetto2001@gmail.com"
            },
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            securitySchemes: {
                Bearer: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: "Enter the Bearer Authorization string",
                }
            }
        },
        security: [
            {
                Bearer: []
            }
        ]
    },
    apis: ["./routes/*.ts"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------

// setup express app
const app = express();
app.use(parser.json());
app.use(cors());

// custom debugging middleware that run for every request
app.use(utils.requestHandler);

// swagger endpoint for API documentation
//TODO commentare prima della pubblicazione
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// test route
app.route('/api/').get((req: Request, res: Response) => {
    res.status(200).send('API working!');
});

// routes
app.use('/api', userRoute);
app.use('/api', taskRoute);
app.use('/api', archivedRoute);
app.use('/api', shiftsRoute);
app.use('/api', overtimeRoute);
app.use('/api', contract_of_employmentRoute);
app.use('/api', subtaskRoute);

// error handling middleware
app.use(utils.errorHandler);

// middleware will report if the requested endpoint is not matched by any route
app.use(utils.invalidEndpointHandler);

//------------------------------------------------------------------------------

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

        app.listen(3000, () => {
            console.log('\x1b[32m%s\x1b[0m', `[TaskerAPI] Server avviato sulla porta 3000`);//green
        });
    })
    .catch((err: Error) => {
        console.error('\x1b[31m%s\x1b[0m', 'Errore durante l\'inizializzazione:', err);//red
    });

//------------------------------------------------------------------------------

// export { models };//TODO non necessario penso
