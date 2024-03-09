# RabbitMQ implementation

## Container

Run `yarn workspace rabbitmq mq:init`

## Docker cluster

Build the `haproxy-server` by using command `yarn workspace haproxy:docker:build`.

Run the proxy and nodes by using command `yarn workspace mq:cluster:init`.

Join the second node to the cluster
```bash
docker exec -ti rabbitmq-node-2 bash -c "rabbitmqctl stop_app"
docker exec -ti rabbitmq-node-2 bash -c "rabbitmqctl join_cluster rabbit@rabbitmq-node-1"
docker exec -ti rabbitmq-node-2 bash -c "rabbitmqctl start_app"
```

Do the same with the third node to the cluster
```bash
docker exec -ti rabbitmq-node-3 bash -c "rabbitmqctl stop_app"
docker exec -ti rabbitmq-node-3 bash -c "rabbitmqctl join_cluster rabbit@rabbitmq-node-1"
docker exec -ti rabbitmq-node-3 bash -c "rabbitmqctl start_app"
```