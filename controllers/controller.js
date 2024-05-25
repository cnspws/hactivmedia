
class Controller {
    static async rootPage (req,res){
        try {
            res.render('home')
        } catch (err) {
            res.send(err)            
        }
    }
    static async upload (req,res){
        try {
            res.render('upload')
        } catch (err) {
            res.send(err)            
        }
    }
    static async getpost(req, res) {
        try {
            res.render('home')
        } catch(err) {
            res.send(err)
        }
    }
}

module.exports = Controller;