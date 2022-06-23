const fetch = require('node-fetch')

// URL of the repo
const repoURL = 'https://git.kennel.ml/Anri/Constnium/raw/branch/main/README.md'

// Store the data from the repo
let data = null

// Store last time data as been pulled from the repo
let timestamp = 0

// Retrieve the data from the repo
async function get () {
    const now = Date.now()
    // If data is older than one day, refresh it
    if (Math.ceil(Math.abs(now - timestamp) / (1000 * 3600 * 24)) > 2 || data === null) {
        await fetch(repoURL)
            .then(res => {
                data = res.text()
                timestamp = now
            })
    }

    return data
}

module.exports = {
    get
}
