import { Router } from "express";
import {postError, getError} from "../controllers/error.controller.js";

const router = Router();

router.post("/", postError);
router.get("/", getError);

export default router;
