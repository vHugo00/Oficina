import express from 'express';
import "dotenv/config";
import vehicleRouter from './routes/vehicle-router.js';
import workshopRouter from './routes/workshop-router.js';
import maintenanceRouter from './routes/maintenance-router.js';

const app = express();
app.use(express.json());

app.use('/vehicles', vehicleRouter);
app.use('/workshops', workshopRouter);
app.use('/maintenances', maintenanceRouter);

app.listen(process.env.API_PORT, () => console.log('Server is running on port ' + process.env.API_PORT));