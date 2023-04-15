import express from 'express';
const router=express.Router();
// ,customerHistory,mechanicHistory,shopHistory
import { request,updateStatus ,addMechanic,bill,id} from '../controller/booking.controller.js';
import { body } from 'express-validator';
import { verifyToken } from '../middleware/verification.js';
router.post("/request",request);
router.post("/updateStatus",updateStatus);
router.post("/addMechanic", addMechanic )
router.post("/bill",bill);
// router.get("/customerHistory",customerHistory);
// router.get("/mechanicHistory",mechanicHistory);
// router.get("/shopHistory",shopHistory);
router.post("/id",id);
export default router;