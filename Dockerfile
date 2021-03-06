FROM node:17.3-alpine

WORKDIR /app
ADD package.json /app/package.json

RUN npm install

ADD . /app
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]