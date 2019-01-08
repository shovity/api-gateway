FROM node:alpine

WORKDIR /code

COPY . .

RUN yarn

EXPOSE 3100

CMD [ "yarn", "start" ]