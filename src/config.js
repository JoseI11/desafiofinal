import dotenv from "dotenv"
dotenv.config();

import { environment } from "./config/commander.js";


dotenv.config({
    path: environment === "DEVELOPMENT" ? "./.env.dev" : "./.env.prod",
  }); 
  
const secret=process.env.SESSION_SECRET
const connectiondatabase=process.env.DB_URL
const config ={
    dbUrl: connectiondatabase,
    sessionSecret: secret,
    clientID:"Iv1.0c20b6d46f2dc5aa",
    clientSecret:"805de59ef6a647448e866dedcac0e76983f555d2",
    callbackUrl:"https://desafiofinal-i9hw-dev.fl0.io/api/sessions/githubcallback",
    mode:process.env.DEVELOPMENT_MODE,
    jwtSecret:"auto4555",
    cookieName:process.env.COOKIE_NAME,
    loggermode:process.env.LOGGER,
    adminEmail:process.env.ADMIN_EMAIL,
    adminPass:process.env.ADMIN_PASSWORD,
    stripeSecret:process.env.STRIPE_SECRET
    
}
export default config