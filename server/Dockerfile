FROM node:10 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3060

CMD ["npm", "run", "start:prod"]