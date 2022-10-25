const express = require("express");
const apiRouter = express.Router();
// const checkTokenMiddleware = require("../middleware/checkTokenMiddleware");
const BackendApiRouter = require("./api/backendApi");

apiRouter.use("/api", BackendApiRouter);

module.exports = apiRouter;
