  GNU nano 5.4                                                                               Dockerfile                                                                                         
# Use Node.js version 16 as the base image
FROM node:16

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies with the --legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]