/* eslint-disable no-shadow */
/* eslint-disable snakecasejs/snakecasejs */
export enum LoggerLevel {
  debug = "debug",
  warn = "warn",
  info = "info",
  log = "log",
  error = "error",
  silent = "silent",
}

export const LoggerLevelTier = {
  debug: [LoggerLevel.debug],
  warn: [LoggerLevel.debug, LoggerLevel.warn],
  info: [LoggerLevel.debug, LoggerLevel.warn, LoggerLevel.info],
  log: [LoggerLevel.debug, LoggerLevel.warn, LoggerLevel.info, LoggerLevel.log],
  error: [
    LoggerLevel.debug,
    LoggerLevel.warn,
    LoggerLevel.info,
    LoggerLevel.log,
    LoggerLevel.error,
  ],
};
