const router = require('express').Router();
const marked = require('marked');

const readme = require('../utils/readme');
const utils  = require('../utils/utils');

// Home Page
router.get('/', (_, res) => {
    readme.get()
        .then(data => res.render('index', {
            readme: marked.parse(data),
            firstname_placeholder: utils.randomFirstname()
        }));
});

module.exports = router;
