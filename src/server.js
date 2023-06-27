import cors from "cors";
import express, { json } from "express";
import "dotenv/config";

const server = express();
const { PORT } = process.env;

server.use(cors());
server.use(json());

server.listen(PORT, () => console.log(`💫 Magic happens @ http://localhost:${PORT}`));
