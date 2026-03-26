import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';

import { cancelServiceAppointment, confirmServicePayment, createServiceAppointment, getServiceAppointments, getServiceAppointmentById, getServiceAppointmentByPatient, getServiceAppointmentStats, updateServiceAppointment } from '../controllers/serviceAppointmentController.js';

const serviceAppointmentRouter = express.Router();

serviceAppointmentRouter.get("/", getServiceAppointments);
serviceAppointmentRouter.get("/confirm", confirmServicePayment);
serviceAppointmentRouter.get("/", getServiceAppointmentStats);

serviceAppointmentRouter.post("/", clerkMiddleware(), requireAuth(), createServiceAppointment);

serviceAppointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getServiceAppointmentByPatient);

serviceAppointmentRouter.get("/:id", getServiceAppointmentById);
serviceAppointmentRouter.put("/:id", updateServiceAppointment);
serviceAppointmentRouter.get("/:id/cancel", cancelServiceAppointment);

export default serviceAppointmentRouter;




