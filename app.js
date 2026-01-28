{
  "name": "Node Puppeteer Performance Test",
  "description": "Running Puppeteer on Performance-L Dyno with Heroku CI",
  "env": {
    "GOOGLE_CHROME_BIN": {
      "description": "Path to the Google Chrome binary",
      "value": "/app/.apt/usr/bin/google-chrome"
    },
    "NODE_OPTIONS": {
      "description": "Memory limit optimization for Node.js",
      "value": "--max-old-space-size=12000"
    }
  },
  "buildpacks": [
    { "url": "https://github.com/heroku/heroku-buildpack-chrome-for-testing" },
    { "url": "heroku/nodejs" }
  ],
  "environments": {
    "test": {
      "formation": {
        "test": {
          "quantity": 1,
          "size": "performance-l"
        }
      },
      "env": {
        "NODE_ENV": "test",
        "GOOGLE_CHROME_BIN": "/app/.apt/usr/bin/google-chrome",
        "NODE_OPTIONS": "--max-old-space-size=12000"
      },
      "buildpacks": [
        { "url": "https://github.com/heroku/heroku-buildpack-chrome-for-testing" },
        { "url": "heroku/nodejs" }
      ]
    }
  }
}
