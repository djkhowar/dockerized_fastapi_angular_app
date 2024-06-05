FROM python:3.11.9-alpine3.20

RUN apk update & apk add git 

WORKDIR /usr/app
RUN git clone https://github.com/djkhowar/dockerized_fastapi_angular_app 

RUN cp -r dockerized_fastapi_angular_app/backend/* ./

RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["python","-m" , "uvicorn","main:app","--host","0.0.0.0", "--port", "8000"]
