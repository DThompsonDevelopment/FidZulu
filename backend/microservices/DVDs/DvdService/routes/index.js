
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const dvds = require('../modules/dvd');
const dvdteam = require('../modules/team');

const url = require('url');

router.get('/ping', (request, response, next) => {
 response.send('Hello From Service');
});


// router.get('/dvdtest/team', (request, response, next) => {
//     response.send('Returns all json object with team name and all team members names');
//    });
   
   router.get('/dvd/team', (request, response, next) => {

   // let get_params = url.parse(request.url, true).query;

    if (Object.keys(dvdteam).length ==0 ){

        next(createError(204));
    
    }else{
        console.log('got into dvd');
        response.end(JSON.stringify(dvdteam.list()));
    }
  });

module.exports = router;
