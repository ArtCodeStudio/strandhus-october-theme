module.exports = {
  apps : [{
    name        : "mjpeg-proxy",
    script      : "yarn run start",
    watch       : false,
    cron_restart: "0 0 * * *",
    env: {
      "NODE_ENV": "production",
      "NODE_TLS_REJECT_UNAUTHORIZED": "0"
    }
  }]
};
