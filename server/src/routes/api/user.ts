import { Router } from "express";
import fetch from 'node-fetch';

import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// sign up route // POST: /api/user/signup

router.post("/signup", async (_req, res) =>
{
    const { email, password } = _req.body;

    res.send({
        email: email,
        password: password,
    });
});


export default router;
