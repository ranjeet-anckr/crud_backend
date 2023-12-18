import express from "express";
import cors from "cors"; // Import the cors middleware
import ProductRoutes from "../src/routes/product.routes.js";
import UserRoutes from "../src/routes/user.routes.js";

var app = express();

app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//       origin: ["http://localhost:3000"],
//       methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//       credentials: true, // Enable credentials (e.g., cookies, authorization headers) for cross-origin requests
//       optionsSuccessStatus: 204, // Set the response status for successful preflight requests
//     })
//   );

app.get("/", function (req, res) {
  res.send("Welcome to crud app and it's running successfully!");
});

app.use("/api", ProductRoutes);
app.use("/api", UserRoutes);

app.use(function (err, req, res, next) {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

export default app;
