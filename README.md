# Pull Docker Image
``` bash
docker pull rabbitmq:3-management
```

# Start an Container Instance from Image
``` bash
docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```