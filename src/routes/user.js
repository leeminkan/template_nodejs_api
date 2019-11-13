const express = require("express");
const router = express.Router();

const jwtAuthenticate = require("../middleware/jwtAuthenticate");
const userController = require("../controllers/UserController");
/**
 * @swagger
 * /user/sign-up:
 *    post:
 *      tags:
 *      - "User"
 *      summary: "Register new account!"
 *      description: ""
 *      parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Created user object"
 *         required: true
 *         schema:
 *          $ref: "#/definitions/User"
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.post("/sign-up", userController.create);
/**
 * @swagger
 * /user/sign-in:
 *    post:
 *      tags:
 *      - "User"
 *      summary: "Login!"
 *      description: ""
 *      parameters:
 *       - in: "body"
 *         name: "body"
 *         required: true
 *         schema:
 *          type: "object"
 *          properties:
 *              email:
 *                  type: "string"
 *                  example: "string@gmail.com"
 *              password:
 *                  type: "string"
 *                  example: "string"
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.post("/sign-in", userController.login);
/**
 * @swagger
 * /user/check-authenticate:
 *    get:
 *      tags:
 *      - "User"
 *      summary: "Check Authenticate!"
 *      security:
 *          - api_key: []
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.get("/check-authenticate", jwtAuthenticate, userController.checkAuthenticate);
/**
 * @swagger
 * /user/findPeople:
 *    get:
 *      tags:
 *      - "User"
 *      summary: "Find People Near You!"
 *      security:
 *          - api_key: []
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.get("/findPeople", jwtAuthenticate, userController.findPeople);
/**
 * @swagger
 * /user/swipe-left:
 *    post:
 *      tags:
 *      - "User"
 *      summary: "Swipe Left!"
 *      security:
 *          - api_key: []
 *      description: ""
 *      parameters:
 *       - in: "body"
 *         name: "body"
 *         required: true
 *         schema:
 *          type: "object"
 *          properties:
 *              targetUser:
 *                  type: "string"
 *              type:
 *                  type: "string"
 *                  enum: ["left", "right"]
 *                  example: "left"
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.post("/swipe-left", jwtAuthenticate, userController.swipe);
/**
 * @swagger
 * /user/list-matched:
 *    get:
 *      tags:
 *      - "User"
 *      summary: "Get list Matched!"
 *      security:
 *          - api_key: []
 *      responses:
 *       default:
 *         description: "successful operation"
 */
router.get("/list-matched", jwtAuthenticate, userController.getListMatched);

module.exports = router;
