import logger from './utils/logger.js';
import ProcessExecute from './tasks/job-task.js';

class Application {
    static async start() {
        try {
            logger.info('Application in execution');

            ProcessExecute.start();
        } catch (err) {
            logger.error(err);
        }
    }
}

Application.start();
