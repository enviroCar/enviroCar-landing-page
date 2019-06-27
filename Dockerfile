FROM nginx:alpine
COPY ./ /usr/share/nginx/html/
HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
  CMD wget http://localhost:80/ -q -O - > /dev/null 2>&1

