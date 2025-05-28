import express, { Request, Response } from 'express';
import userRoute from './routes/user';
import authRoute from './routes/auth';
import hoursRoute from './routes/hours';
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
import * as utils from './utils';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import passport from "passport";
import passportHTTP = require('passport-http');
import bcrypt from 'bcrypt';
import config from './config';


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

export const sequelizeTasker = new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'mariadb',
        port: config.port,
        logging: false,
    }
);

export const sequelizeDiven = new Sequelize(
    config.dbDiven,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'mariadb',
        port: config.port,
        logging: false,
    }
);

const models = initModels(sequelizeTasker, sequelizeDiven);

//------------------------------------------------------------------------------

passport.use(new passportHTTP.BasicStrategy(
    function (mail, password, done) {
        console.log("New login attempt from " + mail);

        models.users.findOne({
            where: { Email: mail }
        }).then((user) => {
            if (!user) {
                return done({ status: 401, message: 'Invalid user' });
            }

            if (user.Password) {
                bcrypt.compare(password, user.Password, function (err, result) {
                    if (result) {
                        return done(null, {
                            id: user.Id_user,
                            mail: user.Email,
                            authLevel: user.Authorization
                        });
                    } else {
                        return done({ status: 401, message: 'Email o password errate.' });
                    }
                });
            } else {
                return done({ status: 401, message: 'Email o password errate.' })
            }
        }).catch((err) => {
            if (err) {
                return done({ status: 500, message: err });
            }
        })
    }
));

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
app.use('/api', authRoute);
app.use('/api', hoursRoute);
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
