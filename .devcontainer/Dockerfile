FROM node:24-slim
WORKDIR /workspace
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true


