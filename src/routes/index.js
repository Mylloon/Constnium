const router = require('express').Router();
const marked = require('marked');

const readme = require('../utils/readme');

// Home Page
router.get('/', (_, res) => {
    readme.get()
        .then(data => res.render('index', { readme: marked.parse(data) }));
});

module.exports = router;
