import express from "express";
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4000;

const startServer = async (): Promise<void> => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });
};

startServer();
