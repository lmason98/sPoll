FROM node:20.8.1

WORKDIR /frontend

COPY . /frontend
COPY ./entrypoint.sh /frontend/entrypoint.sh

RUN npm install

EXPOSE 3000

RUN chmod +x /frontend/entrypoint.sh

CMD ["/frontend/entrypoint.sh"]
