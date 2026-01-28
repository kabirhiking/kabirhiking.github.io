# Complete Docker Setup Guide for React Portfolio App

## 📋 Prerequisites

Before starting, ensure you have the following installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac/Linux)
- [Node.js](https://nodejs.org/) (for local development)
- [Git](https://git-scm.com/) (for version control)

## 🗂️ Project Structure

```
Beutiful-PORTFOLIO/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   ├── RevealOnScroll.jsx
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Home.jsx
│   │       └── Projects.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── index.html
├── Dockerfile
├── .dockerignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🐳 Docker Configuration Files

### 1. Dockerfile (Multi-stage Build)

```dockerfile
# Step 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the full source and build it
COPY . .
# Build with base path set to root for Docker deployment
RUN npm run build -- --base=/

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built app to Nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Custom Nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### 2. .dockerignore

```
node_modules
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
dist
.git
.gitignore
README.md
.eslintcache
.vscode
*.md
.github/
```

## 🚀 Step-by-Step Docker Setup

### Step 1: Verify Docker Installation

```bash
# Check Docker version
docker --version

# Check Docker is running
docker info
```

### Step 2: Build Docker Image

```bash
# Navigate to project directory
cd "C:\Users\pc\Desktop\Beutiful-PORTFOLIO"

# Build the Docker image
docker build -t portfolio-app .

# Alternative with custom name
docker build -t my-portfolio:latest .
```

### Step 3: Run Docker Container

```bash
# Run container on port 3000
docker run -d -p 3000:80 --name portfolio-container portfolio-app

# Run with custom port (e.g., 8080)
docker run -d -p 8080:80 --name portfolio-container portfolio-app

# Run with auto-remove when stopped
docker run --rm -d -p 3000:80 --name portfolio-container portfolio-app
```

### Step 4: Verify Container is Running

```bash
# Check running containers
docker ps

# Check all containers (including stopped)
docker ps -a
```

### Step 5: Access Your Application

Open your browser and navigate to:
- `http://localhost:3000` (or your chosen port)

## 🛠️ Docker Management Commands

### Container Management

```bash
# Stop the container
docker stop portfolio-container

# Start a stopped container
docker start portfolio-container

# Restart the container
docker restart portfolio-container

# Remove the container
docker rm portfolio-container

# Force remove a running container
docker rm -f portfolio-container
```

### Image Management

```bash
# List all images
docker images

# Remove an image
docker rmi portfolio-app

# Remove unused images
docker image prune

# Remove all unused images
docker image prune -a
```

### Logs and Debugging

```bash
# View container logs
docker logs portfolio-container

# Follow logs in real-time
docker logs -f portfolio-container

# Execute commands inside running container
docker exec -it portfolio-container /bin/sh

# Inspect container details
docker inspect portfolio-container
```

## 🔧 Advanced Docker Configuration

### Custom Nginx Configuration (Optional)

Create `nginx.conf` file:

```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    
    sendfile        on;
    keepalive_timeout  65;
    
    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    gzip_comp_level 9;
    
    server {
        listen       80;
        server_name  localhost;
        root         /usr/share/nginx/html;
        index        index.html;
        
        # Handle client-side routing
        location / {
            try_files $uri $uri/ /index.html;
        }
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
        
        # Security headers
        add_header X-Content-Type-Options nosniff;
        add_header X-Frame-Options DENY;
        add_header X-XSS-Protection "1; mode=block";
    }
}
```

Then update Dockerfile:
```dockerfile
# Uncomment this line in your Dockerfile
COPY nginx.conf /etc/nginx/nginx.conf
```

### Environment Variables Support

Create `.env` file for different environments:

```bash
# .env.production
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My Portfolio
```

Update Dockerfile to handle environment variables:
```dockerfile
# Add this before RUN npm run build
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Build with environment
RUN npm run build -- --base=/ --mode=$NODE_ENV
```

## 🚢 Deployment Options

### 1. Local Development

```bash
# Quick local testing
docker run --rm -p 3000:80 portfolio-app
```

### 2. Docker Hub Deployment

```bash
# Tag for Docker Hub
docker tag portfolio-app yourusername/portfolio-app:latest

# Push to Docker Hub
docker login
docker push yourusername/portfolio-app:latest

# Pull and run from Docker Hub
docker pull yourusername/portfolio-app:latest
docker run -d -p 3000:80 yourusername/portfolio-app:latest
```

### 3. Cloud Platform Deployment

#### AWS ECS/Fargate
```bash
# Install AWS CLI and configure
aws ecr create-repository --repository-name portfolio-app

# Tag and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag portfolio-app:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio-app:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio-app:latest
```

#### Google Cloud Run
```bash
# Configure gcloud
gcloud auth configure-docker

# Tag and push to GCR
docker tag portfolio-app gcr.io/PROJECT-ID/portfolio-app
docker push gcr.io/PROJECT-ID/portfolio-app

# Deploy to Cloud Run
gcloud run deploy --image gcr.io/PROJECT-ID/portfolio-app --platform managed
```

#### Railway (Free Tier)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### DigitalOcean App Platform
1. Push your code to GitHub
2. Connect your GitHub repo to DigitalOcean App Platform
3. It will auto-detect your Dockerfile and deploy

### 4. Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    container_name: portfolio-app
    ports:
      - "3000:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    
  # Optional: Add a reverse proxy
  nginx-proxy:
    image: nginx:alpine
    container_name: nginx-proxy
    ports:
      - "80:80"
    volumes:
      - ./nginx-proxy.conf:/etc/nginx/nginx.conf
    depends_on:
      - portfolio
    restart: unless-stopped
```

Run with Docker Compose:
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build -d
```

## 🔍 Troubleshooting

### Common Issues and Solutions

1. **White Screen Issue**
   - Problem: Base URL configuration for GitHub Pages conflicts with Docker
   - Solution: Use `--base=/` flag in build command (already included)

2. **Port Already in Use**
   ```bash
   # Find process using port 3000 (Windows)
   netstat -ano | findstr :3000
   
   # Use different port
   docker run -d -p 3001:80 --name portfolio-container portfolio-app
   ```

3. **Container Won't Start**
   ```bash
   # Check logs
   docker logs portfolio-container
   
   # Check container status
   docker ps -a
   ```

4. **Build Fails**
   ```bash
   # Clear Docker cache
   docker builder prune
   
   # Rebuild without cache
   docker build --no-cache -t portfolio-app .
   ```

5. **Assets Not Loading**
   - Ensure `.dockerignore` excludes `dist` folder
   - Verify Vite build output is in `/app/dist`
   - Check Nginx is serving from correct directory

### Performance Optimization

1. **Multi-stage Build Benefits**
   - Smaller final image size (typically 20-30MB vs 200MB+)
   - Excludes development dependencies
   - Better security (no source code in final image)

2. **Image Size Optimization**
   ```bash
   # Check image size
   docker images portfolio-app
   
   # Use alpine-based images (already implemented)
   # Remove unnecessary packages in build stage
   ```

## 📝 Maintenance Commands

### Regular Maintenance

```bash
# Clean up unused resources
docker system prune

# Clean up everything (be careful!)
docker system prune -a

# Update base images
docker pull node:20-alpine
docker pull nginx:alpine

# Rebuild with updated base images
docker build --no-cache -t portfolio-app .
```

### Monitoring

```bash
# Monitor resource usage
docker stats portfolio-container

# Check container health
docker inspect --format='{{.State.Health.Status}}' portfolio-container
```

## 🎯 Production Checklist

Before deploying to production:

- [ ] Environment variables configured
- [ ] Custom Nginx config (if needed)
- [ ] HTTPS setup (if deploying to cloud)
- [ ] Domain configuration
- [ ] Monitoring setup
- [ ] Backup strategy
- [ ] Security headers configured
- [ ] Gzip compression enabled
- [ ] Static asset caching configured
- [ ] Container health checks
- [ ] Resource limits set
- [ ] Logging configured

## 🆘 Support Commands Summary

```bash
# Complete setup from scratch
docker build -t portfolio-app .
docker run -d -p 3000:80 --name portfolio-container portfolio-app

# Quick restart
docker restart portfolio-container

# Clean rebuild
docker stop portfolio-container
docker rm portfolio-container
docker rmi portfolio-app
docker build -t portfolio-app .
docker run -d -p 3000:80 --name portfolio-container portfolio-app

# View application
# Open browser: http://localhost:3000
```

## 📊 Quick Status Check

```bash
# One-liner to check everything
echo "=== DOCKER STATUS ===" && \
docker --version && \
echo "=== IMAGES ===" && \
docker images portfolio-app && \
echo "=== RUNNING CONTAINERS ===" && \
docker ps --filter name=portfolio-container && \
echo "=== APP ACCESS ===" && \
echo "Your app should be available at: http://localhost:3000"
```

---

## 🎉 Congratulations!

You now have a complete Docker setup for your React portfolio app! This configuration provides:

- **Production-ready** multi-stage build
- **Optimized** image size using Alpine Linux
- **Scalable** deployment options
- **Comprehensive** troubleshooting guide
- **Industry-standard** best practices

