import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGODB_URI){
    console.error("MONGODB URI is not available in environment variables")
}

const config = {
    MONGODB_URI: process.env.MONGODB_URI
}

export default config;