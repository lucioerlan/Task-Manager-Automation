import { Service } from 'node-windows';
import path from 'path';

// Creating a New Service Object
const svc = new Service({
    // Nome do servico
    name: 'My_Job_Nodejs',
    // Description that will appear in Windows Service Management
    description: 'My Nodejs Service',
    // absolute path of your script
    script: path.resolve('src/index.js'),
});
svc.on('install', () => {
    console.log('install complete.');
});
// Installing the service
svc.install();
