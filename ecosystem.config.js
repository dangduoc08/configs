module.exports = {
  apps: [
    {

      /*
        Tên của Node sẽ chạy
      */
      name: 'api',

      /*
        Script sẽ chạy app
      */
      script: 'yarn start',

      /*
        Thêm đối số vào script
      */
      args: '-port 3001',

      /*
        Số lượng instance sẽ chạy
      */
      instances: 1,

      /*
        Tự động chạy lại app nếu app bị crash
      */
      autorestart: true,

      /*
        Chạy ở chế độ watch file
      */
      watch: false,

      /*
        Liệt kể danh sách các folder không muốn watch
      */
      ignore_watch: [
        'node_modules'
      ],

      /*
        Tự động restart nếu memory chạm ngưỡng chỉ định
      */
      max_memory_restart: '1K', 

      /*
        Khai báo các biến môi trường
      */
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
}
