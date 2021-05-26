const db = require("../models");
const Item = db.Item;
const Op = db.Sequelize.Op;

// Création et ajout d'un nouvel emplacement
// exports.create = (req, res) => {
//     if (!req.body.name) {
//         res.status(400).send({
//             message: "Content can not be empty"
//         });
//         return;
//     }
//     const item = {
//         name: req.body.name,
//         parentId: req.body.parentId
//     };
//     Location.create(item)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating location"
//             });
//         });
// };

// Récupération de tout les emplacements
exports.findAll = (req, res) => {

    Item.findAll({
        where:{isLocation:true}
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations"
            });
        });

};
exports.findAllRootLocations = (req, res) => {


    Item.findAll({
        where:{isLocation:true,locationId:null}
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations"
            });
        });


};
// Récupération de tout les objets d'un emplacement
exports.findAllItemsByLocation = (req, res) => {
    const id = req.params.id
    Item.findAll({
        where: {locationId: id},
        order:[['isLocation','DESC']]
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations"
            });
        });

};

exports.findAllChildrenLocation = (req, res) => {
    const id = req.params.id
    setTimeout(()=>{
    Item.findAll({
        where: {locationId: id, isLocation:true},
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving locations"
            });
        });
    },300)

};

// Récupération d'un emplacement par rapport à son id
exports.findOne = (req, res) => {
    const id = req.params.id
    Location.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retieving item with id=" + id
            })
        })

};

// Mise a jour d'un emplacement avec son id
exports.update = (req, res) => {
    const id = req.params.id
    Location.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Location was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update location with id=${id}. Maybe location was not found or req.body is empty !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating location with id=" + id
            });
        });
};

// Supprimer un emplacement avec son id
exports.delete = (req, res) => {
    const id = req.params.id;
    Location.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Location was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete location with id=${id}. Maybe location was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: " Could not delete location with id=" + id
            });
        })
};