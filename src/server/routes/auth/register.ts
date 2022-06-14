import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import config from '../../config';
import blog from '../../db/blogs';
import { generateHash } from '../../utils'


const router = express.Router();


router.post("/", async (req: any, res, next) => {
  const newUser = req.body;
  try {
    newUser.password = generateHash(newUser.password);
    const result: any = await blog.insertUser(newUser);

    const newUserId: any = await blog.find('email', newUser.email);
    var results = JSON.parse(JSON.stringify(newUserId[0]));

    const token = jwt.sign(
      { userid: newUserId[0], email: newUser.email, role: newUser.role },
      config.jwt.secret ? config.jwt.secret : "", { expiresIn: '30d' }
    );
    return res.json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "My code register broke oops" });
  }
});


export default router;
