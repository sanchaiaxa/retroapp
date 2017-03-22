FROM node:7.7.0

WORKDIR /opt/retroapp
ADD . .

RUN npm install && \
    npm prune && \
    npm dedupe && \
    npm run build

CMD ["npm", "start"]