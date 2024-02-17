#Stage 1
FROM node:18-alpine as build

# Specify where our app will live in the container
WORKDIR /portfolio-app

# Copy the React App to the container
COPY . /portfolio-app/

# Prepare the container for building React
RUN npm install
# We want the production version
RUN npm run build

# Prepare nginx
FROM nginx:1.19.0-alpine
COPY --from=build /portfolio-app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]