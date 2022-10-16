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
    min_uptime: '60s',
    max_restarts: 30,
    autorestart: true,
    restart_delay: '60'
  }]
}
