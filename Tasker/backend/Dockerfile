FROM node:20.11.1

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install\
    && npm install -g typescript

COPY . .

EXPOSE 3000

CMD npm run build 








#FROM node:20.11.1

#WORKDIR /usr/src/app
#COPY package*.json ./

#RUN npm install\
    # && npm install pm2 -g \
#    && npm install -g typescript

#COPY . .

#EXPOSE 3000

#CMD npm run serve

# command to build docker image
# sudo docker-compose up -d --build
