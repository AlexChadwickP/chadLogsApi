import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// Setup express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup helmet and CORS
app.use(helmet());
app.use(cors());

// Setup custom middleware
import authMiddleware from "../middleware/auth.middleware.js";
app.use(authMiddleware);

// Setup error routes
import errorRouter from "../routers/error.router.js";
app.use("/api/error", errorRouter);

// Setup test route
app.get("/", (req, res) => {
    res.sendStatus(200);
});

export default app;
