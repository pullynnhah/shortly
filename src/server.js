import cors from "cors";
import express, { json } from "express";
import "dotenv/config";
import authRoute from "./routes/auth.route.js";

const server = express();
const { PORT } = process.env;

server.use(cors());
server.use(json());
server.use(authRoute);

server.listen(PORT, () => console.log(`💫 Magic happens @ http://localhost:${PORT}`));
