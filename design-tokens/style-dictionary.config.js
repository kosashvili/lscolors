module.exports = {
  "source": ["tokens/**/*.json"],
  "platforms": {
    "ios": {
      "transformGroup": "ios",
      "buildPath": "build/ios/",
      "files": [{
        "destination": "Colors.swift",
        "format": "ios/colors.swift"
      }]
    }
  }
};