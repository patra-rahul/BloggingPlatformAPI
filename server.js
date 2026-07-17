import app from "./src/app.js";
import { connectDB } from "./config/database.js";

connectDB();

async function start() {
    app.listen(3000, ()=>{
        console.log("Listening on port http://localhost:3000")
    })
}

start();