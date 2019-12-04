import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

/**
 * Route: /user
 * Action: GET all users
 * Scope: Public
 */
router.get("/", UserController.listAll);

/**
 * Route: /user/:id
 * Action: GET a user
 * Scope: Public
 */
router.get("/:id([0-9]+)", UserController.getOneById);

/**
 * Route: /user
 * Action: POST a new user
 * Scope: Private
 */
router.post("/", [checkJwt, checkRole(["ADMIN"])], UserController.newUser);

/**
 * Route: /user/:id
 * Action: PATCH a user
 * Scope: Private
 */
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.editUser
);

/**
 * Route: /user/:id
 * Action: DELETE a user
 * Scope: Private
 */
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  UserController.deleteUser
);

export default router;
