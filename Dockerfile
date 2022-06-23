# syntax=docker/dockerfile:1

FROM node:16.15.0-alpine3.15

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 3000

CMD [ "node", "src/server.js" ]
