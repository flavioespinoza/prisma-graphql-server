FROM node:10.16

WORKDIR /app

# Both package.json and package-lock.json
COPY package*.json /app/

# Install a project with a clean slate
# https://docs.npmjs.com/cli/ci.html
RUN npm ci

# Build production app in src/ directory
COPY . /

# Build
RUN npm run build

# Expose internal port
EXPOSE 3030

CMD [ "npm", "start" ]
