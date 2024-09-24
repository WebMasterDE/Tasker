FROM node:20.11.1 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

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
