FROM node:16

RUN npm i serve -g -y

WORKDIR /usr/app
COPY ./src/out .

EXPOSE 3000

ENTRYPOINT [ "serve", "-s", "." ]