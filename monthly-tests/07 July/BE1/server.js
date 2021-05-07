import { connect } from "mongoose";

import { app } from "./app";

connect(process.env.MONGODB_CONN_STRING, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Mongoose Connection Successful");
  })
  .catch((err) => {
    console.log("Error in connecting to Database", err.message);
  });

const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Listening on http://${process.env.HOST}:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.message);
  server.close(() => {
    console.log("Server Closed");
  });
});
