import pika

parameters = pika.ConnectionParameters(host='rabbitmq')

connection = pika.BlockingConnection(parameters)

channel = connection.channel()

channel.queue_declare(queue='tasks')

channel.basic_publish(exchange='', routing_key='tasks', body='Data from producer')

print(" Sent 'Hello World!'")

connection.close()
