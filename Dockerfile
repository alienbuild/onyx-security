# Use the official Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Define an argument for the npm token
ARG NPM_TOKEN

# Copy the .npmrc file to the container
COPY .npmrc .npmrc

# Copy package.json and other dependency management files
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your application code
COPY prisma ./prisma
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build your application
RUN yarn build

## Remove the .npmrc file for security
#RUN rm -f .npmrc

# Expose the port your app runs on
EXPOSE 3003
# Command to run your app (adjust the port as needed)
CMD ["yarn", "start", "-p", "3003"]
