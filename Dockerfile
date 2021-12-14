FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001
ENV NODE_ENV production
CMD [ "npm", "run" ,"start" ]