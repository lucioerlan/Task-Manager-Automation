import winston from 'winston';
import chalk from 'chalk';

const { createLogger, format, transports } = winston;
const { combine, timestamp, simple, printf } = format;

/**
 * Gets the logger instance
 * @returns {LoggerInstance} winLogger
 */

const consoleFormat = printf(({ level, message }) => {
    if (level === 'error') return chalk` {red ERROR} ${message}`;
    if (level === 'warn') return chalk` {yellow WARN} ${message}`;
    if (level === 'info') return chalk` {green INFO} ${message}`;
    return chalk`  {cyan ${level}} ${message}`;
});

export default createLogger({
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), simple()),
    transports: [
        new transports.Console({
            colorize: true,
            format: consoleFormat,
        }),
        new transports.File({
            filename: 'ManagerAutomation.log',
            maxSize: '50m',
            maxFiles: '20d',
            eol: '\r\n',
        }),
    ],
});
