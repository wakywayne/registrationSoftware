import * as express from "express";
import loginRouter from "./login";
import Blogs from "../../db/blogs";
import config from "../../config";
import register from './register';
import makeAnEvent from './makeAnEvent';

const router = express.Router();

router.use("/makeAnEvent", makeAnEvent);

router.use("/login", loginRouter);

router.use("/register", register);

export default router;
