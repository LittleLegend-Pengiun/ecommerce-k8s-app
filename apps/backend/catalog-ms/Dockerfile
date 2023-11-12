# Use an official OpenJDK runtime as a base image with Java 17
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Build the Spring Boot application
RUN ./mvnw package -DskipTests

# Expose the port that your Spring Boot application will run on
EXPOSE 8090

# Define the command to run your application
CMD ["java", "-jar", "target/catalog-0.0.1-SNAPSHOT.jar"]
