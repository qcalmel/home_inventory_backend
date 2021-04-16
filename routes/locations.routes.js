const locations = require("../controllers/locations.controller.js");

const router = require("express").Router();

router.post("/", locations.create);

router.get("/", locations.findAll);

router.get("/:id/children", locations.findAllChildren);

router.get("/:id", locations.findOne)

router.delete("/:id", locations.delete)

router.put("/:id", locations.update)

module.exports = router