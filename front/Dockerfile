ARG NODE_VERSION=15.14
ARG ALPINE_VERSION=3.11

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS client

WORKDIR /app

ARG NODE_ENV=production
ARG VUE_APP_API_HOST=api-books.boutvalentin.com
ARG VUE_APP_API_PORT=80

ENV NODE_ENV=$NODE_ENV
ARG VUE_APP_API_HOST=$VUE_APP_API_HOST
ARG VUE_APP_API_PORT=$VUE_APP_API_PORT

COPY package*.json yarn.lock ./
RUN set -eux; \
    yarn install --non-interactive --no-progress; \
    yarn cache clean

COPY .eslintrc.js .browserslistrc babel.config.js tsconfig.json ./
COPY src src/
COPY public public/ 
COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint

RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]