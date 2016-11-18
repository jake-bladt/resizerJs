FROM node:7.1.0-onbuild
MAINTAINER Jake Bladt <jake@jakebladt.com>
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --s sharp
RUN npm install
