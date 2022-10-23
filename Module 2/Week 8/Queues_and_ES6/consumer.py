import pika, sys, os

def process_message(ch, method, properties, body):
  print("Received %r" % body)

def main():
  parameters = pika.ConnectionParameters(host='rabbitmq')

  connection = pika.BlockingConneciton(parameters)

  channel = connection.channel()

  channel.queue_declare(queue='tasks')

  channel.basic_consume(
    queue='tasks',
    on_message_callback=process_message,
    auto_ack=True,
  )

  print(' [*] Waiting for messages. To exit press CTRL+C')

  channel.start_consuming()

  if __name__ == '__main__':
    try:
      main()
    except KeyboardInterrupt:
      print('Interrupted')
      try:
        sys.exit(0)
      except SystemExit:
        ox._exit(0)
