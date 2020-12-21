FROM node:14.15.3
LABEL maintainer="Fabio Tovar <fabiostovarr@gmail.com>"

COPY . /app
WORKDIR /app

RUN rm ./yarn.lock
RUN rm -rf ./node_modules

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]