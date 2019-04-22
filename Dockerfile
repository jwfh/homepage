# Build environment
FROM node:11-stretch as builder
RUN apt update -y && apt upgrade -y \
  && apt install -y make automake autoconf clang gawk libc-dev libgl1-mesa-glx
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# Production environment
FROM nginx:alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
