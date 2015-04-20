FROM node
RUN apt-get update
RUN npm install express
RUN npm install gzippo
COPY /build /
CMD node web.js
EXPOSE 80
