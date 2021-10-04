import { Service } from 'node-windows';
import path from 'path';

// Creating a new Service object
const svc = new Service({
    // Service Name
    name: 'My_Job_Nodejs',
    // Description that will appear in Windows Service Management
    description: 'My Nodejs Service',
    // absolute path of your script
    script: path.resolve('src/index.js'),
});
svc.on('uninstall', () => {
    console.log('Uninstall complete.');
});
// Uninstall service.
svc.uninstall();
