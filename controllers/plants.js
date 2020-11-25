const { deleteOne } = require('../models/plant');
const Plant = require('../models/plant')


module.exports = {
    index,
    show,
    new: newPlant,
    create,
    edit,
    delete: deletePlant
};


function index(req, res) {
    Plant.find({}, function(err, plants) {
        console.log(err)
        res.render('plants/index', { title: 'All Plants', plants });
    });
}

function show(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        res.render('plants/show', { title: 'Plants', plant });
    });
}


function newPlant(req, res) {
    res.render('plants/new', { title: 'Add Plant' });
}



function create(req, res) {
    const plant = new Plant(req.body);
    plant.save(function(err) {
        if (err) return res.redirect('/plants/new');
        console.log(plant);
        res.redirect('/plants');
    });
}

function edit(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        console.log(plant)
        res.render('plants/edit.ejs', {
            plant
        });
    })
}

function deletePlant(req, res) {
    Plant.findByIdAndRemove(req.params.id, function(err) {
        res.redirect('/plants');
    });
}
