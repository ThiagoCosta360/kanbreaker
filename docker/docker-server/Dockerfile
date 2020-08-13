FROM node:latest

WORKDIR /home/node/app

COPY ./server/package.json .

RUN npm install --quiet

COPY ./server .

EXPOSE 9000

CMD npm run start
