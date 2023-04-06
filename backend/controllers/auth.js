const users = require('../constants/users');




module.exports = {
    signUp(req, res) {
        console.log(req.body);
        res.send('respond with a resource');
    },

    signIn(req, res) {
        const { email, password } = req.body;

        console.log(email, password)

        const user = users.find(user => user.email === email && user.password === password);

        console.log(user)

        if (!user) {
            res.status(401).send('Invalid email or password');
            return;
        }

        req.session.regenerate(err => {
            if (err) throw err;

            req.session.user = user;

            req.session.save(err => {
                if (err) return next(err);

                res.status(200).send('Ok');
            });
        });
    },

    whoAmI(req, res) {
        res.status(200).send(req.session.user)
        
      },
      
    
}
