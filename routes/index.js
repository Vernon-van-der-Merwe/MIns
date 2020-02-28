var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {page:'Home', menuId:'home'});
});

router.post('/login', (req, res) => {
  let username = req.body.email;
  let password = req.body.password;

  if (username == 'luciahanlie@gmail.com' && password == '1234') {
      res.redirect('/admin/'+username);
  } else if (username == 'vernon.vd.m14@gmail.com' && password == '1234') {
      res.redirect('/admin/'+username);
  } else

      res.send('wrong password')
})

router.get('/login', (req, res) => {
  res.render('login');

})

router.get('/admin/:username', function (req, res, next) {
  user = {username : req.params.username}
  res.render('admin/dash-landing',{user : user});
  console.log(req.method, req.params.username);
})

module.exports = router;