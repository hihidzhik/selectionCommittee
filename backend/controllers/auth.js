module.exports = {
    signUp(req, res) {
        console.log(req.body);
        res.send('respond with a resource');
    },

    signIn(req, res) {
        const { email, password } = req.body;

        if (email !== 'email@email.ru' || password !== 'password') {
            res.status(401).send('Invalid username or password');
            return;
        }

        const user = {
            id: 1,
        }

        req.session.regenerate(err => {
            if (err) throw err;

            req.session.userId = user.id;

            req.session.save(err => {
                if (err) return next(err);

                res.redirect('/users');
            });
        });
    },

    feedback(req, res) {
        console.log(req.body);
        res.send('respond with a resource');
    }
}
