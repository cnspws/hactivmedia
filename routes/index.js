const UserController = require('../controllers/UserController');
const Controller = require('../controllers/controller');

const router =require('express').Router();
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)

router.get('/logout',UserController.getLogout)

router.use(function(req, res, next) {
  console.log(req.session)
  if(!req.session.userid){
    const error = 'please login first!'
    res.redirect(`/login?error=${error}`)
  }else{
    next()
  }
//   // console.log('Time:', Date.now(),"hollaaaa")
//   // next()
})

router.get('/', Controller.rootPage)
router.get('/upload', Controller.upload )
router.post('/upload', Controller.getpost )
  
  
  module.exports = router;