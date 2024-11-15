import { Router } from "express";

import books from "./books.js";
import user from "./user.js";

const router = Router();

router.use("/books", books);
router.use("/user", user);

export default router;
