const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;
console.log(Item)
// Create and Save a new Tutorial
// exports.create = (req, res) => {
//
// };

// Retrieve all items from the database.
exports.findAll = (req, res) => {

    Item.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving items"
            });
        });

};

// Find a single item with an id
exports.findOne = (req, res) => {
    const id = req.params.id
    Item.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving item with id=" + id
            })
        })

};

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//
// };
//
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//
// };
//
// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//
// };
//
// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//
// };