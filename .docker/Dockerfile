FROM node:12.16.3-alpine3.9 as prod
ENV NODE_ENV=production
# ADD https://github.com/krallin/tini/releases/download/v0.18.0/tini /tini
# RUN chmod +x /tini
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force 
COPY --chown=node:node . .
RUN npm run build
# ENTRYPOINT ["/tini", "--"]

FROM nginx:1.17.10-alpine as proxy
COPY --from=prod /app/build /usr/share/nginx/html