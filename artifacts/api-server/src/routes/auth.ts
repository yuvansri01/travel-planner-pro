import { Router } from "express";
import User from "../models/User";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    const user = await User.create({
      email,
      password,
    });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error",
    });
  }
});

export default router;