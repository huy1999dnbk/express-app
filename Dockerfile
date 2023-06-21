FROM node:18 as builder

WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

#Bundle app source
COPY . .

RUN npm run build

#stage 2
FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY --from=builder /usr/src/app/dist ./dist
COPY .env .

EXPOSE 4000
CMD node dist/server.js

