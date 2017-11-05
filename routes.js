const mainCtrl = require('./app/controllers/main-ctrl');
const movieCtrl = require('./app/controllers/movie-ctrl');

module.exports = {
    'use' : function(app){
        app.route('/').get(function(req, res, next){
            mainCtrl.get(req, res);
        });
        
        app.route('/addMovie').post(function(req, res, next){
            movieCtrl.create(req, res);
        });
    }
}