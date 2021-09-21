require("dotenv").config();
const app = require("./src/app");
const mongoClient = require("./src/connection/mongo");

const start = async () => {
  await mongoClient.connect();

  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
};

start().catch((err) => console.log(err));
