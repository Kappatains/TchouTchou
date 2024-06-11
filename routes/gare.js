var express = require('express');
var router = express.Router();
var Gare = require('../models/modelGare');
const modelGare = require('../models/modelGare');

/*GET gare listing */
router.get('/', async function(request, response, next) {
    response.send(await Gare.find());
  });

/*GET gare by id */
router.get('/:id', async function(request, response, next){
    response.send(await Gare.findById(request.params.id));
});

/*POST gare by id */
router.post('/', async function(request, response, next){
    const body = request.body;
    const newGare = new Gare(request.body);
    var result = await newGare.save();
    response.send(result);
});

/*PUT gare by id */
router.put('/:id', async function(request, response, next){
    var gare = await modelGare.findById(request.params.id);
    gare.set(request.body);
    var result = await gare.save();
    response.send(result)
});

/*DELETE gare by id */
router.delete('/:id', async function(request, response, next){
    await modelGare.deleteOne({_id: req.params.id}),
        function (err, result){
            if (err)
                response.status(500).send(err);
            response.send(result);
        }
    response.send('delete gare'+ request.params.id);
});

module.exports = router;