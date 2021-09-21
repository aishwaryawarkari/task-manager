const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
    // console.log(conn.name);
    return;
  } catch (err) {
    return err;
  }
};
