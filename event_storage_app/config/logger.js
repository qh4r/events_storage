import winston from 'winston';

const customColors = {
  trace: 'white',
  debug: 'blue',
  info: 'green',
  warn: 'yellow',
  crit: 'red',
  error: 'red',
};

const config = {
  colors: customColors,

  levels: {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    crit: 4,
    error: 5,
  },
  transports: [
  ],
};

config.transports.push(
  new (winston.transports.Console)({
    name: 'consoleLogger',
    level: 'error',
    colorize: true,
    timestamp: true,
  })
);

const logger = new (winston.Logger)(config);
winston.addColors(customColors);

export {
  logger,
};
