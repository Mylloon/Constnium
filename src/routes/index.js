const router = require('express').Router();

// Home Page
router.get('/', (_, res) => {
    res.render('index');
});

module.exports = router;
