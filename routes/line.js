var express = require('express');
var router = express.Router();
var Line = require('../models/modelLine');
const modelLine = require('../models/modelLine');

/*GET line listing */
router.get('/', async function(request, response, next) {
    response.send(await Line.find());
  });

/*GET line by id */
router.get('/:id', async function(request, response, next){
    response.send(await Line.findById(request.params.id));
});

/*POST line by id */
router.post('/', async function(request, response, next){
    const body = request.body;
    const newLine = new Line(request.body);
    var result = await newLine.save();
    response.send(result);
});

/*PUT line by id */
router.put('/:id', async function(request, response, next){
    var line = await modelLine.findById(request.params.id);
    line.set(request.body);
    var result = await line.save();
    response.send(result)
});

/*DELETE line by id */
router.delete('/:id', async function(request, response, next){
    await modelLine.deleteOne({_id: req.params.id}),
        function (err, result){
            if (err)
                response.status(500).send(err);
            response.send(result);
        }
    response.send('delete line'+ request.params.id);
});

module.exports = router;