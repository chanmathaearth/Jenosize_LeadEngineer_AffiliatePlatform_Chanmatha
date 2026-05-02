FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn prisma generate
RUN yarn build

EXPOSE 3000

CMD ["sh", "-c", "yarn prisma migrate deploy && yarn start:prod"]