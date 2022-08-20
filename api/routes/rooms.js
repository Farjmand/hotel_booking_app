import express from "express";
import { createRoom, updateRoom, deleteRoom, getSingleRoom, getAllRooms } from "../controllers/room.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE

router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE

router.put("/:id",verifyAdmin, updateRoom);

//DELETE

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//GET

router.get("/:id",verifyAdmin,  getSingleRoom);

//GET ALL
router.get("/", verifyAdmin ,getAllRooms);

export default router;
