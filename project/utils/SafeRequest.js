// 为了将来把浏览器端的代码和后台的代码相互替换和拷贝
const fetch = require('node-fetch');
const config = require('../config');

class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(options) {
        // 产生一个完整的链接吗，发起一个promise的结果
        let ydfetch;
        if (options) {
            ydfetch = fetch(this.baseUrl + this.url, {
                method: options.method,
                body: options.params
            });
        }
        else {
            ydfetch = fetch(this.baseUrl + this.url);
        }
        return new Promise((resolve, reject) => {
            let result = {
                code: 0,
                message: '',
                data: 'default data'
            };
            ydfetch
                .then(res => {
                    let _json = {};
                    try {
                        _json = res.json();
                    } catch (error) {
                        // 发邮件，打电话报警
                    }
                    return _json;
                })
                .then(json => {
                    // 产业线上定义了一些 api 的交互形式，增加try catch
                    result.data = json;
                    resolve(result);
                })
                .catch(err => {
                    result.code = 1;
                    result.message = 'node-fetch 和后端通讯异常';
                    reject(result);
                })
        })
    }
}

module.exports = SafeRequest;