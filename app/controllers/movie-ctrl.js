const Movie = require('../model/movie');

module.exports = {
    'title' : 'Submitted Successfully',
    'create' : function(req, res){
        m = new Movie({'name' : req.body.name, 'rating' : req.body.rating});
        m.save(function (err) {
            if (err) throw err
            res.render('success', module.exports);
        });
    }
}
