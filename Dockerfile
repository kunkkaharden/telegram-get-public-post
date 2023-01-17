FROM node:18.12.1-alpine3.16
WORKDIR /app
COPY . /app
RUN npm install
RUN ls
CMD [ "sh", "-c", "npm run start"]