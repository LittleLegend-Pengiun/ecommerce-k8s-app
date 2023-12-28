# Use an official Node.js 18 runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port on which your application will run
EXPOSE 4000

# Define the command to run your application
CMD ["npm", "start"]
