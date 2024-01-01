import { config } from "dotenv";
config(); //used to get variable from .env
export let port = process.env.PORT;
