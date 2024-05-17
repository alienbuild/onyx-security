#!/bin/bash

# Stop any previously running container
docker stop onyx-security_container || true

# Remove the container if it exists
docker rm onyx-security_container || true

# Run a new container
docker run --name onyx-security_container --rm -p 3003:3000 onyx-security
