FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY . .
CMD ["python", "example.py"]

# docker build -f Dockerfile.dev . -t image_name
# docker run -p "8000:8000” -v "$(pwd):/app" image_name
