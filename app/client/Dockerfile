FROM node:13.8.0-alpine3.10

RUN apk add --no-cache git

ENV PATH node_modules/.bin:$PATH

COPY ./package.json .

RUN npm install

RUN npm install react-scripts@3.4.0 -g

CMD ["npm", "start"]