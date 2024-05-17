# Use the official Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Build the Next.js application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3003

# Command to run your app (adjust the port as needed)
CMD ["npm", "start", "--", "-p", "3003"]
