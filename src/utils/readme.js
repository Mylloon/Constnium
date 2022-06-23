const fetch = require('node-fetch');

// URL of the repo
const repoURL = 'https://git.kennel.ml/api/v1/repos/Anri/Constnium/contents/README.md';

// Store the data from the repo
let data = null;

// Store last time data as been pulled from the repo
let timestamp = 0;

// Retrieve the data from the repo
async function get() {
    const now = Date.now();
    // If data is older than one day, refresh it
    if (Math.ceil(Math.abs(now - timestamp) / (1000 * 3600 * 24)) > 2 || data === null) {
        await fetch(repoURL)
            .then(res => res.json().then(json => {
                // eslint-disable-next-line no-undef
                data = Buffer.from(json.content, json.encoding).toString('utf8');
                timestamp = now;
            }));
    }

    return data;
}

module.exports = {
    get
};
