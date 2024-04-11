# Sử dụng node làm base image
FROM node:21-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Cài đặt bash shell
RUN apk add --no-cache bash

# Build ứng dụng
RUN npm run build

# Mở cổng 3000 để truy cập ứng dụng React
EXPOSE 3000

# Command để chạy ứng dụng khi container được khởi chạy
CMD ["yarn", "start"]
