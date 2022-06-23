const fetch = require('node-fetch')

async function data () {
    return await fetch('https://git.kennel.ml/Anri/Constnium/raw/branch/main/README.md')
        .then(res => res.text())
}

module.exports = {
    data
}
