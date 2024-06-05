from node:alpine as BUILD_IMAGE 
RUN apk update & apk add git
RUN npm install -g @angular/cli
WORKDIR /usr/app
RUN git clone https://github.com/djkhowar/dockerized_fastapi_angular_app 
RUN cp -r /usr/app/dockerized_fastapi_angular_app/frontend/* ./
RUN npm install 
RUN ng build --configuration=production

#main image 
from nginx:stable-alpine3.19-perl

COPY --from=BUILD_IMAGE /usr/app/dist/testapp/* /usr/share/nginx/html

#EXPOSE 80 
