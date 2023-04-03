module.exports = {
    signUp(req, res) {
        console.log(req.body);
        res.send('respond with a resource');
    },

    signIn(req, res) {
        console.log(req.body);
        res.send('respond with a resource');
    }
}