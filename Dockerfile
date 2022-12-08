FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN NPM INSTALL
RUN NPM RUN BUILD
ENV NODE_ENV production
EXPOSE 3000
CMD ["npx","serve","build"]