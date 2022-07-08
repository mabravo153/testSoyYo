FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run tsc

COPY package*.json ./

EXPOSE 9000

CMD ["npm", "run", "start"]
