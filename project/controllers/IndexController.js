const { URLSearchParams } = require('url');
const Index = require('../modules/Index');

class IndexController {
    constructor() { }
    actionIndex() {
        return async (ctx, next) => {
            // ctx.body = 'Hello homepage2';
            const index = new Index();
            const result = await index.getData();
            ctx.body = ctx.render('index', result);
        }
    }

    actionAdd() {
        return async (ctx, next) => {
            const params = new URLSearchParams();
            params.append('Books[name]', '测试');
            params.append('Books[author]', '数据');
            const index = new Index();
            const result = await index.saveData({ params });
            ctx.body = result;
            // ctx.body = await ctx.render('add', {
            //     data: 'Add: '
            // });
        }
    }
}

module.exports = IndexController;