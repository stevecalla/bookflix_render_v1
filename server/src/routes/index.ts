import { Router } from "express";

import api from "./api/index.js";

import authRoutes from "./authRoutes.js";

const router = Router();

router.use("/api", api);

router.use("/auth", authRoutes);

export default router;
