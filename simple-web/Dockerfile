# Specify image
# FROM alpine
FROM node:lts-alpine

# Set working directory
WORKDIR /usr/app

# Only copy package.json to avoid unnecessary rebuilds
COPY ./package.json ./

# Install dependencies
# RUN apk add --update nodejs nodejs-npm
RUN npm install

# Copy other files
COPY ./ ./

CMD ["npm", "start"]
