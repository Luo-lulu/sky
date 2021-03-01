# FROM node:10.16.3
FROM node:10.16.3-alpine
WORKDIR /app
ADD . /app
RUN npm install
COPY  . .
EXPOSE 5001
CMD node server.js