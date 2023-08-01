import mongoose from "mongoose";
import app from "./app";
import configuration from "./configuration/index";

const serverConntection = async () => {
  try {
    await mongoose.connect(configuration.database_Url as string);
    console.log("database connected successfully");

    app.listen(configuration.port, () => {
      console.log(`app is listening on port ${configuration.port}`);
    });
  } catch (error) {
    console.log(`database connection failed: ${error}`);
  }
};

serverConntection();
