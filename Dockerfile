FROM node:14

COPY ./micronode-event /opt/app

WORKDIR /opt/app

RUN yarn

CMD yarn start:dev