var express = require('express');
var router = express.Router();
var City = require('../models/modelCity');
const modelCity = require('../models/modelCity');

/*GET city listing */
router.get('/', async function(request, response, next) {
    response.send(await City.find());
  });

/*GET city by id */
router.get('/:id', async function(request, response, next){
    var result = await modelCity.findById(request.params.id);
    response.send(result);
});

/*POST city by id */
router.post('/', async function(request, response, next){
    const body = request.body;
    try{
        const newCity = new City(body);
        var result = await newCity.save();
        response.send(result)
    }catch(err){
        console.log('Erreur lors de la sauvegarde de la ville:', err);
        // si une erreur survient, on renvoie une erreur 500 avec le message "error"
        response.status(500).send('error to save City');
    }
});

/*PUT city by id */
router.put('/:id', async function(request, response, next){
    var city = await modelCity.findById(request.params.id);
    city.set(request.body);
    var result = await city.save();
    response.send(result)
});

/*DELETE city by id */
router.delete('/:id', async function(request, response, next){
    await modelCity.deleteOne({_id: req.params.id}),
        function (err, result){
            if (err)
                response.status(500).send(err);
            response.send(result);
        }
    response.send('delete city'+ request.params.id);
});

module.exports = router;