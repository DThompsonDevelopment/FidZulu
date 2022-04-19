
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const dvds = require('../modules/dvd');
const dvdteam = require('../modules/team');

const url = require('url');

const { response } = require('../app');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'DvdService' });
  });
router.get('/ping', (request, response, next) => {
 response.send('Hello From Service');
});

router.get("/dvds/all/:location", (req,res,next) => {
    const param = req.params.location;
    console.log('got into dvd/all/:location ' + param);
    if (Object.keys(param).length == 0) {
        console.log('no params');
       next(createError(204));
      } 
      else{
        res.end(JSON.stringify(dvds.query_with_salesTax(param)));
      }

})
   router.get('/dvds/team', (request, response, next) => {
    if (Object.keys(dvdteam).length ==0 ){
        next(createError(204));
    }else{
        console.log('got into dvd');
        response.end(JSON.stringify(dvdteam.list()));
    }
  });

  router.post("/dvds/add", function (req, res, next) {
 
    console.log("got into /bikes/add");
    json = dvds.addDvd(req.body);
  
    res.send(json);
  });
module.exports = router;
