FROM redis:7.2-rc2-alpine3.18

EXPOSE 6379
RUN redis-server