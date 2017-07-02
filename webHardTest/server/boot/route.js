module.exports = function(app) {
    app.get('/ping', function(req, res) {
        res.send('pongPong');
    });

    app.get('/pong', function(req, res) {
        res.send('pingpinping');
    });
};