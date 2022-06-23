# [Constnium](https://git.kennel.ml/Anri/Constnium)

Calculate your own constant based on your first name.

## FAQ
There is a [FAQ here](./FAQ.md) if you want to know more about the project.

## Public demo
[constnium.kennel.ml](https://constnium.kennel.ml/)

## Host it yourself
Clone the repo and run `npm run main`.

### Docker
> Docker-compose
```docker-compose
version: "3"

services:
  constnium:
    build: https://git.kennel.ml/Anri/Constnium.git#main
    container_name: Constnium
    ports:
      - 3000:3000
    restart: unless-stopped
```

## Contribution
Feel free to contribute 🙂.
