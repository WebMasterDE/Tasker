# Stage 1: Build the frontend application
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Copy the frontend files to Nginx and run Nginx
FROM nginx:alpine
COPY ssl /etc/nginx/ssl
COPY nginx_config /etc/nginx/conf.d 
COPY --from=builder /app/dist/tasker /usr/share/nginx/html
EXPOSE 4201
