module.exports = {
  "source": ["tokens/**/*.json"],
  "platforms": {
    "compose": {
      "transformGroup": "compose",
      "buildPath": "build/compose/",
      "files": [{
        "destination": "Color.kt",
        "format": "compose/object"
      }]
    }
  }
};