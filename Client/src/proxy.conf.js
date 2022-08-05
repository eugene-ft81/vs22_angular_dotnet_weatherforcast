const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "http://localhost:16977",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
