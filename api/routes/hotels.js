import express from "express";
import { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels } from "../controllers/hotel.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE

router.post("/", verifyAdmin, createHotel);

//UPDATE

router.put("/:id",verifyAdmin, updateHotel);

//DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

//GET

router.get("/:id",verifyAdmin,  getSingleHotel);

//GET ALL
router.get("/", verifyAdmin ,getAllHotels);

export default router;
