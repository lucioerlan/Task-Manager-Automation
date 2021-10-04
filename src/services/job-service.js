import cmd from 'child_process';
import jobResource from '../resources/job-resource.js';

/**
 * The JobService Class.
 *
 * @method listServices windows task manager services
 * @method bytesToSize bytes to human readable size
 * @method killService kill service task manager
 */

export default new class JobService {
    async listServices(apps) {
        const arr = [];

        for (const { memUsage, pid} of apps) {
            arr.push(this.bytesToSize(memUsage, pid));
        }

        return Promise.all(arr).then((result) => {
            return result;
        });
    }

    async bytesToSize(memUsage, pid) {
        if (memUsage === 0) return '0 Byte';

        const bytes = parseInt(Math.floor(Math.log(memUsage) / Math.log(1024)));
        const sizeInMB = (memUsage / (1024*1024)).toFixed(2);

        return this.killService(sizeInMB, pid, bytes);
    }

    async killService(bytesSize, pid, bytes) {
        if (bytesSize >= parseInt(process.env.MAX_MEMORY_SERVICE)) {
            cmd.spawn('taskkill', ['/pid', pid, '/f', '/t']);

            jobResource('is killed', pid, bytesSize, bytes);
        } else {
            jobResource('not killed', pid, bytesSize, bytes);
        } 
    }
}; 
