## Build environment
FROM node:16-alpine3.16 as build

WORKDIR /app
RUN npm install -g pnpm

COPY . .
RUN pnpm install --prod
RUN npm run build

## Production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]