# Step 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

# Build argument for base path (default for Docker deployment)
ARG BUILD_BASE_PATH="/"

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the full source and build it
COPY . .
# Build with configurable base path
RUN npm run build -- --base=${BUILD_BASE_PATH}

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built app to Nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Custom Nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
