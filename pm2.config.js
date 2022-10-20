module.exports = {
  apps: [{
    name: 'saul-goodman',
    script: './src/index.js',
    cwd: './',
    args: '',
    interpreter: '',
    interpreter_args: '',
    watch: false,
    ignore_watch: [
      'node_modules',
      'public'
    ],
    exec_mode: 'fork',
    instances: '1',
    error_file: './logs/app-err.log',
    out_file: './logs/app-out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    // 如果 20s 内重启 10 次, 则认为有错误，不再重启
    min_uptime: 20000,
    max_restarts: 5,
    autorestart: true
  }]
}
