import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_Url: process.env.DATABASE_URL,
  env: process.env.NODE_ENV,
  password: process.env.PASSWORD,
  store_id: process.env.STORE_ID,
  store_password: process.env.STORE_PASSWORD,
  server_side_link: process.env.SERVER_SIDE_LINK,
  client_side_link: process.env.CLIENT_SIDE_LINK,
  secret_key: process.env.ACCESS_TOKEN_SECRET,
};
