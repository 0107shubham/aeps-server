import express from "express";

import Route from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = 8080; // You can change this to any port you prefer
app.use("/", Route);
// Define a route
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });
// Connection();
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
