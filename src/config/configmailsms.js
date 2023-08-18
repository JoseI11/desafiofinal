import dotenv from "dotenv";
import config from "../config.js";

import { environment } from "./commander.js";

dotenv.config();


dotenv.config({
    path: environment === "DEVELOPMENT" ? "./.env.dev" : "./.env.prod",
  }); 
const {service,port,user,password,accountsid,authtoken,phonenumber}=config
export default {
  nodemailerConfig: {
    service: service,
    port: port,
    user: user,
    password: password,
  },
  twilioConfig: {
    accountSid: accountsid,
    authToken: authtoken,
    phoneNumber:phonenumber,
  },
};