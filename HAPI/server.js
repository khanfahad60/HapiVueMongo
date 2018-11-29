'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'fahad_test'
  });

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

connection.connect();

const handler = (request, h) => {
    return(request.params)
}

const handlerEtna = (request, h) => {
    return(request.payload)
}

const handler2 = async (request, h) => {
    connection.query('SELECT login FROM login', {
        function (error, results, fields) {
            if (error) throw error;
            return(results);
        }
    })
}

server.route({
    method: 'GET',
    path: '/etna',
    handler: handler2
});

server.route({
    method: ['POST', 'PUT'],
    path: '/etna/{etnaMessage?}',
    config: {
        payload: {
            parse: true
        },
        validate: {
            payload: Joi.object({
                user: Joi.number().min(2),
                test: Joi.bool()
            })
        }
    },
    handler: handlerEtna
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();