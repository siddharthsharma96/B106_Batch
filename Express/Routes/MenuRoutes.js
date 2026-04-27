const express = require("express");

const MenuController = require("./../Controllers/MenuController");
const router = express.Router();

router.route("/").get(MenuController.getAllMenu);

router.route("/:id").get(MenuController.updateMenu);

module.exports = router;
