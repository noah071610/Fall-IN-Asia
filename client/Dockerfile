FROM node:alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm install -g npm@7.20.6

RUN npm install --force

COPY . .

RUN npm run build

CMD ["npm","run","start"]
