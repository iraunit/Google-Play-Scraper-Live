FROM node:22

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3005

CMD ["node", "index.js"]
