# Use an official Node runtime as a parent image
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vite React application
RUN npm run build

# Use an official Nginx runtime as a parent image
# FROM nginx:alpine

# # Copy the build output from the builder stage to the nginx web root
# COPY --from=builder /app/build /usr/share/nginx/html

# # Expose port 80
EXPOSE 8080

# Start Nginx

CMD ["node", "server.js"]