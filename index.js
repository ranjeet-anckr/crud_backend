import dbconnection from "./src/db/dbConnection.js";
import app from "./src/app.js";

const port =4000;
dbconnection();
app.listen(port,()=>{
    console.log(`Server started on port http://localhost:${port}`)
})