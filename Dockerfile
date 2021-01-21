FROM node:slim

RUN apt update -y
RUN npm i -g typescript ts-node