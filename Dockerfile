FROM ubuntu

MAINTAINER Arpitha Ananthamurthy <arpitha1993@gmail.com>

RUN apt -get update -y

RUN node app.js

EXPOSE 5000
