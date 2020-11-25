const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants')


router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.new);
router.get('/:id', plantsCtrl.show);
router.get('/:id/edit', plantsCtrl.edit);
router.put('/:id', plantsCtrl.update);
router.post('/', plantsCtrl.create);
router.delete('/:id', plantsCtrl.delete);


module.exports = router;