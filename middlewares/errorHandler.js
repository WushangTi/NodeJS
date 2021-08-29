const errorHandler = {
    error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                // 电话、微信、邮件疯狂给你发消息
                logger.error(err);
                ctx.status = 500;
                ctx.body = '/(ㄒoㄒ)/~~';
            }
            if (404 !== ctx.status) {
                return;
            }
            // 如果项目频繁出现 404，百度会降权，用户就搜索不到了
            ctx.status = 200;
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
        });

    }
}

module.exports = errorHandler;