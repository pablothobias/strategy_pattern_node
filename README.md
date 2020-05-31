## Comando para rodar o container do postgreSQL
docker run \
    --name postgres \
    -e POSTGRES_USER=pablothobias \
    -e POSTGRES_PASSWORD=secretpassword \
    -e POSTGRES_DB=heros \
    -p 5432:5432 \
    -d \
    postgres

## Entrar no terminal do container do postgres
docker exec -it postgres /bin/bash

## Comando para rodar e linkar o adminer
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## Comando para rodar o container do MongoDb
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=secretpassword \
    -e POSTGRES_DB=heroes \
    -d \
    mongo:4

## Rodar mongo client
docker run --name mongoclient  -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

## Comando para criar um usuário teste no container do mongo
docker exec -it mongodb \
    mongo --host localhost -u admin -p secretpassword --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'pablothobias', pwd: 'secretpassword', roles: [{role: 'readWrite', db: 'herois'}]})"
    