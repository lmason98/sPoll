# Use latest python
FROM python:3.11

# Ensures python output is unbuffered when written out
ENV PYTHONUNBUFFERED 1

# System dependencies
RUN apt-get update && apt-get install -y netcat-traditional

# Create spoll user
RUN useradd -ms /bin/sh spoll

# Add user bin to path
ENV PATH /home/spoll/.local/bin:$PATH

# Create api directory
RUN mkdir /api
RUN mkdir /api/staticfiles

# Set api directory to working directory
WORKDIR /api

# Copy project files to /api
COPY . /api/
COPY ./entrypoint.sh /api/entrypoint.sh
RUN chmod +x /api/entrypoint.sh
RUN chown -R spoll:spoll /api/

# Change to spoll user
USER spoll

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["/api/entrypoint.sh"]
