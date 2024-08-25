import express from "express";
const app = express();
app.listen(4000, () =>
  console.log("the server is running in http://localhost:4000 for auth")
);
