# The publisher will connect to RabbitMQ, send a single message, then exit.

# dependency
# pip install pika

import pika

QUEUE_URL='localhost'
QUEUE_NAME='buffer'
MESSAGE='{"key": "some", "value": "info"}'

# connect to a broker hosted on 'QUEUE_URL'
connection = pika.BlockingConnection(
pika.ConnectionParameters(host=QUEUE_URL))
channel = connection.channel()

# declare/create a queue
channel.queue_declare(queue=QUEUE_NAME)

# publish message to the queue
# exchange='' => use the default exchange
channel.basic_publish(exchange='', routing_key=QUEUE_NAME, body=MESSAGE)
print(f" [x] Sent '{MESSAGE}'")

# close the connection
connection.close()
