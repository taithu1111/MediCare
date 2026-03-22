import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import {
    confirmPayment, getAppointments, getAppointmentByDoctor, createAppointment, updateAppointment
    , cancelAppointment, getStats, getRegisterUserCount
} from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

//authentication routes
appointmentRouter.post("/", clerkMiddleware(), requireAuth(), createAppointment);
appointmentRouter.get("/my-appointments", clerkMiddleware(), requireAuth(), getAppointmentByPatient);

appointmentRouter.get("/doctor/:doctorId", getAppointmentByDoctor);

appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.get("/patient/count", getRegisterUserCount);
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;



