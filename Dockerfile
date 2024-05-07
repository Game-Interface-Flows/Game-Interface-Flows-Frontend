FROM node:16-alpine

WORKDIR /app

COPY ./game-interface-flows-project/package.json ./game-interface-flows-project/package-lock.json ./

RUN npm install

COPY ./game-interface-flows-project/ .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]