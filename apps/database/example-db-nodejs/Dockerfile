# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Copy build file
COPY dist ./dist

# # Run your build step (replace 'npm run build' with your actual build command)
# RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]
