import * as express from "express";
import config from "../../config";
import blogs from "../../db/blogs";
import Stripe from 'stripe';

const stripe = new Stripe(config.stripe.secret ? config.stripe.secret : "", { apiVersion: '2020-08-27' })

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
router.get("/event/name/:name", async (req, res) => {
  try {
    console.log(req.params.name);
    res.json(await blogs.selectEventNameFromEvents_table(String(req.params.name)));
  } catch (err) {
    console.log(err);
  }
})

router.post("/donate", async (req, res, next) => {
  const paymentMethod = req.body.paymentMethod;
  const amount = req.body.chosenDivision;
  try {
    const fulfilled = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: Number(amount) * 100,
      payment_method: paymentMethod.id,
      confirm: true
    })
    res.json(fulfilled)
  } catch (err) {
    console.log(err);
  }
})

export default router;
