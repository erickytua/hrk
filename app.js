{
  "buildpacks": [
    { "url": "https://github.com/heroku/heroku-buildpack-chrome-for-testing" },
    { "url": "heroku/nodejs" }
  ],
  "environments": {
    "test": {
      "env": {
        "GOOGLE_CHROME_BIN": "/app/.apt/usr/bin/google-chrome-stable",
        "NODE_OPTIONS": "--max-old-space-size=12000"
      },
      "buildpacks": [
        { "url": "https://github.com/heroku/heroku-buildpack-chrome-for-testing" },
        { "url": "heroku/nodejs" }
      ],
      "formation": {
        "test": {
          "size": "performance-l"
        }
      }
    }
  }
}
