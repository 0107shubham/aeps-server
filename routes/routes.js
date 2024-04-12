import express from "express";
const route = express.Router();
import { OnboardUser } from "../controller/Onboard-User.js";
import { ActivateService } from "../controller/Activate-Service.js";
import { testingData } from "../controller/testing.js";
route.post("/add", OnboardUser);
route.post("/activate", ActivateService);
route.get("/test", testingData);
export default route;
