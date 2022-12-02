# ==== CONFIGURE =====
FROM node:18-alpine AS development

WORKDIR /app

COPY . .
# ==== BUILD =====

RUN npm ci 

RUN npm run build
# ==== RUN =======

EXPOSE 3000

CMD [ "npx", "serve", "build" ]