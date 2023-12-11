const mongoose = require("mongoose");

const getConnection = async () => {
  try {
    const url =
      "mongodb+srv://admin:i7RFhlrc89fPg5DG@cluster0.zc0lqw3.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(url);

    console.log("Conexion exitosa");
  } catch (error) {
    console.log("Error");
  }
};
module.exports = {
  getConnection,
};
