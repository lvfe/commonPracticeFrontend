const Service = require('egg').Service;

class HomeService extends Service {
    constructor(ctx) {
        super(ctx);
        this.root = 'https://cnodejs.org/api/v1';
    }

    async list(page = 1) {
        const { serverUrl, pageSize } = this.config.hometest;
        let data = await this.ctx.curl(`${serverUrl}`, {
            dataType: 'json'
        });

        return data;
    }

    async create(params) {
        const result = await this.ctx.curl(`${this.root}/topics`, {
            method: 'post',
            data: params,
            dataType: 'json',
            contentType: 'json'
        })
        this.checkSuccess(result);
        return result.data.topic_id;
    }
    // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
    checkSuccess(result) {
        if (result.status !== 200) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
            this.ctx.throw(result.status, errorMsg);
        }
        if (!result.data.success) {
            // 远程调用返回格式错误
            this.ctx.throw(500, 'remote response error', { data: result.data });
        }
    }
}
module.exports = HomeService;