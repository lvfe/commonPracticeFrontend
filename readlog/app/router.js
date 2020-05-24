'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/count', controller.count.index);
  io.of('/').route('chat', io.controller.chat.index);
};
