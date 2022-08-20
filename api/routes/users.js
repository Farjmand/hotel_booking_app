import express from "express";
import { createUser, updateUser, deleteUser, getSingleUser, getAllUsers } from "../controllers/User.js";
import { verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello Admin, you are logged in and you can delete all accounts")
// })
//CREATE

router.post("/",verifyUser, createUser);

//UPDATE
 
router.put("/:id",verifyUser, updateUser);

//DELETE

router.delete("/:id",verifyUser, deleteUser);

//GET

router.get("/:id",verifyUser, getSingleUser);

//GET ALL
router.get("/",verifyAdmin, getAllUsers);

export default router;
