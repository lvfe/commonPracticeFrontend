'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  io: {
    enable: true,
    package: 'egg-socket.io'
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  // sequelize: {
  //   enable:  true,
  //   package: 'egg-sequelize'
  // }
};
