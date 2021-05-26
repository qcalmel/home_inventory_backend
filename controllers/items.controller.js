const db = require("../models");
const Item = db.Item;
const Location = db.Location;
const Op = db.Sequelize.Op;

// Créer un nouvel objet
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }
    const item = req.body;
    Item.create(item)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating item"
            });
        });
};

// Récupérer tout les objets
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

// Récupération d'un objet par rapport à son id
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
const isSameNameAtLocation = async (itemName, newLocationId) => {
    let sameName = false
    console.log("test")
    await Item.findAll({
        where: {locationId: newLocationId, name: itemName}
    })
        .then((res) => {
            console.log(res.length ? "ok" : "not ok")
            res.length && (sameName = true)
        })

    return sameName
}

// Mise a jour d'un objet avec son id
exports.update = async (req, res) => {
    const id = req.params.id
    if (await isSameNameAtLocation(req.body.name, req.body.locationId)) {
        res.status(400).send({message: "L'emplacement sélectionné a deja un objet du meme nom"})
        return
    }
    Item.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update item with id=${id}. Maybe item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating item with id=" + id
            });
        });
};

exports.move = (req,res) => {
    const itemsId = req.body.itemsId
    Item.update({locationId: req.body.locationId,},{where:{id:itemsId}})
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update item with id=${itemsId}. Maybe item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => console.log(err))
}

// Supprimer un objet avec son id
exports.delete = (req, res) => {
    const id = req.params.id
    Item.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete location with id=${id}. Maybe location was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete item with id=" + id
            });
        });
};