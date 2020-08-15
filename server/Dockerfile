FROM node:latest

WORKDIR /home/node/app

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 9000

CMD npm run start
