import express from "express";
import upload from "../middlewares/multer.js";

import { 
    createDoctor, 
    getDoctors, 
    loginDoctor, 
    updateDoctor, 
    deleteDoctor, 
    toggleDoctorAvailability 
} from "../controllers/doctorController.js";

import doctorAuth from "../middlewares/doctorAuth.js";

const doctorRouter = express.Router();

doctorRouter.get("/", getDoctors);
doctorRouter.post("/login", loginDoctor);

// Tạo mới doctor (có upload ảnh)
doctorRouter.post("/", upload.single("image"), createDoctor);

// Các route cần xác thực (doctorAuth)
// Cập nhật thông tin / ảnh
doctorRouter.put("/:id", doctorAuth, upload.single("image"), updateDoctor);
// Xoá doctor
doctorRouter.delete("/:id", doctorAuth, deleteDoctor);
// Cập nhật trạng thái availability
doctorRouter.put("/:id/availability", doctorAuth, toggleDoctorAvailability);

export default doctorRouter;