const {User} = require ('../models')
const bcrypt = require('bcryptjs')

class UserController {

    static registerForm(req,res){
        res.render('formRegister')
    }
    static postRegister(req,res){
        const { username, email, password, role } = req.body

        User.create({username, email, password, role})
            .then(newUser => {
                res.redirect('/login')
            })
            .catch(err=>res.send(err))
    }

    static loginForm(req,res){
        const { error } = req.query
        res.render('loginForm', {error})
    }
    static postLogin(req,res){
    //     res.render('postLogin')
        const { username,password } = req.body
        User.findOne({where:{username}})
        .then(user => {
            if(user){
                const isValidPassword = bcrypt.compareSync(password , user.password)
                if (isValidPassword){
                    req.session.userid = user.id;
                    return res.redirect('/')
                    // return res.render('gngn')
                }else {
                    const error = "invalid username/password"
                    return res.redirect(`/login?error=${error}`)
                }

            }else{
                const error = "invalid username/password"
                return res.redirect(`/login?error=${error}`)
            }            
        })
        .catch(err => res.send(err))
    }
    static getLogout(req,res){
        req.session.destroy((err)=>{
            if(err) res.send(err)
                else{
                    res.redirect('/login')
                }
        })
    }



}
module.exports = UserController
