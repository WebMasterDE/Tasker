FROM node:18.18.2 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM nginx:stable
#COPY ssl /etc/nginx/ssl
COPY nginx_config /etc/nginx/conf.d 
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html
EXPOSE 4201





#FROM node:18.18.2 as build
#WORKDIR /app
#COPY package*.json ./
#COPY . .
#RUN npm install
#RUN npm install -g @angular/cli@16
#RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
#CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
#EXPOSE 4201







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
