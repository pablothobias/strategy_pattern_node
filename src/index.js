const ContextStrategy = require("./db/strategies/base/contextStrategy");
const MongoDB = require("./db/strategies/mongodb");

const contextMongoDB = new ContextStrategy(new MongoDB());
contextMongoDB.create();