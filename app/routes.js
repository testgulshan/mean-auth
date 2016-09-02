var User = require('./models/user');

module.exports = function (app, passport) {

  app.post('/register', function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
      if(user) {
        res.json('already registered!');
        return;

      } else {
        var newUser = new User(req.body);
        newUser.password = newUser.generateHash(req.password);

        newUser.save(function(err, user) {
          if (err)
            res.send(err)
          res.json(user);
        });
      }
    })
  })
}