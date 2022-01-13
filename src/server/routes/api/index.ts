import * as express from "express";
import config from "../../config";
import { tokenCheck } from '../../middleware/auth';
import blogs from "../../db/blogs";

const router = express.Router();


router.get("/hello", (req, res, next) => {
  res.json(`Hello ${config.test}`);
});

router.get("/events", async (req, res, next) => {
  try {
    res.json(await blogs.selectAllFromEvents_table())
  } catch (err) {
    console.log(err);
  }
})

router.get("/event/:id", async (req, res, next) => {
  try {
    res.json(await blogs.selectEventFromEvents_table(Number(req.params.id)));
  } catch (err) {
    console.log(err);
  }
})

router.get("/event/divisions/:id", async (req, res, next) => {
  try {
    res.json(await blogs.selectAllDivisions(Number(req.params.id)));
  } catch (err) {
    console.log(err);
  }
})

router.get("/event/name/:name", async (req, res, next) => {
  try {
    res.json(await blogs.selectEventNameFromEvents_table((req.params.name)));
  } catch (err) {
    console.log(err);
  }
})

export default router;
