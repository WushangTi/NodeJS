const _ = require('lodash');
const { join } = require('path');

let config = {
    viewDir: join(__dirname, '..', 'views'),
    staticDir: join(__dirname, '..', 'assets'),
}

if (process.env.NODE_ENV === 'development') {
    const devConfig = {
        port: 3000,
        baseUrl: 'http://127.0.0.1/basic/web/index.php?r='
    };
    config = _.extend(config, devConfig);
}

if (process.env.NODE_ENV === 'production') {
    const prodConfig = {
        port: 8000,
        baseUrl: 'http://www.zm.com/basic/web/index.php?r='
    };
    config = _.extend(config, prodConfig);
}

module.exports = config;