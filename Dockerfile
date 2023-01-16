## Build environment
FROM node:16-alpine3.16 as build

ARG BACKEND_URL

WORKDIR /app
RUN npm install -g pnpm

# Install dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --prod

COPY . .
RUN echo "VITE_POCKETBASE_URL=${BACKEND_URL}" > .env
RUN npm run build

## Production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]