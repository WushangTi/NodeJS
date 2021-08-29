/**
 * @fileoverview 实现Index的数据模型
 * @author v-zhiw@microsoft.com
 */
const SafeRequest = require('../utils/SafeRequest');

/**
 * Index类 获取后台图书数据相关的类
 */
class Index {
    /**
     * @constructor
     * @param {string} app KOA2的上下文
     */
    constructor(app) {

    }

    /**
     * 从数据库请求数据
     * @param {*} options 配置项
     * @returns new Promise
     * @example
     * getData(options)
     */
    getData(options) {
        const safeRequest = new SafeRequest('books/index');
        return safeRequest.fetch();
    }

    /**
     * 把用户传过来的数据保存到数据库
     * @param {*} options 配置项
     * @returns new Promise
     * @example
     * saveData(options)
     */
    saveData(options) {
        const safeRequest = new SafeRequest('books/create');
        return safeRequest.fetch({
            method: 'POST',
            params: options.params
        });
    }
}

module.exports = Index;