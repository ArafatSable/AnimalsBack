const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

require("dotenv").config();

const DB1 = process.env.DB1;
const DB2=process.env.DB2;
mongoose.connect(DB1, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

