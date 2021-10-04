import { tasklist } from 'tasklist';
import JobService from '../services/job-service.js';

/**
 * The JobFacade Class
 *
 * @method execute List Services
 */

export default new class JobFacade {
    async execute() {
        let services = await tasklist({ verbose: true });
    
        services = services.filter(
            (app) => app.imageName === process.env.NAME_SERVICE
        );
    
        return JobService.listServices(services);
    }
};
