# Use an official Node.js runtime as a parent image
FROM node:16-alpine

#)ptimize the installation of Node.js packages 
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the application listens on
EXPOSE 8000

# Start the application
CMD [ "npm", "run", "start" ]
