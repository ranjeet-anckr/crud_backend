import dbconnection from "./src/db/dbConnection.js";
import app from "./src/app.js";
import dbPostConnection from "./src/db/dbPostConnection.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

// dbconnection();
const getConnection = async () => {
  try {
    await dbPostConnection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
getConnection();

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
