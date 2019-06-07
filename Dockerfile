# Copyright (c) 2019 Jacob WF House.
#
# This file is licensed under a MIT license.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to
# deal in the Software without restriction, including without limitation the
# rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.

# Build environment
FROM node:11-stretch as builder
RUN apt update -y && apt upgrade -y \
  && apt install -y make automake autoconf clang gawk libc-dev libgl1-mesa-glx
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# Production environment
FROM nginx:alpine
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
RUN sed -i -e 's/application\/pdf/application\/octet-stream/' /etc/nginx/mime.types && sed -i -e 's/\s*#error_page\s*404\s*\/404\.html\;/error_page 404 \/404\/;/' /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
