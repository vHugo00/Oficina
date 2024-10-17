import db from "../config/db.js";

const maintenanceSchema = new db.Schema({
    workshop: {
        type: db.Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: db.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    services: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
});

const Maintenance = db.model("Maintenance", maintenanceSchema);

export default Maintenance;
