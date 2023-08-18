import dotenv from "dotenv"
dotenv.config();

import { environment } from "./config/commander.js";


dotenv.config({
    path: environment === "DEVELOPMENT" ? "./.env.dev" : "./.env.prod",
  }); 
  
// const secret=process.env.SESSION_SECRET
// const connectiondatabase=process.env.DB_URL
const config ={
    dbUrl: "mongodb+srv://Jose11:0oUuqj0WonjsrAhP@codercluster.fwoec0u.mongodb.net/ecommerce?retryWrites=true&w=majority",
    sessionSecret: "auto45",
    clientID:"Iv1.b6e8eed3962c6879",
    clientSecret:"c4cedaacb19a6174b7202900f50e218e94560055",
    callbackUrl:"",
    mode:"false",
    jwtSecret:"auto4555",
    cookieName:"jwtCookie",
    loggermode:"DEVELOPMENT",
    adminEmail:"adminCoder@coder.com",
    adminPass:"adminCod3r123",
    stripeSecret:"sk_test_51Na5WnB3q7njnQ2YsNazkmj1mGTnsudXtsUTiItZnAT7t3T2Ub1Jyh9z7NaGNYbuRlvqNd2uIBEwqJwGSUafUxFz00A7zcqWz4",
    service:"gmail",
    port:"587",
    user:"ignacio8686@gmail.com",
    password:"wulmvtihpeizvxlb",
    accountsid:"AC72cade47f6b8b2a1dcbf42835fe37fc1",
    authtoken:"f67daa9f286f5945d20f712b054a7ff2",
    phonenumber:"+13203789427"
}
export default config