module.exports = function(app) {
    var User = app.models.User;
    User.create({email: 'yupyo@rnb.com', password: 'lim'}, function(err, user) {
        console.log(user);
    });
    User.login({username: 'yupyo', password: 'lim'}, function(err, accessToken) {
        console.log(accessToken);
    })
}

var config = require('../../server/config.json'); 
var path = require('path');
module.exports = function(user) {
    user.afterRemote('create', function(context, user) {
        console.log('> user.afterRemote triggered');
        var options = {
            type: 'email',
            to: user.email,
            from: 'zoflrjs2145@naver.com',
            subject: 'Thanks for registering yuPyo',
            template: path.resolve(_dirname, '../../server/views/verify.ejs'),
            redirect: 'verified',
            user: user
        };
        user.verify(options, function(err, respones) {
            if(err) {
                next(err);
                return ;
            }
            console.log('> verification email sent: ', response);
            context.res.render('response', {
                title: 'Signed up successfully',
                content: 'Please check your email and click on the verification link ' + 'before loggin in.',
                redirectTo: '/',
                redirectToLinkText: 'Log in'
            });
        });
    });
};
