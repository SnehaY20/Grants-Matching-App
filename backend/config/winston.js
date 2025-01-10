const winston = require("winston");

// Define custom log format
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Create a Winston logger instance
const logger = winston.createLogger({
  level: "info", // Minimum log level
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp
    logFormat // Custom log format
  ),
  transports: [
    // Console transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

module.exports = logger;
