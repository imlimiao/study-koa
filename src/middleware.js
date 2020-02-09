const express = require('express');
var url = require('url');
var router = express.Router()
router.use('*', function timeLog(req, res, next) {
    console.log('middleTime: ', Date.now());
    var result = url.parse(req.url, true);
    name = result.query.name.replace(/(^s*)|(s*$)/g, "");
    console.log(unescape(name), name == '', name.length);
    if (!name || typeof name == "undefined" || name == null || name == "" || name == '') {
        res.json({
            message: 'name 为空，请重新传输 '
        });
    } else {
        next();
    }
});

router.get('/test', (req, res, next) => {
    res.json({
        message: 'i am studing express-nodejs '
    });
});



module.exports = router