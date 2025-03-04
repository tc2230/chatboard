FROM node:20-alpine

RUN apk update && apk add tzdata nano

RUN mkdir /deploy

COPY . /deploy

WORKDIR /deploy

RUN npm install
