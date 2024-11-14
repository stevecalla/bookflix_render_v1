import { Router } from "express";

import books from "./books.js";

const router = Router();

router.use("/books", books);

export default router;
