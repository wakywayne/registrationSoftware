import * as express from "express";
import blogs from '../../db/blogs';
import { tokenCheck } from '../../middleware/auth'

const rout = express.Router();

rout.post("/", tokenCheck, async (req, res, next) => {
    try {
        const event = req.body;
        res.json(await blogs.insertEvent(event));
    } catch {
        console.log("code broke in makeAnEvent");
    }
})

export default rout;