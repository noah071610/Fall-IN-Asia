FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install -g npm@latest

RUN npm install --force

COPY . .

RUN npm run build

CMD ["npm","run","start"]
