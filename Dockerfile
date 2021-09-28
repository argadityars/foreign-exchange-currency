FROM node:14.17.6-alpine3.12 AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]