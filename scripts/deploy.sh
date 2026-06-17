#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-portfolio}"
CONTAINER_NAME="${CONTAINER_NAME:-portfolio}"
APP_PORT="${APP_PORT:-3000}"
APP_DIR="${APP_DIR:-/opt/portfolio}"

cd "$APP_DIR"

echo "==> Pulling latest code..."
git pull origin main

echo "==> Building Docker image..."
docker build -t "${IMAGE_NAME}:latest" .

echo "==> Restarting container..."
docker stop "${CONTAINER_NAME}" 2>/dev/null || true
docker rm "${CONTAINER_NAME}" 2>/dev/null || true
docker run -d \
  --name "${CONTAINER_NAME}" \
  --restart unless-stopped \
  -p "${APP_PORT}:3000" \
  "${IMAGE_NAME}:latest"

docker image prune -f
echo "==> Deploy complete — http://localhost:${APP_PORT}"
