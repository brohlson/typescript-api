import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";

import { success, info, error, warning } from "./logger";
import routes from "./routes";

createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    // register express routes from defined application routes
    app.use("/", routes);

    // start express server
    app.listen(3000);

    // console utilites
    success("Express server has started on port 3000");
    info("Express server has started on port 3000");
    error("Express server has started on port 3000");
    warning("Express server has started on port 3000");
  })
  .catch(error => console.log(error));
