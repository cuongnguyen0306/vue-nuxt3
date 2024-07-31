FROM node:18 AS base
WORKDIR /app
RUN rm -rf node_modules
COPY package*.json ./
COPY yarn.lock ./
ENV NODE_OPTIONS=--max_old_space_size=8192
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "dev"]