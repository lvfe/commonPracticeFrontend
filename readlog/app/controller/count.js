'use strict';
var fs = require("fs");
const Controller = require('egg').Controller;

class CountController extends Controller {
    async index() {
        const { ctx } = this;
        // return result;
        ctx.logger.debug('debug.info');
        let result = await new Promise(function(res, rej){
            fs.readFile("./data.json", 'utf-8', function (error, fileData) {
                if (error) {
                    console.log(error);
                    rej(error)
                }
                fileData = fileData.replace(/}{/g, '},{');
                fileData = '[' + fileData + ']';

                res(JSON.parse(fileData));
            });
        })
        console.log(11111, result);
        ctx.body = {
            data: result,
            code: 200
        }
    }
}
module.exports = CountController;