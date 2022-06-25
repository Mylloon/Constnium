const fs = require('fs');

// Retrieve the FAQ file
const get = () => {
    return new Promise(function(ok) {
        fs.readFile('./FAQ.md', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                ok('# Erreur 404\nImpossible de trouver la FAQ.');
            }
            ok(data);
        });
    });
};

module.exports = {
    get
};
