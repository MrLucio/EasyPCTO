FROM node:10.18.1-alpine3.9

RUN apk add --no-cache git

COPY ./package.json .
    
RUN npm install

RUN npm install react-scripts@2.1.8 -g

CMD ["npm", "start"]