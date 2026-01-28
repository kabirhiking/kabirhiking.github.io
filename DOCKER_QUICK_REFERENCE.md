# 🐳 Docker Quick Reference - Portfolio App

## Essential Commands

### Build & Run (First Time)
```bash
# Build image
docker build -t portfolio-app .

# Run container
docker run -d -p 3000:80 --name portfolio-container portfolio-app

# Access app: http://localhost:3000
```

### Daily Operations
```bash
# Start container
docker start portfolio-container

# Stop container
docker stop portfolio-container

# View logs
docker logs portfolio-container

# Check running containers
docker ps
```

### Updates & Rebuilds
```bash
# Stop and remove old container
docker stop portfolio-container
docker rm portfolio-container

# Rebuild image
docker build -t portfolio-app .

# Run new container
docker run -d -p 3000:80 --name portfolio-container portfolio-app
```

### Troubleshooting
```bash
# Check container status
docker ps -a

# View detailed logs
docker logs -f portfolio-container

# Enter container shell
docker exec -it portfolio-container /bin/sh

# Clean up unused resources
docker system prune
```

### Different Ports
```bash
# Run on port 8080
docker run -d -p 8080:80 --name portfolio-container portfolio-app

# Run on port 5000
docker run -d -p 5000:80 --name portfolio-container portfolio-app
```

## File Structure Required
- `Dockerfile` ✅
- `.dockerignore` ✅
- `package.json` ✅
- `src/` folder with your React app ✅

## Access Your App
After running the container, open browser:
- **Main:** http://localhost:3000
- **Alt ports:** http://localhost:8080 or http://localhost:5000

---
*For detailed setup and deployment options, see DOCKER_SETUP_GUIDE.md*
