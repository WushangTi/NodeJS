const Koa = require('Koa');
const app = new Koa();
const render = require('koa-swig');
const co = require('co');
const { join } = require('path');
const serve = require('koa-static');
const log4js = require('log4js');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./config');

log4js.configure({
    appenders: {
        cheese: {
            type: 'file', filename: 'logs/yd.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);

app.use(serve(config.staticDir));
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    //   ssr 渲染性能的瓶颈
    cache: 'memory',
    ext: 'html',
    varControls: ['[[', ']]'],
    writeBody: false
}));
require('./controllers')(app);

app.listen(config.port, () => {
    console.log('🍻服务已经开启');
});