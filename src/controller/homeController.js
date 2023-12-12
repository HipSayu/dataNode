const handleHelloWord = (req, res) => {
    return res.render('home.ejs');
};
const hanldeCheckHeartbeat = (req, res) => {
    console.log(req.body);
};

module.exports = {
    handleHelloWord,
    hanldeCheckHeartbeat,
};
