const express = require("express");
const cors = require("cors");
require("./Connection"); // Ensure your database connection is properly set up
const { toDoRouter } = require("./Routers/toDoRouters");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints
app.use("/todo", toDoRouter);

// Export the app for Vercel
module.exports = app;

// Start server for local development
if (require.main === module) {
  app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
  });
}
