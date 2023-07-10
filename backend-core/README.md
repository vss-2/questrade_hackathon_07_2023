## Backend-core

### This folder contains the microservice which control business logic and rules (request a loan, check if it's score is fit for a loan, check payments). It was created this way so has its own DBs to store data like contracts, loans, payments and accounts. The idea was to use some ORM (like Prisma) in full implementation to keep migrations keep up with development. Implemented with NodeJS.

<br>

### A must have implementation would be adding an Apache Kafka instance or RabbitMQ to handle data messages with other microservices and keep the system fully consistent if a spike into load balance occurs.
