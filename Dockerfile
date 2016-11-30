FROM node:7.1.0-onbuild
MAINTAINER Jake Bladt <jake@jakebladt.com>
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --s imagemagick
RUN npm install
COPY . /usr/src/app
EXPOSE 8080
CMD [ "npm", "start" ]
