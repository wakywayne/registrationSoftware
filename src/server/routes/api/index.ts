import * as express from "express";
import Blogs from "../../db/blogs";
import config from "../../config";
import { tokenCheck } from '../../middleware/auth';

const router = express.Router();


router.get("/hello", (req, res, next) => {
  res.json(`Hello ${config.test}`);
});

export default router;
