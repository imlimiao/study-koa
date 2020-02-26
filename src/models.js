const express = require('express');
var router = express.Router();
const models = require("../models");
router.get('/create', async (req, res) => {
    let { name } = req.query;
    let user = await models.User.create({
        name
    });
    console.log(user.id);
    res.json({
        message: '创建成功拉',
        user
    })
});

router.get('/list', async (req, res) => {
    let user = await models.User.findAll({});
    res.json({
        message: '获取成功',
        user
    })
});

router.get('/getUserByID/:id', async (req, res) => {
    let { id } = req.params;
    let user = await models.User.findAll({
        where: {
            id
        }
    });
    res.json({
        message: '获取成功',
        user
    })
});

module.exports = router