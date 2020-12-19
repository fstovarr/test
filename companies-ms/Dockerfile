FROM node:14.15.3-alpine3.10

LABEL maintainer="Fabio Tovar <fabiostovarr@gmail.com>"

COPY . /app
WORKDIR /app

RUN yarn

ENTRYPOINT ["sh", "./entrypoint.sh"]