
    const items = require("../controllers/items.controller.js");

    const router = require("express").Router();

    // // Create a new Tutorial
    // router.post("/", tutorials.create);

    // Retrieve all items
    router.get("/", items.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    //
    // Retrieve a single items with id
    router.get("/:id", items.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    //
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    //
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    module.exports = router