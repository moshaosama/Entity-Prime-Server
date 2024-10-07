const express = require("express");
const cors = require("cors");
require("./Connection");
const { toDoRouter } = require("./Routers/toDoRouters");
const app = express();
const PORT = process.env.PORT || 3000;

//Middelware
app.use(express.json());
app.use(cors());

//EndPoints
app.use("/todo", toDoRouter);

//Create Server
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
