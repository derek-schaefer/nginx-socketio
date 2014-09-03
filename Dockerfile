FROM ubuntu:14.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y nginx nodejs npm

ADD . app

WORKDIR /app

RUN npm install
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s $(pwd)/nginx.conf /etc/nginx/sites-enabled/app.conf

EXPOSE 80

CMD service nginx start && nodejs app.js
