import { Router } from "express";
import {
  addUser,
  getAllUsers,
  getUserById,
  updatePassword,
  updateUser,
} from "../controllers/user.js";
import { authenticate } from "../middlewares/auth.js";
import { authorize } from "../middlewares/role.js";

const router = Router();

router.get("/", authenticate, authorize(["admin"]), getAllUsers);

router.get("/:id", authenticate, authorize(["admin"]), getUserById);

router.put("/password", authenticate, updatePassword);
router.put("/:id", authenticate, authorize(["admin"]), updateUser);
router.post("/", authenticate, authorize(["admin"]), addUser);

export default router;