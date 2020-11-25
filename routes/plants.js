const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants')


router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.new);
router.get('/edit', plantsCtrl.edit);
router.get('/:id', plantsCtrl.show);
router.get('/:id/edit', plantsCtrl.edit);
router.post('/', plantsCtrl.create);
// router.delete('/:id', plantsCtrl.delete);


module.exports = router;