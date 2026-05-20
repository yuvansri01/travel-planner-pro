import { Router } from "express";
import User from "../models/User";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
});

export default router;