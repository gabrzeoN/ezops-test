FROM node:16.19.0

WORKDIR /app/ezops

COPY ./package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD [ "npm", "start" ]