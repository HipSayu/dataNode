import db from './db';
import home from './home';
import nameNode from './nameNode';

function route(app) {
    app.use('/namenode', nameNode);
    app.use('/', home);
    app.use('/db', db);
}

module.exports = route;
