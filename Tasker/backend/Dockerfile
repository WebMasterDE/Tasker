FROM node:20.11.1

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install\
    && npm install pm2 -g \
    && npm install -g typescript

COPY . .

EXPOSE 3000

CMD node ./app.js && pm2-runtime dist/app.js
