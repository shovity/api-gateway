FROM node:alpine

WORKDIR /code

COPY . .

RUN yarn

EXPOSE 80

CMD [ "yarn", "start" ]