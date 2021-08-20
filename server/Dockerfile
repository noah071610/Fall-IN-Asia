FROM node:alpine AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install -g npm@7.20.6
RUN npm install --force
COPY . .
RUN npm run schema:sync
RUN npm run seed:run
RUN npm run build

FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

CMD ["npm", "run", "start"]