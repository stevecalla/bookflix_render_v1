import { Router } from "express";

import bcrypt from 'bcrypt';

import dotenv from 'dotenv';

import { User } from '../../models/index.js';

dotenv.config();

const router = Router();

// sign up route // POST: /api/user/signup

router.post("/signup", async (req, res) =>
{

    const { email, userId, password } = req.body;

    try {
        const newProfile = req.body;
        newProfile.password = await bcrypt.hash(req.body.password, 10);

        const userData = await User.create({
            email: newProfile.email,
            password: newProfile.password,
            username: newProfile.userId,
        });
        res.status(200).json(userData);
      } catch (err) {
        res.status(400).json(err);
      }



    // res.send({
    //     email: email,
    //     password: password,
    //     userId: userId,
    // });


});


export default router;
