# [Constnium](https://git.mylloon.fr/Anri/Constnium)

Calculate your own constant based on your first name.

## FAQ

There is a [FAQ here](./FAQ.md) if you want to know more about the project.

## Public demo

[constnium.mylloon.fr](https://constnium.mylloon.fr/)

## Host it yourself

Clone the repo and run `npm run main`.

### Docker

[![status-badge](https://ci.mylloon.fr/api/badges/73/status.svg)](https://ci.mylloon.fr/repos/73)

> Docker-compose

```docker-compose
version: "3"

services:
  constnium:
    image: git.mylloon.fr/anri/constnium:latest
    container_name: Constnium
    ports:
      - 3000:3000
    restart: unless-stopped
```

## Contribution

Feel free to contribute 🙂.
