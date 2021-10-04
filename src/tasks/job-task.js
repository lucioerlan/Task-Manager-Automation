import cron from 'node-cron';
import dotenv from 'dotenv';
import ServiceStart from '../facades/job-facade.js';

const { schedule } = cron;
dotenv.config();

export default new class ProcessExecute {
    start() {
        schedule(process.env.SCHEDULE_TIME, () => {
            ServiceStart.execute();
        });
    }
};   // run every 1 minute -> https://crontab.cronhub.io
