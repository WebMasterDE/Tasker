FROM node:18.18.2 as build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm install -g @angular/cli@16
#RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
CMD ["ng", "serve", "--host", "0.0.0.0"]
EXPOSE 4201
#FROM node:20.11.1 as build
#WORKDIR /app
#COPY package*.json ./
#RUN npm install -g @angular/cli
#RUN npm install
#RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
#COPY . .
#CMD ["ng", "serve", "--host", "0.0.0.0"]



# command to build & run docker image
# sudo docker-compose up -d --build
