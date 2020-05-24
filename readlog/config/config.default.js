/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = '_1590287931505_1886';

  // add your middleware config here
  config.middleware = [
  ];

  config.hometest = {
    serverUrl: 'http://localhost:8080/movies.json',
    pageSize: 1
  };

  config.logger = {
    appLogName: `${appInfo.name}-web.log`,
    coreLogName: 'egg-web.log',
    agentLogName: 'egg-agent.log',
    errorLogName: 'common-error.log',
    outputJSON: true
  };

  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: '3306',
  //   database: 'test',
  //   username: 'root',
  //   password: 'root',
  // };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: false,
    // allowHeaders :'Authorization,DNT,User-Agent,Keep-Alive,Content-Type,accept,origin,X-Requested-With'
  };

  config.io = {
    init: {
      wsEngine: 'ws',
    }, // passed to engine.io
    namespace: {
      "/": {
        connectionMiddleware: [],
        packetMiddleware: []
      },
      '/news': {
        connectionMiddleware: [],
        packetMiddleware: []
      }
    }
  };
  config.security = {
    csrf: false
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
