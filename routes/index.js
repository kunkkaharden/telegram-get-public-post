const express = require("express");
const router = express.Router();

const getPost = require('../services/index');

router.get('/get-post', async (req, res, next) => {
    res.status(200).send(await getPost(req.query.url));
});

module.exports = router;