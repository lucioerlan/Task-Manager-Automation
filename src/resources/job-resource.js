import chalk from 'chalk';
import logger from '../utils/logger.js';

export default (value, pid, bytesSize, bytes) => {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (value.includes('is killed')) {
        logger.warn(
            `📕 pid: ${pid} is killed memory exceeded: ${chalk.bgRed(
                bytesSize,
                sizes[bytes]
            )}`
        );
    } else {
        logger.info(
            `📗 pid: ${pid} is not killed memory not exceeded: ${chalk.bgGreen(
                bytesSize,
                sizes[bytes]
            )}`
        );
    }
};
