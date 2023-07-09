FROM 15.3-alpine3.18

ENV POSTGRES_USER 'q-postgre-admin'
ENV POSTGRES_PASSWORD 'totally-not-123'
ENV POSTGRES_DB 'QAPP'
ADD backend-core-CreateTables.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
RUN postgres