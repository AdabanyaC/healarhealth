const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const databaseConnection = process.env.DATABASE;

mongoose
  .connect(databaseConnection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection Successful.");
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`);
});
