import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";

import { success, info, error, warning } from "./logger";
import routes from "./routes";

const PORT: number = 9000;

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
    app.listen(PORT);

    // console utilites
    success(`Express server has started on port ${PORT}`);
    info(`Express server has started on port ${PORT}`);
    error(`Express server has started on port ${PORT}`);
    warning(`Express server has started on port ${PORT}`);
  })
  .catch(error => console.log(error));
