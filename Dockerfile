# Stage 1
FROM node:alpine3.10 as angular-build

# RUN mkdir -p /app

WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

# Stage 2

FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --from=angular-build /app/ /usr/src/app/

COPY --from=angular-build /app/dist/theme-example /usr/src/app/

EXPOSE 8080

CMD [ "node", "server.js" ]