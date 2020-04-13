/**
 * Created by GROOT on 2017/3/28.
 */
const path = require('path');
const koaStatic = require('koa-static');
const koaMount = require('koa-mount');

module.exports = function swaggerUi() {
    return koaMount('/api-docs', koaStatic(path.resolve(__dirname, 'static')));
};
