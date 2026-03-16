import express from "express";
import multer from "multer";

import createDoctor, { getDoctors } from "../controllers/doctorController";

import doctorAuth from "../middlewares/doctorAuth";

const upload = multer({ dest: "/tmp" });

const doctorRouter = express.Router();

doctorRouter.get("/", getDoctors);
doctorRouter.post("/login", doctorLogin);

doctorRouter.get("/:id", getDoctorById);
doctorRouter.post("/", upload.single("image"), createDoctor);

//after login 
doctorRouter.put("/:id", doctorAuth, upload);
doctorRouter.get("/", getDoctors);
doctorRouter.get("/", getDoctors);
doctorRouter.get("/", getDoctors);

export default doctorRouter;