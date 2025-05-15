import express from "express";
import {
  createStore,
  getAllStores,
  getStoreById,
  updateStore,
  deleteStore,
  getStoresByOwner,
  getRatingsForUserStores,
} from "../controllers/store.js";
import { authenticate } from "../middlewares/auth.js";
import { authorize } from "../middlewares/role.js";

const router = express.Router();

router.post("/", authenticate, authorize(["admin", "owner"]), createStore);
router.get("/", authenticate, getAllStores);
router.get("/:id", authenticate, getStoreById);
router.put("/:id", authenticate, authorize(["admin", "owner"]), updateStore);
router.delete("/:id", authenticate, authorize(["admin", "owner"]), deleteStore);
router.get(
  "/owner/:userId",
  authenticate,
  authorize(["admin", "owner"]),
  getStoresByOwner
);
router.get(
  "/:user_id/store-ratings",
  authenticate,
  authorize(["owner"]),
  getRatingsForUserStores
);

export default router;