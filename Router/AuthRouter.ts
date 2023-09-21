import express from "express"
import { getAllUser, createUser, SignIn, verifyUser, getUsers } from "../controller/AuthController"
import verifyHoder from "../utils/verifyHoder"

const router = express.Router()

router.route("/").get(getAllUser)
router.route("/register").post(verifyHoder,(createUser), createUser)
router.route("/SignIn").post(verifyHoder, (SignIn),SignIn)
router.route("/userID/verified").get(verifyUser)
router.route("/userID/user").get(getUsers)

export default router