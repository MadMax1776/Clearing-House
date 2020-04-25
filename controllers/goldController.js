const express = require('express');
const router = express.Router();
const Gold = require('../models/gold.js');

router.get('/', (req, res)=>{
  Gold.find({}, (error, foundGold) => {
        res.json(foundGold);
    })
})

router.post('/', (req, res) => {
    Gold.create(req.body, (err, createdGold) => {
        res.json(createdGold);
    });
});

router.put('/:id', (req, res) => {
  Gold.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGold) => {
    res.json(updatedGold);
  })
});

router.delete('/:id', (req, res) => {
  Gold.findByIdAndRemove(req.params.id, (error, deletedGold) => {
    res.json(deletedGold);
  });
});


module.exports = router;
