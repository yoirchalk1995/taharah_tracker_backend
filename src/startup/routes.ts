import { Application } from "express";
import signUpRoute from "../routes/signUps.js";
import locationsRouter from "../routes/locations.js";
import logInsRouter from "../routes/logIns.js";

export default function routes(app: Application): void {
  app.use("/api/signUps", signUpRoute);
  app.use("/api/locations", locationsRouter);
  app.use("/api/logIns", logInsRouter);
}
