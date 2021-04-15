ARG NODE_VERSION=15.14
ARG ALPINE_VERSION=3.11

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS client

WORKDIR /app

ARG NODE_ENV=production

ENV NODE_ENV=$NODE_ENV

COPY package*.json ./
RUN set -eux; \
    npm install --non-interactive --no-progress; 

COPY index.js ./
COPY src src/
COPY config ./config

ENTRYPOINT ["node"]
CMD [ "index.js" ]